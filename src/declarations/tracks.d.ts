interface ITrack {
  id: string | number;
  name: string;
  track: IInnerTrack;
  added_at: Date | string;
}

interface IInnerTrack {
  album: IAlbum;
  artists: IArtist[];
  name: string;
  popularity: number | string;
}

interface IAlbum {
  name: string;
}
