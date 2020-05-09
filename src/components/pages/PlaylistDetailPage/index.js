import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FaClock, FaFire, FaMusic, FaUser } from 'react-icons/fa';
import { connect } from 'react-redux';
import { fetchPlaylistDetailRequest } from '../../../actions/fetchPlaylistDetailAction';
import { PlaylistStatItem } from '../../molecules/';
import { PlaylistDetail, StatsContainer } from '../../organisms/';

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

  calculatePlaylistDuration = playlistTracks => {
    const playlistDurationArray = playlistTracks.map(item => item.track.duration_ms);
    const duration = playlistDurationArray.reduce((sum, x) => sum + x);
    return this.msToTime(duration);
  };

  calculatePlaylistPopularity = playlistTracks => {
    const playlistPopularityArray = playlistTracks.map(item => item.track.popularity);
    return Math.round(playlistPopularityArray.reduce((sum, x) => sum + x) / playlistTracks.length);
  };

  render() {
    const { playlistsDetail, playlistsTracks } = this.props;
    const playlistId = this.props.match.params.id;
    if (!playlistsDetail || !playlistId || !playlistsDetail[playlistId])
      return 'Playlist not found, sorry :(';

    const playlist = playlistsDetail[playlistId];
    const playlistTracks = playlistsTracks[playlistId];
    const playlistDuration = this.calculatePlaylistDuration(playlistTracks);
    const playlistPopularity = this.calculatePlaylistPopularity(playlistTracks);

    return (
      <div className="flex flex-col items-center">
        <div className="mt-16 mb-16 flex flex-col items-center w-full">
          <StatsContainer>
            <PlaylistStatItem icon={<FaUser />} value={playlist.followers.total} text="Followers" />
            <PlaylistStatItem icon={<FaMusic />} value={playlist.tracks.total} text="Tracks" />
            <PlaylistStatItem icon={<FaClock />} value={playlistDuration} text="Duration" />
            <PlaylistStatItem icon={<FaFire />} value={playlistPopularity} text="Popularity" />
          </StatsContainer>

          <PlaylistDetail playlist={playlist} playlistTracks={playlistTracks} />
        </div>
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
  const { playlistReducer, playlistTracksReducer } = state;

  const isFetchingPlaylistDetail = playlistReducer
    ? playlistReducer.isFetchingPlaylistDetail
    : false;
  const playlistsDetail = playlistReducer ? playlistReducer.playlistsDetail : {};
  const isFetchingTracks = playlistTracksReducer ? playlistTracksReducer.isFetchingTracks : false;
  const playlistsTracks = playlistTracksReducer ? playlistTracksReducer.playlistsTracks : {};

  return {
    isFetchingPlaylistDetail,
    playlistsDetail,
    isFetchingTracks,
    playlistsTracks
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDetailPage);
