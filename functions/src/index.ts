import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const setCustomClaims = functions.auth.user().onCreate(async (user) => {
  try {
    const customClaims = {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "staff",
        "x-hasura-allowed-roles": ["staff"],
        "x-hasura-user-id": user.uid,
      },
    };
    await admin.auth().setCustomUserClaims(user.uid, customClaims);
    await admin
        .firestore()
        .collection("user_meta")
        .doc(user.uid)
        .create({
          refreshTime: admin.firestore.FieldValue.serverTimestamp(),
          name: (await admin.auth().getUser(user.uid)).displayName,
          email: user.email,
          photo: (await admin.auth().getUser(user.uid)).photoURL,
        });
  } catch (e) {
    alert(e);
  }
});
