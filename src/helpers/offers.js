import {Timestamp} from 'db'

export const newCollaboration = ({offer: { service, time, toUser, id}, fromUser}) => ({
    serviceId: service.id, // define Id on offer.service 
    title: service.title, 
    image: service.image,
    time: time * 60 * 60,
    allowedPeople: [fromUser.uid, toUser.uid],
    joined: [],
    toUser: toUser.uid,
    fromUser: fromUser.uid,
    fromOffer: id,
    createdAt: Timestamp.fromDate(new Date())
})

export const newMessage = ({offer: { service, toUser}, fromUser}) => ({
    isRead: false,
    type: "invitation",
    text: `Hello ${toUser.fullName}, please join collaboration as soon as possible`,
    cta: "", // Click To Action
    toUser: toUser.uid,
    fromUser: {
        id: fromUser.uid,
        name: fromUser.fullName,
        avatar: fromUser.avatar
    },
    serviceTitle: service.title,
    serviceLink: `/services/${service.id}`,
    createdAt: Timestamp.fromDate(new Date())
})