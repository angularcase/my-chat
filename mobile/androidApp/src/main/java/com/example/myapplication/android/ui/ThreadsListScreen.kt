package com.example.myapplication.android.ui

import android.text.format.DateUtils
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Chat
import androidx.compose.material.icons.filled.Person
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import com.example.myapplication.android.viewmodel.ThreadsViewModel
import com.example.myapplication.model.ThreadResponse
import java.text.SimpleDateFormat
import java.util.*

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ThreadsListScreen(
    viewModel: ThreadsViewModel,
    onBack: () -> Unit
) {
    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = viewModel.spaceName,
                        fontWeight = FontWeight.Bold,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(
                            Icons.Default.ArrowBack,
                            contentDescription = "Back"
                        )
                    }
                },
                colors = TopAppBarDefaults.topAppBarColors(
                    containerColor = MaterialTheme.colorScheme.surface
                )
            )
        }
    ) { padding ->
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(padding)
        ) {
            // Filter chips
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 8.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                viewModel.filters.forEach { filter ->
                    val selected = viewModel.selectedFilter == filter.status
                    FilterChip(
                        selected = selected,
                        onClick = { viewModel.selectFilter(filter.status) },
                        label = { Text(filter.label) }
                    )
                }
            }

            when {
                viewModel.isLoading -> LoadingState()
                viewModel.error != null && viewModel.threads.isEmpty() -> ErrorState(
                    message = viewModel.error ?: "Unknown error",
                    onRetry = { viewModel.loadThreads() }
                )
                viewModel.threads.isEmpty() -> EmptyState()
                else -> {
                    LazyColumn(
                        contentPadding = PaddingValues(16.dp),
                        verticalArrangement = Arrangement.spacedBy(12.dp),
                        modifier = Modifier.fillMaxSize()
                    ) {
                        items(viewModel.threads, key = { it.id }) { thread ->
                            ThreadCard(thread = thread)
                        }
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalMaterial3Api::class)
@Composable
private fun ThreadCard(thread: ThreadResponse) {
    val visitorLabel = when {
        !thread.visitor.displayName.isNullOrBlank() -> thread.visitor.displayName!!
        !thread.visitor.email.isNullOrBlank() -> thread.visitor.email!!
        else -> "Anonymous"
    }
    val agentLabel = thread.agent?.displayName?.takeIf { it.isNotBlank() }
        ?: thread.agent?.email?.takeIf { it.isNotBlank() }
        ?: "Unassigned"
    val statusColor = when (thread.status) {
        "unassigned" -> MaterialTheme.colorScheme.tertiary
        "active" -> MaterialTheme.colorScheme.primary
        "closed" -> MaterialTheme.colorScheme.outline
        "expired" -> MaterialTheme.colorScheme.outline
        else -> MaterialTheme.colorScheme.outline
    }
    val relativeTime = remember(thread.lastActivityAt) {
        formatRelativeTime(thread.lastActivityAt)
    }

    Card(
        modifier = Modifier.fillMaxWidth(),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.5f)),
        elevation = CardDefaults.cardElevation(defaultElevation = 1.dp)
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Surface(
                shape = MaterialTheme.shapes.medium,
                color = MaterialTheme.colorScheme.primaryContainer,
                modifier = Modifier.size(48.dp)
            ) {
                Box(contentAlignment = Alignment.Center) {
                    Icon(
                        imageVector = Icons.Default.Chat,
                        contentDescription = null,
                        tint = MaterialTheme.colorScheme.onPrimaryContainer,
                        modifier = Modifier.size(24.dp)
                    )
                }
            }

            Spacer(modifier = Modifier.width(16.dp))

            Column(modifier = Modifier.weight(1f)) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    Text(
                        text = visitorLabel,
                        style = MaterialTheme.typography.titleMedium,
                        fontWeight = FontWeight.SemiBold,
                        maxLines = 1,
                        overflow = TextOverflow.Ellipsis
                    )
                    Surface(
                        shape = MaterialTheme.shapes.small,
                        color = statusColor.copy(alpha = 0.2f)
                    ) {
                        Text(
                            text = thread.status.replaceFirstChar { it.uppercase() },
                            style = MaterialTheme.typography.labelSmall,
                            color = statusColor,
                            modifier = Modifier.padding(horizontal = 6.dp, vertical = 2.dp)
                        )
                    }
                }

                Spacer(modifier = Modifier.height(4.dp))

                Text(
                    text = "$agentLabel · ${thread.count.messages} messages",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                    maxLines = 1,
                    overflow = TextOverflow.Ellipsis
                )

                Text(
                    text = relativeTime,
                    style = MaterialTheme.typography.labelSmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.8f),
                    modifier = Modifier.padding(top = 2.dp)
                )
            }
        }
    }
}

private fun formatRelativeTime(isoString: String): String {
    return try {
        val formats = listOf(
            "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'",
            "yyyy-MM-dd'T'HH:mm:ss'Z'",
            "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
            "yyyy-MM-dd'T'HH:mm:ssXXX"
        )
        val date = formats.firstNotNullOfOrNull { pattern ->
            try {
                SimpleDateFormat(pattern, Locale.US).apply {
                    timeZone = TimeZone.getTimeZone("UTC")
                }.parse(isoString)
            } catch (_: Exception) {
                null
            }
        } ?: return isoString
        val now = System.currentTimeMillis()
        DateUtils.getRelativeTimeSpanString(
            date.time,
            now,
            DateUtils.MINUTE_IN_MILLIS,
            DateUtils.FORMAT_ABBREV_RELATIVE
        ).toString()
    } catch (_: Exception) {
        isoString
    }
}

@Composable
private fun LoadingState() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp)
        ) {
            CircularProgressIndicator()
            Text(
                text = "Loading threads...",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
        }
    }
}

@Composable
private fun EmptyState() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(8.dp),
            modifier = Modifier.padding(32.dp)
        ) {
            Icon(
                imageVector = Icons.Default.Chat,
                contentDescription = null,
                modifier = Modifier.size(64.dp),
                tint = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.5f)
            )
            Text(
                text = "No threads yet",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.SemiBold,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            Text(
                text = "Conversations from visitors will appear here.",
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant.copy(alpha = 0.7f)
            )
        }
    }
}

@Composable
private fun ErrorState(
    message: String,
    onRetry: () -> Unit
) {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(12.dp),
            modifier = Modifier.padding(32.dp)
        ) {
            Text(
                text = "Something went wrong",
                style = MaterialTheme.typography.titleMedium,
                fontWeight = FontWeight.SemiBold,
                color = MaterialTheme.colorScheme.error
            )
            Text(
                text = message,
                style = MaterialTheme.typography.bodyMedium,
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )
            OutlinedButton(onClick = onRetry) {
                Text("Retry")
            }
        }
    }
}
