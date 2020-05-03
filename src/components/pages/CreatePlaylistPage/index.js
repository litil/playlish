import { flatten } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaClock, FaFire, FaMusic } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createPlaylistRequest } from '../../../actions/createPlaylistAction';
import { getArtistTopTracksRequest } from '../../../actions/getArtistTopTracksAction';
import { removeTracksRequest } from '../../../actions/removeTracksAction';
import {
  resetSearchArtistsRequest,
  searchArtistsRequest,
} from '../../../actions/searchArtistsAction';
import {
  PlaylistStatItem,
  SearchedArtist,
  SelectedArtist,
} from '../../molecules/';
import './styles.css';

class CreatePlaylistPage extends Component {
  static propTypes = {
    /** Function performing an API call to create a playlist into Spotify */
    createPlaylist: PropTypes.func.isRequired,
    /** The Spotify connected user */
    connectedUser: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      artistKeyword: '',
    };
  }

  onClickCreatePlaylist = () => {
    const { playlistName } = this.state;
    const { selectedArtists, connectedUser, accessToken } = this.props;

    const tracks = selectedArtists
      ? selectedArtists.map((artist) => {
          return Object.values(artist)[0].tracks;
        })
      : [];

    // TODO check artists and playlist name not empty
    this.props.createPlaylist(
      connectedUser.id,
      flatten(tracks),
      playlistName,
      accessToken
    );
  };

  onChangePlaylistName = (e) => {
    const playlistName = e.target.value;
    this.setState({ playlistName });
  };

  onChangeSearchArtists = (e) => {
    const artistKeyword = e.target.value;
    this.setState({ artistKeyword });
    const { accessToken } = this.props;

    if (artistKeyword.length > 2) {
      this.props.searchArtists(artistKeyword, accessToken);
    }
  };

  addArtist = (artist) => {
    const { getArtistTopTracks, accessToken, resetSearchArtists } = this.props;
    getArtistTopTracks(artist, accessToken);
    this.setState({ artistKeyword: '' });
    resetSearchArtists();
  };

  countTracks = () => {
    const { selectedArtists } = this.props;
    if (!selectedArtists || selectedArtists.length === 0) return 0;

    const artistsArray = selectedArtists.map(
      (item) => Object.values(item)[0].tracks.length
    );
    return artistsArray.reduce((sum, x) => sum + x);
  };

  msToTime = (duration) => {
    // const milliseconds = parseInt((duration % 1000) / 100),
    //   seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60),
      hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;

    // return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    return hours + 'h ' + minutes + 'min';
  };

  calculateDuration = () => {
    const { selectedArtists } = this.props;
    if (!selectedArtists || selectedArtists.length === 0) return 0;

    const tracksDurationArray = selectedArtists.map((item) =>
      Object.values(item)[0]
        .tracks.map((t) => t.duration_ms)
        .reduce((sum, x) => sum + x)
    );

    const duration = tracksDurationArray.reduce((sum, x) => sum + x);

    return this.msToTime(duration);
  };

  calculatePopularity = (countTracks) => {
    const { selectedArtists } = this.props;
    if (!selectedArtists || selectedArtists.length === 0 || countTracks === 0)
      return 0;

    const tracksPopularityArray = selectedArtists.map((item) =>
      Object.values(item)[0]
        .tracks.map((t) => t.popularity)
        .reduce((sum, x) => sum + x)
    );

    const artistsPopularityArray =
      tracksPopularityArray.reduce((sum, x) => sum + x) / countTracks;

    return Math.round(artistsPopularityArray);
  };

  render() {
    const {
      searchedArtists,
      selectedArtists,
      createdPlaylist,
      isCreatingPlaylist,
    } = this.props;
    const { playlistName } = this.state;
    const countTracks = this.countTracks();
    const playlistDuration = this.calculateDuration();
    const playlistPopularity = this.calculatePopularity(countTracks);
    const createInputPlaceholder = 'Enter a name for your playlist';
    const isPlaylistCreated = createdPlaylist && isCreatingPlaylist === false;

    if (isPlaylistCreated) {
      return <Redirect to="/playlists" />;
    }

    const isArtistsSectionVisible = !!playlistName;
    const isPreviewVisible =
      isArtistsSectionVisible &&
      !!selectedArtists &&
      selectedArtists.length > 0;

    return (
      <div className="flex flex-col items-center">
        {/* <h1 className="font-bold text-3xl lg:text-5xl mb-6">
          Create a new playlist
        </h1> */}
        {/* <div className="mb-2 container w-1/2">
          <div className="mb-4 text-left">
            💬 Start by choosing a cool name for your playlist.
          </div>
          <div className="mb-4 text-left">
            🔎 Then, search for artists and add them to your playlist. We
            automatically add the 5 most famous songs from each artist you've
            selected.{" "}
          </div>
          <div className="mb-4 text-left">
            ✅ Finally, review it and click on the create button below.
          </div>
          <div className="mb-4 text-left">
            💪 That's it! your playlist is ready to be played or shared from
            Spotify
          </div>
        </div>
        <div className="container text-xs lg:text-sm italic w-1/2">
          Keep in mind that you can't create a playlist with more than 100 songs
          right now.
        </div> */}

        <div className="mt-12 mb-24 w-3/4 flex flex-col items-center">
          <div className="mb-4 text-2xl lg:text-3xl">
            💬 Choose a name for your playlist
          </div>
          <input
            className="border-0 w-3/4 text-center"
            placeholder="> type here the name of your playlist"
            onChange={this.onChangePlaylistName}
          ></input>
        </div>

        {isArtistsSectionVisible && (
          <div className="mb-12 w-3/4 flex flex-col items-center">
            <div className="mb-2 text-2xl lg:text-3xl">
              🔎 Search for artists
            </div>
            <div className="container text-xs lg:text-sm italic mb-4 w-3/4">
              We automatically add the 3 most famous songs from each artist
              you've selected. Keep in mind that you can't create a playlist
              with more than 100 songs right now.
            </div>
            <input
              className="border-0 w-3/4 text-center"
              placeholder="> search for artists here, such as: Milburn, Bjorg, Eminem ..."
              onChange={this.onChangeSearchArtists}
              value={this.state.artistKeyword}
            ></input>
            <div className="CreatePlaylistPage-searchResults">
              {!!searchedArtists &&
                searchedArtists.items.map((artist, i) => {
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
          </div>
        )}

        {isPreviewVisible && (
          <div className="mb-4 w-3/4 flex flex-col items-center">
            <div className="mb-2 text-2xl lg:text-3xl">
              ✅ Finally, review it and click on the create button below.
            </div>

            <div className="flex flex-row text-blue-200 items-center mb-8">
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
            </div>

            {selectedArtists && selectedArtists.length > 0 ? (
              <div className="flex flex-col">
                {selectedArtists.map((artist, i) => {
                  return (
                    <SelectedArtist
                      artist={Object.values(artist)[0]}
                      key={`selected-artist-${i}`}
                    />
                  );
                })}
              </div>
            ) : (
              ''
            )}

            {playlistName && (
              <button
                class="bg-transparent hover:bg-green-500 text-blue-100 hover:text-green-100 font-semibold py-2 px-8 border border-solid border-blue-100 hover:border-transparent uppercase rounded-xl mt-8"
                onClick={this.onClickCreatePlaylist}
              >
                Create playlist
              </button>
            )}
          </div>
        )}

        {/* <div className="CreatePlaylistPage-body">
          <div className="CreatePlaylistPage-innerBody">
            <Title text="Search" />

            <Input
              placeholder="Arctic Monkeys, Terror, Welshly Arms ..."
              value={this.state.artistKeyword}
              onChangeFn={this.onChangeSearchArtists}
              styles={{ padding: "0px", border: "none" }}
            />
            <div className="CreatePlaylistPage-searchResults">
              {!searchedArtists ? (
                <p>
                  Start by searching for artists. Note that we'll only display
                  the 5 most relevant ones. Then, add them to your playlist.
                </p>
              ) : (
                searchedArtists.items.map((artist, i) => {
                  return (
                    <SearchedArtist
                      artist={artist}
                      key={`searched-artists-${i}`}
                      onClickFn={() => this.addArtist(artist)}
                      last={i === searchedArtists.items.length - 1}
                    />
                  );
                })
              )}
            </div>

            {selectedArtists && selectedArtists.length > 0 ? (
              <div className="CreatePlaylistPage-playlist">
                <Title text="Your Playlist" />
                {selectedArtists.map((artist, i) => {
                  return (
                    <SelectedArtist
                      artist={Object.values(artist)[0]}
                      key={`selected-artist-${i}`}
                    />
                  );
                })}
                <Button
                  text="Create"
                  onClickFn={this.onClickCreatePlaylist}
                  styles={{ marginTop: "32px" }}
                  disabled={!this.state.playlistName}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
       */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetSearchArtists: () => dispatch(resetSearchArtistsRequest()),
    getArtistTopTracks: (artist, accessToken) =>
      dispatch(getArtistTopTracksRequest(artist, accessToken)),
    removeTracks: (tracksUris, accessToken) =>
      dispatch(removeTracksRequest(tracksUris, accessToken)),
    searchArtists: (keyword, accessToken) =>
      dispatch(searchArtistsRequest(keyword, accessToken)),
    createPlaylist: (userId, tracks, playlistName, accessToken) =>
      dispatch(
        createPlaylistRequest(userId, tracks, playlistName, accessToken)
      ),
  };
};

const mapStateToProps = (state) => {
  const { createPlaylistReducer, playlistReducer } = state;

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

  const createdPlaylist = playlistReducer ? playlistReducer.playlist : null;
  const isCreatingPlaylist = playlistReducer
    ? playlistReducer.isCreating
    : false;

  return {
    isSearchingArtists,
    searchedArtists,
    isFetchingTracks,
    selectedArtists,
    createdPlaylist,
    isCreatingPlaylist,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreatePlaylistPage));
