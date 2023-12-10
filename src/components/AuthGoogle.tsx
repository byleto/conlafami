import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import { useEffect } from "react";
import "firebaseui/dist/firebaseui.css";
import { Container } from "@mui/material";

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function () {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      //   document.getElementById("loader").style.display = "none";
    },
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: "popup",
  signInSuccessUrl: "redirectUrl",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      requireDisplayName: false,
    },
  ],
  // Terms of service url.
  tosUrl: "<your-tos-url>",
  // Privacy policy url.
  privacyPolicyUrl: "<your-privacy-policy-url>",
};

export const AuthGoogle = ({ auth }: { auth: any }) => {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    ui.start(".firebase-auth-container", uiConfig);
  }, [auth]);

  return (
    <Container sx={{ width: "1000px", height: "1000px" }}>
      <div>AuthGoogle</div>
      <div className={"firebase-auth-container"}></div>
    </Container>
  );
};
