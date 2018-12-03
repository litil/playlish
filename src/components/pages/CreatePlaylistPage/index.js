import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FaMusic, FaClock, FaFire } from 'react-icons/fa';

import { createPlaylistRequest } from '../../../actions/createPlaylistAction';
import { searchArtistsRequest } from '../../../actions/searchArtistsAction';
import { removeTracksRequest } from '../../../actions/removeTracksAction';
import { getArtistTopTracksRequest } from '../../../actions/getArtistTopTracksAction';

import StatsContainer from '../../organisms/StatsContainer';
import PageCoverWithInput from '../../molecules/PageCoverWithInput';
import PlaylistStatItem from '../../molecules/PlaylistStatItem';
import SearchedArtist from '../../molecules/SearchedArtist';
import SelectedArtist from '../../molecules/SelectedArtist';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

import cover from '../../../assets/cover_3.jpg';

import './styles.css';

class CreatePlaylistPage extends Component {
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

  onClickCreatePlaylist = () => {
    const { playlistName } = this.state;
    const { selectedArtists, connectedUser, accessToken } = this.props;

    const tracks = selectedArtists
      ? selectedArtists
          .map(artist => {
            return Object.values(artist)[0].tracks;
          })
          .flat()
      : [];

    // TODO check artists and playlist name not empty
    this.props.createPlaylist(
      connectedUser.id,
      tracks,
      playlistName,
      accessToken
    );
  };

  onChangePlaylistName = e => {
    const playlistName = e.target.value;
    this.setState({ playlistName });
  };

  onChangeSearchArtists = e => {
    const artistKeyword = e.target.value;
    const { accessToken } = this.props;

    if (artistKeyword.length > 2) {
      this.props.searchArtists(artistKeyword, accessToken);
    }
  };

  addArtist = artist => {
    const { getArtistTopTracks, accessToken } = this.props;
    getArtistTopTracks(artist, accessToken);
  };

  render() {
    const { searchedArtists, selectedArtists } = this.props;
    const countTracks = 0;
    const playlistDuration = 0;
    const playlistPopularity = 0;
    const createInputPlaceholder = 'Enter a name for your playlist';

    return (
      <div className="PlaylistDetailPage-container">
        <PageCoverWithInput
          alt="Create your playlist"
          src={cover}
          value={createInputPlaceholder}
          placeholder={createInputPlaceholder}
          onChangeFn={this.onChangePlaylistName}
        />

        <StatsContainer>
          <PlaylistStatItem
            icon={<FaMusic />}
            value={countTracks}
            text="Tracks"
          />
          <PlaylistStatItem
            icon={<FaClock />}
            value={playlistDuration}
            text="Duration"
          />
          <PlaylistStatItem
            icon={<FaFire />}
            value={playlistPopularity}
            text="Popularity"
          />
        </StatsContainer>

        <div className="CreatePlaylistPage-body">
          <Input
            placeholder="Search for artists"
            onChangeFn={this.onChangeSearchArtists}
            styles={{ padding: '0px' }}
          />
          <div className="CreatePlaylistPage-searchResults">
            {!searchedArtists
              ? 'Search results'
              : searchedArtists.items.map((artist, i) => {
                  return (
                    <SearchedArtist
                      artist={artist}
                      key={`searched-artists-${i}`}
                      onClickFn={() => this.addArtist(artist)}
                      last={i === searchedArtists.items.length - 1}
                    />
                  );
                })}
          </div>

          <div className="CreatePlaylistPage-playlist">
            <h2>Your playlist</h2>
            <Button text="Create" onClickFn={this.onClickCreatePlaylist} />
            {selectedArtists
              ? selectedArtists.map((artist, i) => {
                  return (
                    <SelectedArtist
                      artist={Object.values(artist)[0]}
                      key={`selected-artist-${i}`}
                    />
                  );
                })
              : 'please search for artists'}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArtistTopTracks: (artist, accessToken) =>
      dispatch(getArtistTopTracksRequest(artist, accessToken)),
    removeTracks: (tracksUris, accessToken) =>
      dispatch(removeTracksRequest(tracksUris, accessToken)),
    searchArtists: (keyword, accessToken) =>
      dispatch(searchArtistsRequest(keyword, accessToken)),
    createPlaylist: (userId, tracks, playlistName, accessToken) =>
      dispatch(createPlaylistRequest(userId, tracks, playlistName, accessToken))
  };
};

const mapStateToProps = state => {
  const { createPlaylistReducer } = state;

  const isSearchingArtists = createPlaylistReducer
    ? createPlaylistReducer.isSearchingArtists
    : false;
  const searchedArtists = createPlaylistReducer
    ? createPlaylistReducer.searchedArtists
    : null;
  const isFetchingTracks = createPlaylistReducer
    ? createPlaylistReducer.isFetchingTracks
    : false;
  const selectedArtists = createPlaylistReducer
    ? createPlaylistReducer.selectedArtists
    : null;

  return {
    isSearchingArtists,
    searchedArtists,
    isFetchingTracks,
    selectedArtists
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePlaylistPage);
