package com.example.myapplication.android

import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.example.myapplication.android.ui.LoginScreen
import com.example.myapplication.android.ui.SpacesListScreen
import com.example.myapplication.android.ui.ThreadsListScreen
import com.example.myapplication.android.viewmodel.LoginViewModel
import com.example.myapplication.android.viewmodel.SpacesViewModel
import com.example.myapplication.android.viewmodel.ThreadsViewModel
import com.example.myapplication.network.ApiClient
import com.example.myapplication.repository.AuthRepository
import com.example.myapplication.repository.SpaceRepository
import com.example.myapplication.repository.ThreadRepository
import com.example.myapplication.storage.TokenStorage

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val tokenStorage = TokenStorage(applicationContext)
        val apiClient = ApiClient(tokenStorage)
        val authRepository = AuthRepository(apiClient, tokenStorage)
        val spaceRepository = SpaceRepository(apiClient)
        val threadRepository = ThreadRepository(apiClient)

        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    AppNavigation(
                        authRepository = authRepository,
                        spaceRepository = spaceRepository,
                        threadRepository = threadRepository
                    )
                }
            }
        }
    }
}

@Composable
fun AppNavigation(
    authRepository: AuthRepository,
    spaceRepository: SpaceRepository,
    threadRepository: ThreadRepository
) {
    val navController = rememberNavController()
    val startDestination = if (authRepository.isLoggedIn) "spaces" else "login"

    NavHost(
        navController = navController,
        startDestination = startDestination
    ) {
        composable("login") {
            val viewModel = remember { LoginViewModel(authRepository) }
            LoginScreen(
                viewModel = viewModel,
                onLoginSuccess = {
                    navController.navigate("spaces") {
                        popUpTo("login") { inclusive = true }
                    }
                }
            )
        }

        composable("spaces") {
            val viewModel = remember { SpacesViewModel(spaceRepository, authRepository) }
            SpacesListScreen(
                viewModel = viewModel,
                onLoggedOut = {
                    navController.navigate("login") {
                        popUpTo("spaces") { inclusive = true }
                    }
                },
                onSpaceClick = { space ->
                    val encodedName = Uri.encode(space.name)
                    navController.navigate("threads/${space.id}/$encodedName")
                }
            )
        }

        composable("threads/{spaceId}/{spaceName}") { backStackEntry ->
            val spaceId = backStackEntry.arguments?.getString("spaceId") ?: return@composable
            val spaceName = Uri.decode(backStackEntry.arguments?.getString("spaceName") ?: "Space")
            val viewModel = remember(spaceId, spaceName) {
                ThreadsViewModel(spaceId, spaceName, threadRepository)
            }
            ThreadsListScreen(
                viewModel = viewModel,
                onBack = { navController.popBackStack() }
            )
        }
    }
}
