import React, {Component} from 'react'
import PropTypes from 'prop-types'

import './styles.css';

export default class Input extends Component {
    static propTypes = {
        /** Value to be displayed in the input */
        value: PropTypes.string.isRequired,
        /** Placeholder to be displayed in the input */
        placeholder: PropTypes.string.isRequired,
        /** Function to be called on click on the button */
        onChangeFn: PropTypes.func.isRequired
    }
    render() {
        const { placeholder, onChangeFn, value } = this.props

        return <input
            value={ value }
            onChange={ onChangeFn }
            placeholder={ placeholder } />
    }
}
