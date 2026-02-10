# Budowanie APK na Android

## Wymagania
- Node 22 (`nvm use 22`)
- Java 21 (Capacitor/Android Gradle)
- Android SDK (np. przez Android Studio)
- Zainstalowane zależności: `npm install`

## Instalacja Java 21 (jeśli brak)
```bash
brew install openjdk@21
```
W projekcie ustawiona jest ścieżka w `android/gradle.properties` (`org.gradle.java.home=/opt/homebrew/opt/openjdk@21`).

## Budowanie APK z linii poleceń
```bash
nvm use 22
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug
```

APK (debug): `android/app/build/outputs/apk/debug/app-debug.apk`

## Łączenie z backendem z telefonu (Wi‑Fi)

Telefon **nie** ma dostępu do `localhost` komputera. Aplikacja musi łączyć się z **IP komputera** w tej samej sieci Wi‑Fi.

1. **Sprawdź IP komputera** (w terminalu):
   ```bash
   # macOS/Linux
   ipconfig getifaddr en0
   # lub: ifconfig | grep "inet " | grep -v 127.0.0.1
   ```
   Np. `192.168.1.5`.

2. **Ustaw to IP w aplikacji** przed buildem APK:
   - Edytuj `src/environments/environment.prod.ts`
   - Ustaw `apiUrl: 'http://TWOJE_IP:3300'` (obecnie w projekcie: `http://192.168.1.70:3300`)

3. **Backend** musi nasłuchiwać na wszystkich interfejsach (domyślnie NestJS tak robi). Uruchom backend na komputerze:
   ```bash
   cd backend && npm run start:dev
   ```

4. **Redis** – działa tylko na komputerze; telefon łączy się wyłącznie z backendem (REST + WebSocket). Nie trzeba nic zmieniać przy Redisie.

Po zmianie `apiUrl` zrób ponownie: `npm run build` → `npx cap sync android` → build APK.

## Alternatywa: Android Studio
```bash
npx cap open android
```
W Android Studio: **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
