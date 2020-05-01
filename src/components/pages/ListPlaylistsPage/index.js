import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaMusic, FaVolumeUp } from 'react-icons/fa';
import { connect } from 'react-redux';
import { listPlaylistsRequest } from '../../../actions/listPlaylistsAction';
import cover from '../../../assets/cover_1.jpg';
import { PageCover, PlaylistStatItem } from '../../molecules/';
import { PlaylistsList, StatsContainer } from '../../organisms/';
import './styles.css';

class ListPlaylistsPage extends Component {
  static propTypes = {
    /** The Spotify connected user */
    connectedUser: PropTypes.object,
    /** The Spotify access token */
    accessToken: PropTypes.string,
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

    if (playlists && playlists.length > 1)
      if (isFetchingPlaylists) return 'Fetching playlists, please';
    if (!playlists || playlists.length === 0)
      return 'No playlists found, you work too much!';

    const totalTracks = playlists
      .map((p) => p.tracks.total)
      .reduce((sum, x) => sum + x);
    const totalPlaylists = playlists.length;

    return (
      <div className="ListPlaylistsPage-container">
        <PageCover
          alt="List your playlishs"
          src={cover}
          title="Your Playlists"
        />

        <StatsContainer>
          <PlaylistStatItem
            icon={<FaVolumeUp />}
            value={totalPlaylists}
            text="Playlists"
          />
          <PlaylistStatItem
            icon={<FaMusic />}
            value={totalTracks}
            text="Tracks"
          />
        </StatsContainer>

        <PlaylistsList playlists={playlists} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    listPlaylists: (userId, accessToken) =>
      dispatch(listPlaylistsRequest(userId, accessToken)),
  };
};

const mapStateToProps = (state) => {
  const { playlistReducer } = state;

  const isFetchingPlaylists = playlistReducer
    ? playlistReducer.isFetchingPlaylists
    : false;
  const playlists = playlistReducer ? playlistReducer.playlists : {};

  return {
    isFetchingPlaylists,
    playlists,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPlaylistsPage);
