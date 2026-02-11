package com.mychat.app.ui.threads

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.mychat.app.data.model.Thread
import com.mychat.app.data.network.ApiClient
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class ThreadListUiState(
    val unassigned: List<Thread> = emptyList(),
    val active: List<Thread> = emptyList(),
    val isLoading: Boolean = false,
    val error: String? = null
)

class ThreadListViewModel(
    private val chatSpaceId: String
) : ViewModel() {
    private val _uiState = MutableStateFlow(ThreadListUiState())
    val uiState = _uiState.asStateFlow()

    private var pollingJob: Job? = null

    init {
        loadThreads()
        startPolling()
    }

    private fun startPolling() {
        pollingJob?.cancel()
        pollingJob = viewModelScope.launch {
            while (true) {
                delay(5000L)
                loadThreads(silent = true)
            }
        }
    }

    override fun onCleared() {
        super.onCleared()
        pollingJob?.cancel()
    }

    fun loadThreads(silent: Boolean = false) {
        viewModelScope.launch {
            if (!silent) _uiState.update { it.copy(isLoading = true, error = null) }
            try {
                val all = ApiClient.getThreads(chatSpaceId)
                val unassigned = all.filter { it.assignedAgentId == null }
                val active = all.filter { it.assignedAgentId != null }
                _uiState.update {
                    it.copy(
                        unassigned = unassigned,
                        active = active,
                        isLoading = false,
                        error = null
                    )
                }
            } catch (e: Exception) {
                if (!silent) {
                    _uiState.update {
                        it.copy(
                            isLoading = false,
                            error = e.message ?: "Failed to load threads"
                        )
                    }
                }
            }
        }
    }
}
