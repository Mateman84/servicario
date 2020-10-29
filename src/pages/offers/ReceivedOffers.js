import React from 'react'
import withAuth from 'components/hoc/withAuth'
import ServiceItem from 'components/service/ServiceItem'
import { fetchReceivedOffers, changeOfferStatus } from 'actions'
import { connect } from 'react-redux'

class ReceivedOffers extends React.Component {

  componentDidMount(){
    const { auth } = this.props
    this.props.fetchReceivedOffers(auth.user.uid)
  }
  
  acceptOffer = offerId => {
    //console.log(`Accepting ${(offer)}`)
    this.props.changeOfferStatus(offerId, "accepted")
  }

  declineOffer = offerId => {
    //console.log(`Declining ${(offer)}`)
    this.props.changeOfferStatus(offerId, "declined")
  }

  offerStatus = status => {
    if(status === "pending") return "is-warning"
    if(status === "declined") return "is-danger"
    if(status === "accepted") return "is-success"
  }

    render() {
        const { offers } = this.props
        return (
            <div className="container">
              <div className="content-wrapper">
                <h1 className="title">Received Offers</h1>
                <div className="columns">
                { offers.map(offer => (
                    <div 
                    key={offer.id}
                    className="column is-one-third">
                      <ServiceItem
                        noButton
                        className="offer-card"
                        service={offer.service}>
                        <div className={`tag is-large ${this.offerStatus(offer.status)}`}>
                          {offer.status}
                        </div>
                        <hr />
                        <div className="service-offer">
                          <div>
                            <span className="label">From User:</span> {offer.fromUser.fullName}
                          </div>
                          <div>
                            <span className="label">Note:</span> {offer.note}
                          </div>
                          <div>
                            <span className="label">Price:</span> ${offer.price}
                          </div>
                          <div>
                            <span className="label">Time:</span> {offer.time} hours
                          </div>
                        </div>
                        { offer.status === "pending" &&
                        <div>
                          <hr />
                          <button 
                          onClick={() => this.acceptOffer(offer.id)} 
                          className="button is-success s-m-r">Accept</button>
                          <button 
                          onClick={() => this.declineOffer(offer.id)} 
                          className="button is-danger">Decline</button>
                        </div>
                        }
                      </ServiceItem>
                    </div>
                  ))
                }
                </div>
              </div>
            </div>
          )
    }
  
}

const mapStateToProps = ({offers}) => ({offers: offers.received})

const mapDispatchToProps = () => ({
  changeOfferStatus,
  fetchReceivedOffers
})

export default withAuth(
  connect(mapStateToProps, mapDispatchToProps())(ReceivedOffers))
