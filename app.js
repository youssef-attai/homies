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
