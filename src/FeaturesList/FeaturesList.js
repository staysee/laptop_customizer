import React from 'react'
import Feature from '../Feature/Feature'
import './FeaturesList.css'

class FeaturesList extends React.Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
                <Feature 
                    key={featureHash}
                    feature={feature}
                    options={this.props.features[feature]}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                />
            )
        })
        return(
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {features}
            </form>
        )
    }
}

export default FeaturesList