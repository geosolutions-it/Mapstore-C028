/**
import { defaultProps } from 'recompose';
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const PropTypes = require('prop-types');
const HTML = require('../../MapStore2/web/client/components/I18N/HTML');

require('./homedescription/homedescription.css');

class HomeDescription extends React.Component {

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.object
    };

    static defaultProps = {
        style: {textAlign: "center"}
    };

    render() {
        return (
            <div style={this.props.style} className="mapstore-home-description">
                <HTML msgId="home.description" />
            </div>
        );
    }
}

module.exports = {
    HomeDescriptionPlugin: HomeDescription
};
