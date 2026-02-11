package com.mychat.app.ui.spaces

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.mychat.app.data.model.ChatSpace
import com.mychat.app.data.network.ApiClient
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.update
import kotlinx.coroutines.launch

data class SpaceListUiState(
    val spaces: List<ChatSpace> = emptyList(),
    val isLoading: Boolean = false,
    val error: String? = null
)

class SpaceListViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(SpaceListUiState())
    val uiState = _uiState.asStateFlow()

    init {
        loadSpaces()
    }

    fun loadSpaces() {
        viewModelScope.launch {
            _uiState.update { it.copy(isLoading = true, error = null) }
            try {
                val list = ApiClient.getChatSpaces()
                _uiState.update {
                    it.copy(spaces = list, isLoading = false, error = null)
                }
            } catch (e: Exception) {
                _uiState.update {
                    it.copy(
                        isLoading = false,
                        error = e.message ?: "Failed to load spaces"
                    )
                }
            }
        }
    }
}
