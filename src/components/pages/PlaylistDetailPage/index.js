import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchPlaylistDetailRequest } from '../../../actions/fetchPlaylistDetailAction';

import PageCover from '../../molecules/PageCover';
import PlaylistDetail from '../../organisms/PlaylistDetail';

import cover from '../../../assets/cover_1.jpg';
import './styles.css';

class PlaylistDetailPage extends Component {
  static propTypes = {
    /** Playlists detail object. Access the correct playlist detail by playlist id. */
    playlistsDetail: PropTypes.object.isRequired,
    /** Function performing an API call to fetch the playlist detail from Spotify */
    fetchPlaylistDetail: PropTypes.func.isRequired
  };

  componentDidMount() {
    // accessing context data within componentDidMount is not possible
    // solution: pass it from above, as props
    // @see Dan Abramov's answer https://github.com/facebook/react/issues/12397
    const { accessToken } = this.props;
    const playlistId = this.props.match.params.id;

    if (accessToken && playlistId) {
      this.props.fetchPlaylistDetail(playlistId, accessToken);
    }
  }

  render() {
    const { playlistsDetail } = this.props;
    const playlistId = this.props.match.params.id;
    if (!playlistsDetail || !playlistId || !playlistsDetail[playlistId])
      return 'Playlist not found, sorry :(';

    const playlist = playlistsDetail[playlistId];

    return (
      <div className="PlaylistDetailPage-container">
        <PageCover
          alt={`Playlist: ${playlist.name}`}
          src={cover}
          title={playlist.name}
        />

        <div className="PlaylistDetailPage-statsContainer">
          <span>{`${playlist.followers.total} followers`}</span>
          <span>{`${playlist.tracks.total} tracks`}</span>
        </div>

        <PlaylistDetail playlist={playlist} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylistDetail: (playlistId, accessToken) =>
      dispatch(fetchPlaylistDetailRequest(playlistId, accessToken))
  };
};

const mapStateToProps = state => {
  const { playlistReducer } = state;

  const isFetchingPlaylistDetail = playlistReducer
    ? playlistReducer.isFetchingPlaylistDetail
    : false;
  const playlistsDetail = playlistReducer
    ? playlistReducer.playlistsDetail
    : {};

  return {
    isFetchingPlaylistDetail,
    playlistsDetail
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetailPage);
