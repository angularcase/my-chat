package com.mychat.app.data.model

import kotlinx.serialization.Serializable

@Serializable
data class Message(
    val id: String,
    val threadId: String,
    val senderType: String,
    val senderId: String? = null,
    val content: String,
    val createdAt: String
)

@Serializable
data class MessagesResponse(
    val messages: List<Message>,
    val nextCursor: String? = null
)
