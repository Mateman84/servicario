
import firebase from 'firebase/app'
import 'firebase/auth'

import db from 'db'

// ------------------- SERVICES START --------------------

export const fetchServiceById = serviceId => 
    db.collection('services')
    .doc(serviceId)
    .get()
    .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))

export const fetchServices = () => 
    db.collection('services')
    .get()
    .then(snapshot => {
    const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    //debugger
    return services
    }
)

// In the function below it occurs to me how I basically are writing SQL querys in my code.

export const fetchUserServices = userId => 
    db.collection('services')
    .where("user", "==", userId)
    .get()
    .then(snapshot => {
    const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    return services
    }
)

export const createService = newService => {
    return db
    .collection('services')
    .add(newService)
    .then(docRef => docRef.id)
}

// ------------------- SERVICES END --------------------

// ------------------- AUTH START --------------------

const createUserProfile = (userProfile) => 
    db
    .collection('profiles')
    .doc(userProfile.uid)
    .set(userProfile)



export const registerUser = async ({ email, password, fullName, avatar }) => {
    try {
        const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const { user } = response
        const userProfile = { uid: user.uid, fullName, email, avatar, services: [], description: "" }
        await createUserProfile(userProfile)
        return userProfile  
    } catch (error) {
        return Promise.reject(error.message)
    }
}

export const onAuthStateChanged = onAuthCallback => 
firebase.auth().onAuthStateChanged(onAuthCallback)

export const getUserProfile = uid => 
    db.collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => ({uid, ...snapshot.data()}))


export const login = ({email, password}) =>
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => Promise.reject(error.message))

export const logout = () => firebase.auth().signOut()



