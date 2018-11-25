import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createPlaylistRequest } from '../../../actions/createPlaylistAction';
import { fetchUserRequest } from '../../../actions/fetchUserAction';

import './styles.css';

class PlaylistDetailPage extends Component {
  static propTypes = {
    /** Function performing an API call to create a playlist into Spotify */
    createPlaylist: PropTypes.func.isRequired,
    /** The Spotify connected user */
    connectedUser: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      playlistName: ''
    };
  }

  componentDidMount() {
    const accessToken = this.props.location.state
      ? this.props.location.state.accessToken
      : undefined;

    this.setState({ accessToken: accessToken });
    this.props.fetchUser(accessToken);
  }

  onChangePlaylistName = e => {
    this.setState({ playlistName: e.target.value });
  };

  onClickCreatePlaylist = () => {
    const { playlistName } = this.state;
    const { tracks, connectedUser } = this.props;
    const accessToken = this.props.location.state
      ? this.props.location.state.accessToken
      : undefined;

    // TODO check artists and playlist name not empty
    this.props.createPlaylist(
      connectedUser.id,
      tracks,
      playlistName,
      accessToken
    );
  };

  redirectToHome = () => {
    // redirect to the homepage
    this.props.history.push({
      pathname: '/'
    });
  };

  render() {
    return <div>Playlist detail</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: accessToken => dispatch(fetchUserRequest(accessToken)),
    createPlaylist: (userId, tracks, playlistName, accessToken) =>
      dispatch(createPlaylistRequest(userId, tracks, playlistName, accessToken))
  };
};

const mapStateToProps = state => {
  const { playlistReducer, userReducer } = state;

  const isFetchingTracks = playlistReducer
    ? playlistReducer.isFetchingTracks
    : false;
  const isAddingTracks = playlistReducer
    ? playlistReducer.isAddingTracks
    : false;
  const isCreatingPlaylist = playlistReducer
    ? playlistReducer.isCreatingTracks
    : false;
  const tracks = playlistReducer ? playlistReducer.tracks : {};
  const playlist = playlistReducer ? playlistReducer.playlist : {};

  const connectedUser = userReducer ? userReducer.user : {};
  const snapshotId = playlistReducer ? playlistReducer.snapshotId : {};

  return {
    snapshotId,
    playlist,
    tracks,
    connectedUser,
    isFetchingTracks,
    isAddingTracks,
    isCreatingPlaylist
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaylistDetailPage);
