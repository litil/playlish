import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './styles.css';

class PlaylistItem extends Component {
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

  redirectToPlaylistDetail = () => {
    const { playlist } = this.props;

    if (playlist && playlist.id) {
      // redirect to the playlist detail
      this.props.history.push({
        pathname: `/playlists/${playlist.id}`
      });
    }
  };

  render() {
    const { playlist, last } = this.props;
    const className = last
      ? 'PlaylistItem-container-last'
      : 'PlaylistItem-container';

    if (!playlist) return '';

    const playlistImg =
      playlist.images && playlist.images.length > 0 ? (
        <img
          className="PlaylistItem-img"
          src={playlist.images[0].url}
          alt={playlist.name}
        />
      ) : (
        ''
      );

    return (
      <div className={className} onClick={this.redirectToPlaylistDetail}>
        {playlistImg}
        <div className="PlaylistItem-info">
          <h3>{playlist.name}</h3>
          <p>{`${playlist.tracks.total} tracks`}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistItem);
