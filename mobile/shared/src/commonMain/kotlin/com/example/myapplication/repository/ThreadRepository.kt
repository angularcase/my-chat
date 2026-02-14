package com.example.myapplication.repository

import com.example.myapplication.model.ThreadResponse
import com.example.myapplication.network.ApiClient

class ThreadRepository(
    private val apiClient: ApiClient
) {
    suspend fun getThreads(chatSpaceId: String, status: String? = null): List<ThreadResponse> {
        return apiClient.getThreads(chatSpaceId, status)
    }
}
