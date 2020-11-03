/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import { connect} from 'react-redux' // Is a HOC, (Higher Order Component)
import ServiceItem from '../components/service/ServiceItem'
import Hero from '../components/Hero'
import { fetchServices } from 'actions'

class Home extends React.Component {

  state = {
    services: []
  }

  componentDidMount() {
    this.props.fetchServices()
  }

  renderServices = (services) => services.map(service => <ServiceItem key={service.id} service={service}/>)

  render() {
    const { services } = this.props
    return (
      <div>
        <Hero />

        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns is-multiline">
              {this.renderServices(services)}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({services: state.services.all})

export default connect(mapStateToProps, {fetchServices})(Home)

/* services.map(service =>
                    <div 
                      key= { service.id }
                      className="column is-one-third">
                      <div className="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
                        <div className="card-title">
                          <h4>{ service.title }</h4>
                        </div>
                        <div className="card-icon">
                          <img src= { service.image } alt=""/>
                        </div>
                        <div className="card-text">
                          <p> { service.description } </p>
                        </div>
                        <div className="card-action">
                          <a href="#" className="button btn-align-md accent-btn raised">Learn More</a>
                        </div>
                      </div>
                    </div>
                  )
              */