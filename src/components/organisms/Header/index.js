import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import logo from '../../../playlish_logo.svg';

import './styles.css';

export default class Header extends Component {
    static propTypes = {
        /** Spotify connected user */
        connectedUser: PropTypes.object,
        /** Function to redirect the user to the homepage */
        redirectToHome: PropTypes.func.isRequired
    }

    render() {
        const { connectedUser, redirectToHome } = this.props

        return <div className="Header-container">
            <div className="Header-brand" onClick={ redirectToHome }>
                <img src={logo} alt="logo"/>
                <h2>Playlish</h2>
            </div>

            { connectedUser ? <div className="Header-user">
                <span className="Header-connected">connected as&nbsp;</span>
                <span className="Header-username">{ connectedUser.display_name }</span>
            </div> : ''}
        </div>
    }
}
