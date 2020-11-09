

import { COLLABORATION_CREATED_FOR_OFFER, FETCH_USER_MESSAGES_SUCCESS } from 'types'
import * as api from 'api'

export const collaborate = ({collaboration, message}) => dispatch =>
    api.createCollaboration(collaboration)
    .then(collabId => {
        message.cta = `/collaborations/${collabId}`
        api.sendMessage(message)
        api.markOfferAsInCollaboration(collaboration.fromOffer)
        dispatch({
            type: COLLABORATION_CREATED_FOR_OFFER,  
            offerId: collaboration.fromOffer,
            offerType: "sent"
        })
        return collabId
    })

// The subscribe to messages function could be shortened into a oneliner but 
// to keep it clearer i will not do that for the time being
export const subscribeToMessages = userId => dispatch =>  
    api.subscribeToMessages(userId, (messages) => {
        dispatch({type: FETCH_USER_MESSAGES_SUCCESS, messages})
        return messages
    })