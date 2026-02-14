package com.example.myapplication.network

import com.example.myapplication.model.AuthTokens
import com.example.myapplication.model.ChatSpace
import com.example.myapplication.model.LoginRequest
import com.example.myapplication.model.ThreadResponse
import com.example.myapplication.storage.TokenStorage
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.logging.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.json.Json

class ApiClient(
    private val tokenStorage: TokenStorage,
    baseUrl: String = DEFAULT_BASE_URL
) {
    private val apiBaseUrl = baseUrl

    private val httpClient = HttpClient {
        install(ContentNegotiation) {
            json(Json {
                ignoreUnknownKeys = true
                isLenient = true
                prettyPrint = false
            })
        }
        install(Logging) {
            level = LogLevel.BODY
        }
        defaultRequest {
            contentType(ContentType.Application.Json)
            tokenStorage.getAccessToken()?.let { token ->
                header(HttpHeaders.Authorization, "Bearer $token")
            }
        }
    }

    suspend fun login(email: String, password: String): AuthTokens {
        val response = httpClient.post("$apiBaseUrl/auth/login") {
            setBody(LoginRequest(email = email, password = password))
        }
        return response.body<AuthTokens>()
    }

    suspend fun getChatSpaces(): List<ChatSpace> {
        val response = httpClient.get("$apiBaseUrl/chat-spaces")
        return response.body<List<ChatSpace>>()
    }

    suspend fun getThreads(chatSpaceId: String, status: String? = null): List<ThreadResponse> {
        val response = httpClient.get("$apiBaseUrl/chat-spaces/$chatSpaceId/threads") {
            status?.let { parameter("status", it) }
        }
        return response.body<List<ThreadResponse>>()
    }

    companion object {
        const val DEFAULT_BASE_URL = "http://192.168.1.72:3300/api"
    }
}
