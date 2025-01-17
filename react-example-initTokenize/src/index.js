import React from 'react'
import ReactDOM from 'react-dom'

import SecureFields from './SecureFields'

ReactDOM.render(<SecureFields config={{
  merchantID: '1110003836',
  fields:{
    cardNumber: {
      placeholderElementId: 'card-number',
      inputType: 'tel'
    },
    cvv: {
      placeholderElementId: 'cvv-number',
      inputType: 'tel'
    }
  },
  options: {}
}} />, document.getElementById('app'))
