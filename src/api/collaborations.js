import db from 'db'

export const createCollaboration = collab => 
    db
    .collection("collaborations")
    .add(collab)
    .then(docRef => docRef.id)

export const sendMessage = message => 
    db
    .collection("profiles")
    .doc(message.toUser)
    .collection("messages")
    .add(message)

//Function will be reactive, so whenever someone sends a user a message this function will be fired
// so we can display them in realtime.

export const subscribeToMessages = (userId, callback) => 
    db
    .collection("profiles")
    .doc(userId)
    .collection("messages")
    .onSnapshot(snapshot => {
        const messages = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
        callback(messages)
    })

