/**
 * RMIT Instagram Challenge — Firebase Config
 * ─────────────────────────────────────────────────────────────
 * Fill in your project values below, then commit & push to GitHub.
 * Every device (index.html + admin.html) will automatically pick
 * up the same config and sync in real time.
 *
 * ONE-TIME SETUP (takes ~5 minutes):
 *
 *  1. Go to https://console.firebase.google.com
 *     Create a project (or open an existing one).
 *
 *  2. Click "Add app" → Web (</> icon).
 *     Register the app, then COPY the firebaseConfig object here.
 *
 *  3. In the left sidebar: Build → Realtime Database → Create database.
 *     Pick any region, start in "test mode", then switch to these rules:
 *
 *       {
 *         "rules": {
 *           "campaignTags": {
 *             ".read": true,
 *             ".write": "auth != null"
 *           }
 *         }
 *       }
 *
 *  4. Build → Authentication → Sign-in method → Email/Password → Enable.
 *
 *  5. Build → Authentication → Users → Add user.
 *     This is your admin login (email + password of your choice).
 *
 *  6. Paste your config values into the object below.
 *     Commit this file and push to GitHub — done!
 *
 * NOTE: It is safe to keep this file in a public GitHub repo.
 * Firebase API keys are designed to be public; security is enforced
 * by the database rules above, not by keeping the key secret.
 */

const FIREBASE_CONFIG = {
  apiKey:            "PASTE_YOUR_API_KEY_HERE",
  authDomain:        "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "PASTE_YOUR_DATABASE_URL_HERE",
  projectId:         "PASTE_YOUR_PROJECT_ID_HERE",
  storageBucket:     "PASTE_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_YOUR_SENDER_ID_HERE",
  appId:             "PASTE_YOUR_APP_ID_HERE"
};
