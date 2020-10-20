

import db from 'db'




//export const createUserRef = (uid) => db.doc("profiles/" + uid )

//Nedan är en mer generisk variant av functionen ovan.

export const createRef = (collection, docId) => db.doc(`${collection}/` + docId)

export * from './services'
export * from './auth'