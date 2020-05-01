interface IPlaylist {
  id: string;
  name: string;
  images: IImage[];
  tracks: IPlaylistTracks;
}

interface IPlaylistTracks {
  total: number;
  tracks: ITrack[];
}
