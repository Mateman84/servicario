
import db from 'db'
import {createRef} from './index'

export const createOffer = offer => db.collection("offers").add(offer)

export const fetchSentOffers = (userId) => {
    const userRef = createRef("profiles", userId)
    return db
    .collection("offers")
    .where("fromUser", "==", userRef)
    .get()
    .then(snapshot => snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
}

export const fetchReceivedOffers = (userId) => {
    const userReference = createRef("profiles", userId)
    return db
    .collection("offers")
    .where("toUser", "==", userReference)
    .get()
    .then(snapshot => snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
}

/* The function fetchMadeOffers: Takes userId as a variable that goes in. We create a reference
to the specific user by importing and then calling the function createRef. In creating the reference we 
tell it which collection and which key. We then check our database collection "offers"
where field fromUser is equal to our userReference. We then use .get() to get our data.
We then map the extracted data and deconstruct it. 
*/

/*Note: By default, get() attempts to provide up-to-date data when possible by 
waiting for data from the server, but it may return cached data or fail if you 
are offline and the server cannot be reached.
*/ 

/*
A DocumentSnapshot contains data read from a document in your Firestore database. 
The data can be extracted with .data() or .get(<field>) to get a specific field.
For a DocumentSnapshot that points to a non-existing document, any data access will return 'undefined'. 
You can use the exists property to explicitly verify a document's existence.
*/

export const changeOfferStatus = (offerId, status) => {
    return db
    .collection("offers")
    .doc(offerId)
    .update({status})
}

export const markOfferAsInCollaboration = offerId => 
    db
    .collection("offers")
    .doc(offerId)
    .update({collaborationCreated: true})


