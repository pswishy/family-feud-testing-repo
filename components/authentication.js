import React from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"; // may have to change to node_modules/firebase

const firebaseConfig = {
    apiKey: "AIzaSyBQuRJ9w1eaRVpeXGGemAxEYavIOf5mziY",
    authDomain: "family-feud-527cd.firebaseapp.com",
    projectId: "family-feud-527cd",
    storageBucket: "family-feud-527cd.appspot.com",
    messagingSenderId: "646847032712",
    appId: "1:646847032712:web:41d52172961ed678549e3d",
    measurementId: "G-ZCRBSPX0PP"
};

if (typeof document !== "undefined"){
    // document exist
    document.getElementById("google").onclick = function(){
        GoogleFireBaseLogin();
    document.getElementById("twitter").onclick = function(){
        TwitterFireBaseLogin();
    document.getElementById("facebook").onclick = function(){
        FacebookFireBaseLogin();
    }
    }
    };
}

function GoogleFireBaseLogin(){

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider(app);
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            alert(user.displayName);
                           
                            // ...
            }).catch((error) => {
                            
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                alert(errorMessage);
            });

            signOut.addEventListener('click',(e) =>{
                signOut(auth).then(()=>{
                    // sign out successful
                    }).catch((error)=>{
                        // error occured
                    });
  
            });
}

function TwitterFireBaseLogin(){
    
}

export default function AuthenticationLogin(props) {
    return (
        <div id="login-box">  
            <button style = {{color: "green"}} id = "google"> 
                Google SignIn
            </button>

            <button style = {{color: "blue"}} id = "twitter">
                Twitter Sign In
            </button>


            <button style = {{color: "purple"}} id = "facebook">
                facebook sign In
            </button>
      </div>
    );
}


