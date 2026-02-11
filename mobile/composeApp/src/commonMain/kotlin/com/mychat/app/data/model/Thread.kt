package com.mychat.app.data.model

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
data class Thread(
    val id: String,
    val chatSpaceId: String,
    val visitorId: String,
    val assignedAgentId: String? = null,
    val status: String,
    val lastActivityAt: String,
    val createdAt: String,
    val updatedAt: String,
    val visitor: ThreadVisitor? = null,
    val agent: ThreadAgent? = null,
    val _count: ThreadMessageCount? = null
)

@Serializable
data class ThreadMessageCount(
    val messages: Int = 0
)
