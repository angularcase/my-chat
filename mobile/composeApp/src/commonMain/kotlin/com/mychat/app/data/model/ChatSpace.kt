package com.mychat.app.data.model

import kotlinx.serialization.Serializable

@Serializable
data class ChatSpace(
    val id: String,
    val name: String,
    val widgetKey: String,
    val organizationId: String,
    val createdAt: String? = null
)
