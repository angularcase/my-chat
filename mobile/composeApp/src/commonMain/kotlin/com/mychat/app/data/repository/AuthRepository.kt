package com.mychat.app.data.repository

import com.mychat.app.data.Session
import com.mychat.app.data.model.AuthTokens
import com.mychat.app.data.network.ApiClient
import com.mychat.app.data.storage.TokenStorage

class AuthRepository {
    private val tokenStorage = TokenStorage()

    suspend fun login(email: String, password: String): Result<AuthTokens> {
        return try {
            val tokens = ApiClient.login(email, password)
            tokenStorage.saveTokens(tokens)
            Session.accessToken = tokens.accessToken
            Result.success(tokens)
        } catch (e: Exception) {
            Result.failure(e)
        }
    }
}
