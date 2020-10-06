
import firebase from 'firebase/app'
import 'firebase/auth'

import db from 'db'

// ------------------- SERVICES --------------------

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

// ------------------- AUTH --------------------

const createUserProfile = (userProfile) => 
    db
    .collection('profile')
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



