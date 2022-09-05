import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AlbumWrapper,
  BackToAlbums,
  PublishedDateText,
} from './AlbumDetails.styled';
import Track from '../../components/albumDetails/Track';
import { getAlbumDetails } from '../../behavior/album/album.api';
import { AppDispatch, RootState } from '../../behavior/store';
import { resetAlbum } from '../../behavior/album/albumSlice';

interface AlbumDetailsProps {}

const AlbumDetails: FC<AlbumDetailsProps> = () => {
  let { artistId, albumId } = useParams<{
    artistId: string;
    albumId: string;
  }>();
  const dispatch = useDispatch<AppDispatch>();
  const { album, loading, error } = useSelector(
    (state: RootState) => state.album,
  );

  useEffect(() => {
    // requests for album details
    if (albumId) {
      dispatch(getAlbumDetails(albumId));
    }
  }, [albumId, dispatch]);

  useEffect(() => {
    // clear album data in state when unmounting
    return () => {
      dispatch(resetAlbum());
    };
  }, [dispatch]);

  // show error if server error occur
  if (loading && error) return <h5>{error}</h5>;

  // if array, loop over data and render Track component
  // else render only one Track component
  const renderTracks = () => {
    if (Array.isArray(album.tracks.track))
      return album.tracks.track.map((track, index) => (
        <Track track={track} trackNo={index + 1} key={track.name} />
      ));
    else return <Track track={album.tracks.track} trackNo={1} />;
  };

  return (
    <AlbumWrapper>
      {!loading ? (
        <>
          <h2>{album.name}</h2>
          <PublishedDateText>
            {album.wiki && album.wiki.published}
          </PublishedDateText>
          {renderTracks()}
          <BackToAlbums to={`../../artist/${artistId}`}>
            Back to Albums
          </BackToAlbums>
        </>
      ) : (
        <h2>Loading album...</h2>
      )}
    </AlbumWrapper>
  );
};

export default AlbumDetails;
