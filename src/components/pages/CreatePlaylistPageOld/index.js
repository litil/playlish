import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createPlaylistRequest } from '../../../actions/createPlaylistAction';
import { fetchUserRequest } from '../../../actions/fetchUserAction';

import Title from '../../elements/Title';
import PageDescription from '../../elements/PageDescription';
import Button from '../../elements/Button';
import Input from '../../elements/Input';

import './styles.css';

class CreatePlaylistPageOld extends Component {
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
    const {
      snapshotId,
      isAddingTracks,
      isCreatingPlaylist,
      isFetchingTracks
    } = this.props;

    const loadingMessage = isFetchingTracks
      ? 'Fetching corresponding tracks...'
      : isCreatingPlaylist
      ? 'Creating the playlist...'
      : isAddingTracks
      ? 'Adding tracks to the playlise...'
      : snapshotId
      ? 'Your playlist has been successfully created! Check it in Spotify :)'
      : '';

    return (
      <div className="CreatePlaylistPageOld-container">
        <div className="CreatePlaylistPageOld-innerContainer">
          <div className="CreatePlaylistPageOld-playlistName">
            <Title text="Create your playlist" />
            <PageDescription>
              <p>Ready to create your playlist?</p>
              <p>You only have to give it a name and we will generate it!</p>
            </PageDescription>

            <div className="CreatePlaylistPageOld-create">
              <Input
                value={this.state.playlistName}
                onChangeFn={this.onChangePlaylistName}
                placeholder="Enter a name for your playlist"
              />
              <Button
                text="Create"
                onClickFn={this.onClickCreatePlaylist}
                styles={{ marginLeft: '32px' }}
              />
            </div>

            {loadingMessage ? (
              <span className="CreatePlaylistPageOld-message">
                {loadingMessage}
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    );
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
)(CreatePlaylistPageOld);
