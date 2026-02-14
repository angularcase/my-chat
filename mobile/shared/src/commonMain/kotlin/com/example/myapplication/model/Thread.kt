package com.example.myapplication.model

import kotlinx.serialization.Serializable

@Serializable
data class ThreadVisitor(
    val id: String,
    val displayName: String? = null,
    val email: String? = null
)

@Serializable
data class ThreadAgent(
    val id: String,
    val displayName: String? = null,
    val email: String? = null
)

@Serializable
data class ThreadMessageCount(
    val messages: Int
)

@Serializable
data class ThreadResponse(
    val id: String,
    val chatSpaceId: String,
    val visitorId: String,
    val assignedAgentId: String? = null,
    val status: String,
    val lastActivityAt: String,
    val createdAt: String,
    val updatedAt: String,
    val visitor: ThreadVisitor,
    val agent: ThreadAgent? = null,
    @kotlinx.serialization.SerialName("_count") val count: ThreadMessageCount
)
