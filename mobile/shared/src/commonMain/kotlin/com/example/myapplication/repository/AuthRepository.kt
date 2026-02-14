package com.example.myapplication.repository

import com.example.myapplication.model.AuthTokens
import com.example.myapplication.network.ApiClient
import com.example.myapplication.storage.TokenStorage

class AuthRepository(
    private val apiClient: ApiClient,
    private val tokenStorage: TokenStorage
) {
    val isLoggedIn: Boolean
        get() = tokenStorage.getAccessToken() != null

    suspend fun login(email: String, password: String): AuthTokens {
        val tokens = apiClient.login(email, password)
        tokenStorage.saveTokens(tokens)
        return tokens
    }

    fun logout() {
        tokenStorage.clear()
    }
}
