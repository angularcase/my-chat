cd ionic
nvm use 22
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug

apka jest w:
android/app/build/outputs/apk/debug/app-debug.apk1