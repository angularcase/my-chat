package com.mychat.app

import androidx.compose.material3.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.navigation.NavType
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import androidx.navigation.navArgument
import com.mychat.app.ui.chat.ChatScreen
import com.mychat.app.ui.login.LoginScreen
import com.mychat.app.ui.spaces.SpaceListScreen
import com.mychat.app.ui.threads.ThreadListScreen

@Composable
fun App() {
    MaterialTheme {
        val navController = rememberNavController()

        NavHost(
            navController = navController,
            startDestination = "login"
        ) {
            composable("login") {
                LoginScreen(
                    onLoginSuccess = {
                        navController.navigate("spaces") {
                            popUpTo("login") { inclusive = true }
                        }
                    }
                )
            }
            composable("spaces") {
                SpaceListScreen(
                    onSpaceSelected = { chatSpaceId ->
                        navController.navigate("threads/$chatSpaceId")
                    }
                )
            }
            composable(
                route = "threads/{chatSpaceId}",
                arguments = listOf(navArgument("chatSpaceId") { type = NavType.StringType })
            ) { backStackEntry ->
                val chatSpaceId = backStackEntry.arguments?.getString("chatSpaceId") ?: return@composable
                ThreadListScreen(
                    chatSpaceId = chatSpaceId,
                    onThreadSelected = { threadId ->
                        navController.navigate("chat/$threadId")
                    },
                    onBack = { navController.popBackStack() }
                )
            }
            composable(
                route = "chat/{threadId}",
                arguments = listOf(navArgument("threadId") { type = NavType.StringType })
            ) { backStackEntry ->
                val threadId = backStackEntry.arguments?.getString("threadId") ?: return@composable
                ChatScreen(
                    threadId = threadId,
                    onBack = { navController.popBackStack() }
                )
            }
        }
    }
}
