package com.example.myapplication.model

import kotlinx.serialization.Serializable

@Serializable
data class ChatSpace(
    val id: String,
    val name: String,
    val widgetKey: String,
    val allowedDomains: List<String> = emptyList(),
    val createdAt: String
)
