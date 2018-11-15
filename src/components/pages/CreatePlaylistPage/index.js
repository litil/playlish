import React, {Component} from 'react'
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import * as qs from 'query-string';

import { addArtistRequest } from '../../../actions/addArtistAction'
import { createPlaylistRequest } from '../../../actions/createPlaylistAction'
import { fetchUserRequest } from '../../../actions/fetchUserAction'

import './styles.css';

class CreatePlaylistPage extends Component {
    static propTypes = {
        /** Spotify user fetchedArtist */
        fetchedArtist: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object
          ]),
        /** Function performing an API call to add an artist to the playlist */
        addArtist: PropTypes.func.isRequired,
      /** Function performing an API call to create a playlist into Spotify */
      createPlaylist: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            artist: 'Welshly Arms',
            playlistName: 'Playlish1',
            accessToken: ''
        }
    }

    componentDidMount() {
        const parsed = qs.parse(this.props.location.hash, { ignoreQueryPrefix: true });
        const accessToken = parsed.access_token
        const expiresIn = parsed.expires_in

        this.setState({accessToken: accessToken})
        this.props.fetchUser(accessToken)
    }

    onChangeArtist = (e) => {
        this.setState({artist: e.target.value})
    }

    onChangePlaylistName = (e) => {
        this.setState({playlistName: e.target.value})
    }

    onClickAddArtist = () => {
        const { artist, accessToken } = this.state
        this.props.addArtist(artist, accessToken)
        this.setState({artist: ''})
    }

    onClickCreatePlaylist = () => {
        const { accessToken, playlistName } = this.state
        const { tracks, connectedUser } = this.props

        console.log('tracks from view', tracks)

        // TODO check artists and playlist name not empty
        this.props.createPlaylist(connectedUser.id, tracks, playlistName, accessToken)
    }

    render() {
        const { fetchedArtist, addArtist } = this.props

        return <div className="CreatePlaylistPage-container">
            <h1>Create your playlist</h1>

            <div className="CreatePlaylistPage-search">
                <input value={this.state.artist} onChange={this.onChangeArtist}/>
                <button onClick={ this.onClickAddArtist }>Add</button>
            </div>

            <div className="CreatePlaylistPage-list">
                { fetchedArtist && fetchedArtist.length > 0 ?
                    fetchedArtist.map((artist, i) => <div key={`artist-row-${i}`}>{artist.name + ' ' + artist.id}</div>)
                    : 'No artist selected yet'
                }
            </div>

            <div className="CreatePlaylistPage-create">
                <input value={this.state.playlistName} onChange={this.onChangePlaylist}/>
                <button onClick={this.onClickCreatePlaylist}>Create Playlist</button>
            </div>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        fetchUser: (accessToken) => dispatch(fetchUserRequest(accessToken)),
        addArtist: (artist, accessToken) => dispatch(addArtistRequest(artist, accessToken)),
        createPlaylist: (userId, tracks, playlistName, accessToken) => dispatch(createPlaylistRequest(userId, tracks, playlistName, accessToken))
    })
}

const mapStateToProps = state => {
    const { artistReducer, playlistReducer, userReducer } = state

    const fetchedArtist = artistReducer ? artistReducer.data : {}
    const isSearchingArtist = artistReducer ? artistReducer.isWorking : false
    const isFetchingTracks = playlistReducer ? playlistReducer.isFetchingTracks : false
    const isAddingTracks = playlistReducer ? playlistReducer.isAddingTracks : false
    const isCreatingPlaylist = playlistReducer ? playlistReducer.isCreatingTracks : false
    const tracks = playlistReducer ? playlistReducer.tracks : {}

    const connectedUser = userReducer ? userReducer.user : {}
    const isFetchingUser = userReducer ? userReducer.isFetchingUser : false

    return { fetchedArtist, tracks, connectedUser, isSearchingArtist, isFetchingTracks, isAddingTracks, isCreatingPlaylist }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePlaylistPage)
