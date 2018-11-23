import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { listPlaylistsRequest } from '../../../actions/listPlaylistsAction';
import cover from '../../../assets/cover_1.jpg';

import './styles.css';

class ListPlaylistsPage extends Component {
  static propTypes = {
    /** The Spotify connected user */
    connectedUser: PropTypes.object,
    /** The Spotify access token */
    accessToken: PropTypes.object
  };

  componentDidMount() {
    // accessing context data within componentDidMount is not possible
    // solution: pass it from above, as props
    // @see Dan Abramov's answer https://github.com/facebook/react/issues/12397
    const { accessToken, connectedUser } = this.props;
    if (accessToken && connectedUser) {
      this.props.listPlaylists(connectedUser.id, accessToken);
    }
  }

  render() {
    const { isFetchingPlaylists, playlists } = this.props;
    console.log('test', isFetchingPlaylists);
    console.log('test2', playlists);

    if (playlists && playlists.length > 1)
      console.log(JSON.stringify(playlists[0]));

    // {
    //   "collaborative": true,
    //   "external_urls": {
    //     "spotify": "https://open.spotify.com/playlist/3mQAI4FzVuEdHmkpIuHXk9"
    //   },
    //   "href": "https://api.spotify.com/v1/playlists/3mQAI4FzVuEdHmkpIuHXk9",
    //   "id": "3mQAI4FzVuEdHmkpIuHXk9",
    //   "images": [
    //     {
    //       "height": 640,
    //       "url": "https://mosaic.scdn.co/640/1c87b0ac6f0cd837dc399d52bab96134442547ea56cc004f3ff47cff0ad8fcf05461730a193d8d8298c5699709d8c2497f34a177d159e1b1733f25bbe6a84983ed9b0a04ce633b021329f7df034e7c7c",
    //       "width": 640
    //     },
    //     {
    //       "height": 300,
    //       "url": "https://mosaic.scdn.co/300/1c87b0ac6f0cd837dc399d52bab96134442547ea56cc004f3ff47cff0ad8fcf05461730a193d8d8298c5699709d8c2497f34a177d159e1b1733f25bbe6a84983ed9b0a04ce633b021329f7df034e7c7c",
    //       "width": 300
    //     },
    //     {
    //       "height": 60,
    //       "url": "https://mosaic.scdn.co/60/1c87b0ac6f0cd837dc399d52bab96134442547ea56cc004f3ff47cff0ad8fcf05461730a193d8d8298c5699709d8c2497f34a177d159e1b1733f25bbe6a84983ed9b0a04ce633b021329f7df034e7c7c",
    //       "width": 60
    //     }
    //   ],
    //   "name": "Playlist mariage",
    //   "owner": {
    //     "display_name": "Daphné Lambert",
    //     "external_urls": {
    //       "spotify": "https://open.spotify.com/user/11178545817"
    //     },
    //     "href": "https://api.spotify.com/v1/users/11178545817",
    //     "id": "11178545817",
    //     "type": "user",
    //     "uri": "spotify:user:11178545817"
    //   },
    //   "primary_color": null,
    //   "public": false,
    //   "snapshot_id": "Mjk2LDBkOTVkZTJhYjJkOWM1ZmY4NmEwZTE1YjljNWY1MzYxY2YyMGQ1NzU=",
    //   "tracks": {
    //     "href": "https://api.spotify.com/v1/playlists/3mQAI4FzVuEdHmkpIuHXk9/tracks",
    //     "total": 261
    //   },
    //   "type": "playlist",
    //   "uri": "spotify:user:11178545817:playlist:3mQAI4FzVuEdHmkpIuHXk9"
    // }

    return (
      <div className="ListPlaylistsPage-container">
        <div className="ListPlaylistsPage-imgContainer">
          <div className="ListPlaylistsPage-innerImgContainer">
            <img src={cover} alt="Concert" />
          </div>
        </div>

        <div className="ListPlaylistsPage-lower">content</div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    listPlaylists: (userId, accessToken) =>
      dispatch(listPlaylistsRequest(userId, accessToken))
  };
};

const mapStateToProps = state => {
  const { playlistReducer } = state;

  const isFetchingPlaylists = playlistReducer
    ? playlistReducer.isFetchingPlaylists
    : false;
  const playlists = playlistReducer ? playlistReducer.playlists : {};

  return {
    isFetchingPlaylists,
    playlists
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPlaylistsPage);
