import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  const customClaims = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-default-role": "staff",
      "x-hasura-allowed-roles": ["staff"],
      "x-hasura-user-id": user.uid,
    },
  };
  // ログイン時にカスタムクレームを追加する処理
  try {
    await admin.auth().setCustomUserClaims(user.uid, customClaims);
    await admin.firestore().collection("user_meta").doc(user.uid).create({
      refreshTime: admin.firestore.FieldValue.serverTimestamp(),
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    });
  } catch (e) {
    alert(e);
  }
});
