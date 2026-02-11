package com.mychat.app.ui.chat

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.mychat.app.data.model.Message
import com.mychat.app.data.network.ApiClient
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class ChatUiState(
    val messages: List<Message> = emptyList(),
    val isUnassigned: Boolean = true,
    val isLoading: Boolean = false,
    val claimInProgress: Boolean = false,
    val error: String? = null
)

class ChatViewModel(
    private val threadId: String
) : ViewModel() {
    private val _uiState = MutableStateFlow(ChatUiState())
    val uiState = _uiState.asStateFlow()

    private var pollingJob: Job? = null

    init {
        loadThreadAndMessages()
        startPolling()
    }

    private fun startPolling() {
        pollingJob?.cancel()
        pollingJob = viewModelScope.launch {
            while (true) {
                delay(5000L)
                loadMessages(silent = true)
            }
        }
    }

    override fun onCleared() {
        super.onCleared()
        pollingJob?.cancel()
    }

    private fun loadThreadAndMessages() {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true, error = null) }
            try {
                val thread = ApiClient.getThread(threadId)
                val response = ApiClient.getMessages(threadId)
                _uiState.update {
                    it.copy(
                        isUnassigned = thread.assignedAgentId == null,
                        messages = response.messages,
                        isLoading = false,
                        error = null
                    )
                }
            } catch (e: Exception) {
                _uiState.update {
                    it.copy(
                        isLoading = false,
                        error = e.message ?: "Failed to load"
                    )
                }
            }
        }
    }

    private fun loadMessages(silent: Boolean) {
        viewModelScope.launch {
            if (!silent) _uiState.update { it.copy(isLoading = true, error = null) }
            try {
                val response = ApiClient.getMessages(threadId)
                _uiState.update {
                    it.copy(messages = response.messages, isLoading = false, error = null)
                }
            } catch (e: Exception) {
                if (!silent) {
                    _uiState.update {
                        it.copy(
                            isLoading = false,
                            error = e.message ?: "Failed to load messages"
                        )
                    }
                }
            }
        }
    }

    fun claimThread() {
        viewModelScope.launch {
            _uiState.update { it.copy(claimInProgress = true, error = null) }
            try {
                ApiClient.claimThread(threadId)
                _uiState.update {
                    it.copy(isUnassigned = false, claimInProgress = false)
                }
            } catch (e: Exception) {
                _uiState.update {
                    it.copy(
                        claimInProgress = false,
                        error = e.message ?: "Failed to claim thread"
                    )
                }
            }
        }
    }
}
