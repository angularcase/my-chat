package com.example.myapplication.repository

import com.example.myapplication.model.ChatSpace
import com.example.myapplication.network.ApiClient

class SpaceRepository(
    private val apiClient: ApiClient
) {
    suspend fun getChatSpaces(): List<ChatSpace> {
        return apiClient.getChatSpaces()
    }
}
