package com.mychat.app.data.network

import com.mychat.app.data.model.AuthTokens
import com.mychat.app.data.model.LoginRequest
import io.ktor.client.HttpClient
import io.ktor.client.call.body
import io.ktor.client.plugins.contentnegotiation.ContentNegotiation
import io.ktor.client.plugins.defaultRequest
import io.ktor.client.plugins.logging.LogLevel
import io.ktor.client.plugins.logging.Logging
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

    suspend fun login(email: String, password: String): AuthTokens {
        return httpClient.post("auth/login") {
            setBody(LoginRequest(email = email, password = password))
        }.body()
    }
}
