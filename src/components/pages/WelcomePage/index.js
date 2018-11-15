import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import logo from '../../../playlish_logo.svg';

import './styles.css';

class WelcomePage extends Component {
    static propTypes = {
        /** Spotify user data */
        data: PropTypes.object,
    }

    redirectToSpotifySignin = () => {
        const scopesArray = [
            'user-read-private',
            'user-read-email',
            'playlist-read-private',
            'playlist-modify-public',
            'playlist-modify-private',
            'playlist-read-collaborative'
        ]
        const scopes = scopesArray.join(' ');
        const clientId = '341cbbaadca743aba2dd3f99302f623f'
        const responseType = 'token'
        const redirectUri = 'http:%2F%2Flocalhost:3000%2Fcreate'
        const state = '123'     //TODO generate a random string
        window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=${responseType}&redirect_uri=${redirectUri}&state=${state}&scope=${encodeURIComponent(scopes)}`
    }


    render() {
        const { data } = this.props

        return <div className="WelcomePage-container">
            <div className="WelcomePage-innerContainer">
                <div className="WelcomePage-brand">
                    <img src={logo} alt="logo"/>
                    <h1>Playlish</h1>
                </div>
                <div className="WelcomePage-slogan">
                    <h3>Fastest playlist generator for Spotify</h3>
                </div>

                <button
                    className="WelcomePage-login" 
                    onClick={this.redirectToSpotifySignin}>Sign in to Spotify</button>
            </div>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return ({

    })
}

const mapStateToProps = state => {
    const { userReducer } = state

    const data = userReducer ? userReducer.data : {}
    const isWorking = userReducer ? userReducer.isWorking : false

    return { data, isWorking }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage)
