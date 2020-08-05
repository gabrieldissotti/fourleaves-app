
> problema com  "Keystore file '/projects/fourleaves-app/android/app/debug.keystore' not found for signing config 'debug'."
cd ./android/app && keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000