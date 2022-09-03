import { FC } from 'react';
import { AlbumType } from '../../../utils/types';

import { AlbumCardWrapper, AlbumImage, AlbumName } from './AlbumCard.styled';

interface AlbumCardProps {
  album: AlbumType;
}

const AlbumCard: FC<AlbumCardProps> = ({ album }) => {
  const { name, image, mbid } = album;

  return (
    <AlbumCardWrapper to={`/album/${mbid}`}>
      <AlbumImage src={image[3]['#text']} alt={name} />
      <AlbumName>{name}</AlbumName>
    </AlbumCardWrapper>
  );
};

export default AlbumCard;
