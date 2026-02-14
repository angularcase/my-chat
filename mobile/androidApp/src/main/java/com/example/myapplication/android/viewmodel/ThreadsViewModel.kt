package com.example.myapplication.android.viewmodel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.model.ThreadResponse
import com.example.myapplication.repository.ThreadRepository
import kotlinx.coroutines.launch

data class ThreadFilter(
    val label: String,
    val status: String?
)

class ThreadsViewModel(
    val chatSpaceId: String,
    val spaceName: String,
    private val threadRepository: ThreadRepository
) : ViewModel() {

    var threads by mutableStateOf<List<ThreadResponse>>(emptyList())
        private set

    var isLoading by mutableStateOf(false)
        private set

    var error by mutableStateOf<String?>(null)
        private set

    var selectedFilter by mutableStateOf<String?>(null)
        private set

    val filters = listOf(
        ThreadFilter("All", null),
        ThreadFilter("Unassigned", "unassigned"),
        ThreadFilter("Active", "active"),
        ThreadFilter("Closed", "closed")
    )

    init {
        loadThreads()
    }

    fun selectFilter(status: String?) {
        selectedFilter = status
        loadThreads()
    }

    fun loadThreads() {
        viewModelScope.launch {
            isLoading = true
            error = null
            try {
                threads = threadRepository.getThreads(chatSpaceId, selectedFilter)
            } catch (e: Exception) {
                error = when {
                    e.message?.contains("401") == true -> "Session expired. Please login again."
                    e.message?.contains("403") == true -> "You don't have access to this space."
                    else -> e.message ?: "Failed to load threads"
                }
            } finally {
                isLoading = false
            }
        }
    }
}
