import REact, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

class Payment extends Component {
  render() {
    debugger;
    
    return (
      <StripeCheckout
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    )
  }
}