const signInCard = document.querySelector(".sign-in-card");
const signUpCard = document.querySelector(".sign-up-card");
const notHomieYet = document.querySelector("#not-homie-yet");
const alreadyHomie = document.querySelector("#already-homie");

const toggleSignInUpCards = () => {
    signUpCard.classList.toggle("invisible-card");
    signInCard.classList.toggle("invisible-card");
}

notHomieYet.addEventListener("click", toggleSignInUpCards);
alreadyHomie.addEventListener("click", toggleSignInUpCards);

auth.onAuthStateChanged((user)=>{
    console.log("onAuthStateChanged");
    if (user) {
        console.log(user);
    } else {
        console.log("Signed out");
    }
});

const signIn = () => {
    const email = document.getElementById("email-field").value;
    const password = document.getElementById("password-field").value;
    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        console.log(userCredential.user);
    }).catch((err) => {
        console.log(err.code, err.message);
    });
};

