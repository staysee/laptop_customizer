import React from 'react'
import SummaryItems from '../SummaryItems/SummaryItems'
import SummaryTotal from '../SummaryTotal/SummaryTotal'


class Summary extends React.Component {
    render() {
      return(
        <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryItems selected={this.props.selected} />
            <SummaryTotal selected={this.props.selected} />
        </section>
      )
    }
 
      
}

export default Summary