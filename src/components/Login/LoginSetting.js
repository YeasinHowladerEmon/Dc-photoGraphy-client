import firebase from 'firebase/app';
import "firebase/auth";
import jwtDecode from 'jwt-decode';
import firebaseConfig from "./firebaseConfig";
export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => handleResponse(res))

}
export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
            updateUsername(name);
            return handleResponse(res);
        })

}

const updateUsername = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
    }).then(() => {
        console.log("update successfully");
      }).catch((error) => {
        console.log(error.message);
      });  
      
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(res => handleResponse(res))
    
}
export const handleResponse = (res) => {
    const { displayName, photoURL, email } = res.user;
    const signInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL || "https://i.ibb.co/5GzXkwq/user.png"
    }
    return signInUser
    
}
export const setUserToken = () => {
    return firebase
        .auth().currentUser
        .getIdToken(true)
        .then(idToken => {
            localStorage.setItem('token', idToken)
            console.log('token', idToken);
        })
}
export const getDecodedUser = () => {
    const token = localStorage.getItem('token');
    if (!token) {
        return {};
    }
    const { name, picture, email } = jwtDecode(token)
    const decodedUser = {
        isSignedIn: true,
        name: name,
        email: email,
        photo: picture || "https://i.ibb.co/5GzXkwq/user.png"
    }
    return decodedUser;
}
export const handleSignOut = () => {
    return firebase.auth()
    .signOut()
    .then(() => {
        localStorage.removeItem('token')
        const signOutUser = {
            isSignedIn: false,
            name: '',
            photo: '',
            email: '',
            error: '',
        }
        return signOutUser;
    })
    .catch(err => console.log(err.message))
}