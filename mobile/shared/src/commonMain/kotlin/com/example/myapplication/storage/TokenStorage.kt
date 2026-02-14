package com.example.myapplication.storage

import com.example.myapplication.model.AuthTokens

expect class TokenStorage {
    fun saveTokens(tokens: AuthTokens)
    fun getAccessToken(): String?
    fun getRefreshToken(): String?
    fun clear()
}
