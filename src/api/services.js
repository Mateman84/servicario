
import 'firebase/auth'

import db from 'db'

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
    return services
    }
)

// In the function below it occurs to me how I basically are writing SQL querys in my code.

export const fetchUserServices = userId => 
    db.collection('services')
    .where("user", "==", "profiles/" + userId)
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