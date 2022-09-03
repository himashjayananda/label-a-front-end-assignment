export type AlbumType = {
  name: string;
  mbid: string;
  artist: {
    name: string;
    mbid: string;
  };
  image: {
    size: string;
    '#text': string;
  }[];
};

export type AlbumInfoType = {
  name: string;
  tracks: { track: { name: string }[] | { name: string } };
  wiki: {
    published: string;
    summary: string;
  };
};
