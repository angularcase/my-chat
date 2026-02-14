package com.example.myapplication.android.viewmodel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.model.ChatSpace
import com.example.myapplication.repository.AuthRepository
import com.example.myapplication.repository.SpaceRepository
import kotlinx.coroutines.launch

class SpacesViewModel(
    private val spaceRepository: SpaceRepository,
    private val authRepository: AuthRepository
) : ViewModel() {

    var spaces by mutableStateOf<List<ChatSpace>>(emptyList())
        private set

    var isLoading by mutableStateOf(false)
        private set

    var isRefreshing by mutableStateOf(false)
        private set

    var error by mutableStateOf<String?>(null)
        private set

    var loggedOut by mutableStateOf(false)
        private set

    init {
        loadSpaces()
    }

    fun loadSpaces() {
        viewModelScope.launch {
            isLoading = spaces.isEmpty()
            error = null
            try {
                spaces = spaceRepository.getChatSpaces()
            } catch (e: Exception) {
                error = when {
                    e.message?.contains("401") == true -> "Session expired. Please login again."
                    else -> e.message ?: "Failed to load spaces"
                }
            } finally {
                isLoading = false
            }
        }
    }

    fun refresh() {
        viewModelScope.launch {
            isRefreshing = true
            error = null
            try {
                spaces = spaceRepository.getChatSpaces()
            } catch (e: Exception) {
                error = e.message ?: "Failed to refresh spaces"
            } finally {
                isRefreshing = false
            }
        }
    }

    fun logout() {
        authRepository.logout()
        loggedOut = true
    }
}
