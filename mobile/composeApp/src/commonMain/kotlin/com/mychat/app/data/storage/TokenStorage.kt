package com.mychat.app.data.storage

import com.mychat.app.data.model.AuthTokens

expect class TokenStorage() {
    suspend fun saveTokens(tokens: AuthTokens)
    suspend fun loadTokens(): AuthTokens?
    suspend fun clearTokens()
}
