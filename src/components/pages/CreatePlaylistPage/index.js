import { flatten } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaCheck, FaChevronCircleRight, FaClock, FaEye, FaFire, FaMusic } from 'react-icons/fa';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { createPlaylistRequest } from '../../../actions/createPlaylistAction';
import { getArtistTopTracksRequest } from '../../../actions/getArtistTopTracksAction';
import { removeTracksRequest } from '../../../actions/removeTracksAction';
import {
  resetSearchArtistsRequest,
  searchArtistsRequest
} from '../../../actions/searchArtistsAction';
import { PlaylistStatItem, SearchedArtist, SelectedArtist } from '../../molecules/';

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
      playlistName: '',
      artistKeyword: ''
    };
  }

  onClickCreatePlaylist = () => {
    const { playlistName } = this.state;
    const { selectedArtists, connectedUser, accessToken } = this.props;

    const tracks = selectedArtists
      ? selectedArtists.map(artist => {
          return Object.values(artist)[0].tracks;
        })
      : [];

    // TODO check artists and playlist name not empty
    this.props.createPlaylist(connectedUser.id, flatten(tracks), playlistName, accessToken);
  };

  onChangePlaylistName = e => {
    const playlistName = e.target.value;
    this.setState({ playlistName });
  };

  onChangeSearchArtists = e => {
    const artistKeyword = e.target.value;
    this.setState({ artistKeyword });
    const { accessToken } = this.props;

    if (artistKeyword.length > 2) {
      this.props.searchArtists(artistKeyword, accessToken);
    }
  };

  addArtist = artist => {
    const { getArtistTopTracks, accessToken, resetSearchArtists } = this.props;
    getArtistTopTracks(artist, accessToken);
    this.setState({ artistKeyword: '' });
    resetSearchArtists();
  };

  countTracks = () => {
    const { selectedArtists } = this.props;
    if (!selectedArtists || selectedArtists.length === 0) return 0;

    const artistsArray = selectedArtists.map(item => Object.values(item)[0].tracks.length);
    return artistsArray.reduce((sum, x) => sum + x);
  };

  msToTime = duration => {
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

    const tracksDurationArray = selectedArtists.map(item =>
      Object.values(item)[0]
        .tracks.map(t => t.duration_ms)
        .reduce((sum, x) => sum + x)
    );

    const duration = tracksDurationArray.reduce((sum, x) => sum + x);

    return this.msToTime(duration);
  };

  calculatePopularity = countTracks => {
    const { selectedArtists } = this.props;
    if (!selectedArtists || selectedArtists.length === 0 || countTracks === 0) return 0;

    const tracksPopularityArray = selectedArtists.map(item =>
      Object.values(item)[0]
        .tracks.map(t => t.popularity)
        .reduce((sum, x) => sum + x)
    );

    const artistsPopularityArray = tracksPopularityArray.reduce((sum, x) => sum + x) / countTracks;

    return Math.round(artistsPopularityArray);
  };

  render() {
    const { searchedArtists, selectedArtists, createdPlaylist, isCreatingPlaylist } = this.props;
    const { playlistName } = this.state;
    const countTracks = this.countTracks();
    const playlistDuration = this.calculateDuration();
    const playlistPopularity = this.calculatePopularity(countTracks);
    const isPlaylistCreated = createdPlaylist && isCreatingPlaylist === false;

    const artistsSectionRef = React.createRef();
    const reviewSectionRef = React.createRef();

    const handleClickArtistsSectionRef = ref => {
      artistsSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    const handleClickReviewSectionRef = ref =>
      reviewSectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    if (isPlaylistCreated) {
      return <Redirect to="/playlists" />;
    }

    const artistsInPlaylist =
      !!selectedArtists && selectedArtists.length > 0
        ? selectedArtists.map(artist => Object.values(artist)[0].name).join(', ')
        : 0;

    const isArtistsSectionVisible = !!playlistName;
    const isPreviewVisible =
      isArtistsSectionVisible && !!selectedArtists && selectedArtists.length > 0;

    return (
      <div className="flex flex-col items-center">
        <div className="mt-16 mb-16 flex flex-col items-center w-full">
          <h3
            className="
            font-bold text-blue-100 mb-1 
            text-xl lg:text-2xl
            tracking-widest mb-20
            justify-center items-center WelcomePage-SectionTitle"
          >
            Choose a name for your playlist
          </h3>
          <input
            className="
              border-0 
              text-center
              text-2xl lg:text-4xl
              text-customBlue-300
              w-full
              CreatePage-SectionTitle"
            placeholder="> type here the name of your playlist"
            onChange={this.onChangePlaylistName}
          ></input>
          {!!playlistName && (
            <button
              class="
              bg-customBlue-500 hover:bg-customBlue-700 
              text-blue-100 font-semibold 
              py-1 px-4 
              mt-40 mb-24
              border border-solid border-transparent 
              rounded-xl 
              flex flex-row items-center justify-center"
              onClick={() => handleClickArtistsSectionRef(artistsSectionRef)}
            >
              <FaChevronCircleRight />
              <span className="ml-2 text-sm">Next?</span>
            </button>
          )}
        </div>

        {isArtistsSectionVisible && (
          <>
            <div className="mt-16 mb-16 flex flex-col items-center w-full" ref={artistsSectionRef}>
              <h3
                className="
            font-bold text-blue-100 mb-1 
            text-xl lg:text-2xl
            tracking-widest mb-20
            justify-center items-center WelcomePage-SectionTitle"
              >
                Search for artists
              </h3>
              <span className="text-customBlue-300 text-sm lg:text-xl mb-8">
                We automatically add the 5 most famous songs from each artist you've selected. Keep
                in mind that you can't create a playlist with more than 100 songs right now.
              </span>
              <span className="text-customBlue-300 text-sm lg:text-xl mb-32">
                {`Artists in yout playlist: ${artistsInPlaylist}`}
              </span>
              <input
                className="
              border-0 
              text-center
              text-2xl lg:text-4xl
              text-customBlue-300
              w-full
              CreatePage-SectionTitle"
                placeholder="> search for artists here, such as: Milburn, Bjorg, Eminem ..."
                onChange={this.onChangeSearchArtists}
                value={this.state.artistKeyword}
              ></input>
              <div className="flex flex-row mt-12">
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
              {!!selectedArtists && selectedArtists.length > 0 && (
                <button
                  class="
                    bg-customBlue-500 hover:bg-customBlue-700 
                    text-blue-100 font-semibold 
                    py-1 px-4 
                    mt-8 mb-12
                    border border-solid border-transparent 
                    rounded-xl 
                    flex flex-row items-center justify-center"
                  onClick={() => handleClickReviewSectionRef(reviewSectionRef)}
                >
                  <FaEye />
                  <span className="ml-2 text-sm">Review your playlist</span>
                </button>
              )}
            </div>
          </>
        )}

        {isPreviewVisible && (
          <>
            <div className="mt-16 mb-16 flex flex-col items-center w-full" ref={reviewSectionRef}>
              <h3
                className="
            font-bold text-blue-100 mb-1 
            text-xl lg:text-2xl
            tracking-widest mb-20
            justify-center items-center WelcomePage-SectionTitle"
              >
                Review and create your playlist
              </h3>
              <div className="flex flex-row text-customBlue-300 items-center mb-8">
                <PlaylistStatItem icon={<FaMusic />} value={countTracks} text="Tracks" />
                <PlaylistStatItem icon={<FaClock />} value={playlistDuration} text="Duration" />
                <PlaylistStatItem icon={<FaFire />} value={playlistPopularity} text="Popularity" />
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

              <button
                class="
              bg-customBlue-500 hover:bg-customBlue-700 
              text-blue-100 font-semibold 
              py-1 px-4 
              mt-40 mb-24
              border border-solid border-transparent 
              rounded-xl 
              flex flex-row items-center justify-center"
                onClick={this.onClickCreatePlaylist}
              >
                <FaCheck />
                <span className="ml-2 text-sm">Create playlist</span>
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetSearchArtists: () => dispatch(resetSearchArtistsRequest()),
    getArtistTopTracks: (artist, accessToken) =>
      dispatch(getArtistTopTracksRequest(artist, accessToken)),
    removeTracks: (tracksUris, accessToken) =>
      dispatch(removeTracksRequest(tracksUris, accessToken)),
    searchArtists: (keyword, accessToken) => dispatch(searchArtistsRequest(keyword, accessToken)),
    createPlaylist: (userId, tracks, playlistName, accessToken) =>
      dispatch(createPlaylistRequest(userId, tracks, playlistName, accessToken))
  };
};

const mapStateToProps = state => {
  const { createPlaylistReducer, playlistReducer } = state;

  const isSearchingArtists = createPlaylistReducer
    ? createPlaylistReducer.isSearchingArtists
    : false;
  const searchedArtists = createPlaylistReducer ? createPlaylistReducer.searchedArtists : null;
  const isFetchingTracks = createPlaylistReducer ? createPlaylistReducer.isFetchingTracks : false;
  const selectedArtists = createPlaylistReducer ? createPlaylistReducer.selectedArtists : null;

  const createdPlaylist = playlistReducer ? playlistReducer.playlist : null;
  const isCreatingPlaylist = playlistReducer ? playlistReducer.isCreating : false;

  return {
    isSearchingArtists,
    searchedArtists,
    isFetchingTracks,
    selectedArtists,
    createdPlaylist,
    isCreatingPlaylist
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CreatePlaylistPage));
