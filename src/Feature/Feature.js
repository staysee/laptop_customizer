import React from 'react'
import FeatureOption from '../FeatureOption/FeatureOption'
import slugify from 'slugify'
import './Feature.css'

class Feature extends React.Component {
    render() {
        const itemHash = slugify(JSON.stringify(this.props.options));

        return(
            <fieldset className="feature" key={this.props.featureHash}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                <FeatureOption 
                    key={itemHash}
                    feature={this.props.feature}
                    options={this.props.options}
                    selected={this.props.selected}
                    updateFeature={this.props.updateFeature}
                />
            </fieldset>
        )

    }
}

export default Feature