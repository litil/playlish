import React, { FunctionComponent } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import './styles.css';

interface IPlaylistItemProps {
  playlist: IPlaylist;
  last?: boolean;
}
type props = IPlaylistItemProps & RouteComponentProps;

const PlaylistItemComponent: FunctionComponent<props> = ({ playlist, last, history }) => {
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
  //     "uri": "spotify:user:P11178545817"
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

  const redirectToPlaylistDetail = () => {
    if (playlist && playlist.id) {
      // redirect to the playlist detail
      history.push(`/playlists/${playlist.id}`);
    }
  };

  const className = last ? 'PlaylistItem-container-last' : 'PlaylistItem-container';

  if (!playlist) return <></>;

  const playlistImg =
    playlist.images && playlist.images.length > 0 ? (
      <img className="PlaylistItem-img" src={playlist.images[0].url} alt={playlist.name} />
    ) : (
      ''
    );

  const byPlaylistSubstring = playlist.name.indexOf(' - by Playlish');
  const playlistName =
    byPlaylistSubstring !== -1 ? playlist.name.substring(0, byPlaylistSubstring) : playlist.name;

  return (
    <div className={className} onClick={redirectToPlaylistDetail}>
      {playlistImg}
      <div className="flex flex-col items-start justify-start mt-2">
        <h3 className="text-blue-100">{playlistName}</h3>
        <p className="text-customBlue-300">{`${playlist.tracks.total} tracks`}</p>
      </div>
    </div>
  );
};

export const PlaylistItem = withRouter(PlaylistItemComponent);
