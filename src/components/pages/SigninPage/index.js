import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import './styles.css';

class SigninPage extends Component {
    static propTypes = {
        /** Spotify user data */
        data: PropTypes.object,
    }

    redirectToSpotifySignin = () => {
        const scopes = 'user-read-private user-read-email playlist-read-private playlist-modify-public playlist-modify-private playlist-read-collaborative';
        window.location = 'https://accounts.spotify.com/authorize?client_id=341cbbaadca743aba2dd3f99302f623f&response_type=token&redirect_uri=http:%2F%2Flocalhost:3000%2Fcreate&state=123&scope=' + encodeURIComponent(scopes)
    }


    render() {
        const { data } = this.props

        console.log('Data from SigninPage', data)

        return <div className="SigninPage-container">
            <h1>Welcome to Playlish</h1>
            <button onClick={this.redirectToSpotifySignin}>Sign in to Spotify</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(SigninPage)
