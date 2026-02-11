package com.mychat.app.data.storage

import com.mychat.app.data.model.AuthTokens

actual class TokenStorage {
    private var tokens: AuthTokens? = null

    actual suspend fun saveTokens(tokens: AuthTokens) {
        this.tokens = tokens
    }

    actual suspend fun loadTokens(): AuthTokens? = tokens

    actual suspend fun clearTokens() {
        tokens = null
    }
}
