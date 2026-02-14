package com.example.myapplication.android.viewmodel

import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.myapplication.repository.AuthRepository
import kotlinx.coroutines.launch

class LoginViewModel(
    private val authRepository: AuthRepository
) : ViewModel() {

    var email by mutableStateOf("")
        private set

    var password by mutableStateOf("")
        private set

    var isLoading by mutableStateOf(false)
        private set

    var error by mutableStateOf<String?>(null)
        private set

    var loginSuccess by mutableStateOf(false)
        private set

    fun onEmailChange(value: String) {
        email = value
        error = null
    }

    fun onPasswordChange(value: String) {
        password = value
        error = null
    }

    fun login() {
        if (email.isBlank() || password.isBlank()) {
            error = "Please fill in all fields"
            return
        }

        viewModelScope.launch {
            isLoading = true
            error = null
            try {
                authRepository.login(email, password)
                loginSuccess = true
            } catch (e: Exception) {
                error = when {
                    e.message?.contains("401") == true -> "Invalid email or password"
                    e.message?.contains("Unauthorized") == true -> "Invalid email or password"
                    else -> e.message ?: "Login failed. Please try again."
                }
            } finally {
                isLoading = false
            }
        }
    }
}
