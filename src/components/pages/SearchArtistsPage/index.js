import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as qs from 'query-string';

import { addArtistRequest } from '../../../actions/addArtistAction';
import { removeArtistRequest } from '../../../actions/removeArtistAction';
import { fetchUserRequest } from '../../../actions/fetchUserAction';

import ArtistList from '../../organisms/ArtistList';
import Title from '../../elements/Title';
import PageDescription from '../../elements/PageDescription';
import Button from '../../elements/Button';
import Input from '../../elements/Input';

import './styles.css';

class SearchArtistsPage extends Component {
  static propTypes = {
    /** Spotify artists */
    artists: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    /** Function performing an API call to add an artist to the playlist */
    addArtist: PropTypes.func.isRequired,
    /** The Spotify connected user */
    connectedUser: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      accessToken: ''
    };
  }

  componentDidMount() {
    const parsed = qs.parse(this.props.location.hash, {
      ignoreQueryPrefix: true
    });
    const accessToken = parsed.access_token;

    this.setState({ accessToken: accessToken });
    this.props.fetchUser(accessToken);
  }

  redirectToHome = () => {
    // redirect to the homepage
    this.props.history.push({
      pathname: '/'
    });
  };

  onChangeArtist = e => {
    this.setState({ artist: e.target.value });
  };

  onClickAddArtist = () => {
    const { artist, accessToken } = this.state;
    this.props.addArtist(artist, accessToken);
    this.setState({ artist: '' });
  };

  onClickGeneratePlaylist = () => {
    // redirect to the playlist creation page
    this.props.history.push({
      pathname: '/create',
      state: { accessToken: this.state.accessToken }
    });
  };

  onDeleteArtist = artist => {
    const { accessToken } = this.state;
    console.log('onDeleteArtist', artist);
    this.props.removeArtist(artist, accessToken);
  };

  render() {
    const { artists, isSearchingArtist } = this.props;
    const tracksCount = artists ? artists.length * 5 : 0;
    const maxTracks = 100;

    return (
      <div className="SearchArtistsPage-container">
        <div className="SearchArtistsPage-innerContainer">
          <div className="SearchArtistsPage-right">
            <Title text="Search for artists" />
            <PageDescription>
              <p>
                Playlish lets you create Spotify playlists and fills them with
                the top 5 tracks of any artist you want.
              </p>
              <p>
                First, search for artists to be added into your playlist. Note
                that you won't be able to add more than 100 tracks into a
                playlist.
              </p>
            </PageDescription>

            <div className="SearchArtistsPage-search">
              <Input
                value={this.state.artist}
                onChangeFn={this.onChangeArtist}
                placeholder="Search for artists"
              />
              <Button
                text="Add"
                onClickFn={this.onClickAddArtist}
                styles={{ marginLeft: '32px' }}
              />
            </div>

            <ArtistList artists={artists} deleteFn={this.onDeleteArtist} />

            {isSearchingArtist ? 'Searching for artists...' : ''}

            {tracksCount >= maxTracks && (
              <div className="SearchArtistsPage-submitContainer">
                <span>
                  You cannot create a playlist with more than 100 songs
                </span>
              </div>
            )}
            {tracksCount > 0 && tracksCount < maxTracks && (
              <div className="SearchArtistsPage-submitContainer">
                <Button
                  text="Ready to generate the playlist?"
                  onClickFn={this.onClickGeneratePlaylist}
                  size="big"
                  styles={{ marginBottom: '96px', marginTop: '32px' }}
                />
              </div>
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
    addArtist: (artist, accessToken) =>
      dispatch(addArtistRequest(artist, accessToken)),
    removeArtist: (artist, accessToken) =>
      dispatch(removeArtistRequest(artist, accessToken))
  };
};

const mapStateToProps = state => {
  const { artistReducer, userReducer } = state;

  const artists = artistReducer ? artistReducer.selectedArtists : {};
  const isSearchingArtist = artistReducer ? artistReducer.isWorking : false;

  const connectedUser = userReducer ? userReducer.user : {};
  const isFetchingUser = userReducer ? userReducer.isFetchingUser : false;

  return { artists, connectedUser, isSearchingArtist, isFetchingUser };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchArtistsPage);
