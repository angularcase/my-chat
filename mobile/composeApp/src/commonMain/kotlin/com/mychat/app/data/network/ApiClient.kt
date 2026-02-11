package com.mychat.app.data.network

import com.mychat.app.data.Session
import com.mychat.app.data.model.AuthTokens
import com.mychat.app.data.model.ChatSpace
import com.mychat.app.data.model.LoginRequest
import com.mychat.app.data.model.MessagesResponse
import com.mychat.app.data.model.Thread
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logging
import io.ktor.client.request.HttpRequestBuilder
import io.ktor.client.request.get
import io.ktor.client.request.header
import io.ktor.client.request.patch
import io.ktor.client.request.post
import io.ktor.client.request.setBody
import io.ktor.http.ContentType
import io.ktor.http.contentType
import io.ktor.serialization.kotlinx.json.json
import kotlinx.serialization.json.Json

object ApiClient {
    val httpClient: HttpClient by lazy {
        createPlatformHttpClient().config {
            install(ContentNegotiation) {
                json(Json {
                    ignoreUnknownKeys = true
                    isLenient = true
                })
            }
            install(Logging) {
                level = LogLevel.INFO
            }
            defaultRequest {
                url(getBaseUrl())
                contentType(ContentType.Application.Json)
            }
        }
    }

    private fun HttpRequestBuilder.authHeader() {
        Session.accessToken?.let { token ->
            header("Authorization", "Bearer $token")
        }
    }

    suspend fun login(email: String, password: String): AuthTokens {
        return httpClient.post("auth/login") {
            setBody(LoginRequest(email = email, password = password))
        }.body()
    }

    suspend fun getChatSpaces(): List<ChatSpace> {
        return httpClient.get("chat-spaces") {
            authHeader()
        }.body()
    }

    suspend fun getThread(threadId: String): Thread {
        return httpClient.get("threads/$threadId") {
            authHeader()
        }.body()
    }

    suspend fun getThreads(chatSpaceId: String, status: String? = null): List<Thread> {
        val path = if (status != null) {
            "chat-spaces/$chatSpaceId/threads?status=$status"
        } else {
            "chat-spaces/$chatSpaceId/threads"
        }
        return httpClient.get(path) {
            authHeader()
        }.body()
    }

    suspend fun getMessages(threadId: String, cursor: String? = null, take: Int = 50): MessagesResponse {
        val path = buildString {
            append("threads/$threadId/messages?take=$take")
            if (cursor != null) append("&cursor=$cursor")
        }
        return httpClient.get(path) {
            authHeader()
        }.body()
    }

    suspend fun claimThread(threadId: String): Thread {
        return httpClient.patch("threads/$threadId/claim") {
            authHeader()
        }.body()
    }
}
