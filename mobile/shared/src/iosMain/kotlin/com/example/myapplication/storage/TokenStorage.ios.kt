package com.example.myapplication.storage

import com.example.myapplication.model.AuthTokens
import platform.Foundation.NSUserDefaults

actual class TokenStorage {

    private val defaults = NSUserDefaults.standardUserDefaults

    actual fun saveTokens(tokens: AuthTokens) {
        defaults.setObject(tokens.accessToken, forKey = KEY_ACCESS_TOKEN)
        defaults.setObject(tokens.refreshToken, forKey = KEY_REFRESH_TOKEN)
        defaults.setInteger(tokens.expiresIn.toLong(), forKey = KEY_EXPIRES_IN)
        defaults.synchronize()
    }

    actual fun getAccessToken(): String? {
        return defaults.stringForKey(KEY_ACCESS_TOKEN)
    }

    actual fun getRefreshToken(): String? {
        return defaults.stringForKey(KEY_REFRESH_TOKEN)
    }

    actual fun clear() {
        defaults.removeObjectForKey(KEY_ACCESS_TOKEN)
        defaults.removeObjectForKey(KEY_REFRESH_TOKEN)
        defaults.removeObjectForKey(KEY_EXPIRES_IN)
        defaults.synchronize()
    }

    companion object {
        private const val KEY_ACCESS_TOKEN = "access_token"
        private const val KEY_REFRESH_TOKEN = "refresh_token"
        private const val KEY_EXPIRES_IN = "expires_in"
    }
}
