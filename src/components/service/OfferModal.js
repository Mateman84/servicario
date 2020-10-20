

import React, { useState } from 'react'
import Modal from 'components/Modal'

const OfferModal = ({service}) => {

    const [ offer, setOffer ] = useState({
        fromUser: "", //User making offer
        toUser: "", //User recieving offer
        service: "", //Service ID for the service the offer is being made.
        status: "Pending", //Status will be pending until offer is accepted or declined
        price: 0,
        time: 0,
        note: ""
    })

    const handleChange = ({ target:{value, name}}) => {
        if(name === "time") {
            const price = Math.round(value * service.price * 100) / 100
            return setOffer({...offer, [name]: value, price})
        }
        return setOffer({...offer, [name]: value})
    }

    const handleSubmit = () => {
        //Handle Submit example 
        alert(JSON.stringify(offer))
        
    }

    /* --------------IMPORTANT!!---------------- 
    Make sure the name field in JSX is spelled the same way as your object if you want to reference it.
    My handle change didn't work because I spelled the name="time" in JSX with capital N "Name"
    */

    return (
        <Modal 
        onModalSubmit={handleSubmit}
        openButtonText="Make An Offer">
            <div className="field">
            <input
                name="note"
                onChange={handleChange}
                className="input is-large"
                type="text"
                placeholder="Write some catchy note"
                max="5"
                min="0"
                autoFocus=""/>
            <p className="help">Note can increase chance of getting the service</p>
            </div>
            <div className="field">
            <input
                name="time"
                onChange= {handleChange}
                className="input is-large"
                type="number"
                placeholder="How long you need service for ?"
                max="5"
                min="0"
                autoFocus=""/>
            <p className="help">Enter time in hours</p>
            </div>
            <div className="service-price has-text-centered">
            <div className="service-price-title">
                {service.user && `Upon acceptance ${service.user.fullName} will charge you:`}
            </div>
            <div className="service-price-value">
                <h1 className="title">{offer.price}$</h1>
            </div>
        </div>
    </Modal>
    )
}

export default OfferModal