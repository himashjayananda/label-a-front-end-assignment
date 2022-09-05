import { FC } from 'react';
import { ArtistType } from '../../utils/types';
import { ArtistCardWrapper, ArtistName } from './ArtistCard.styled';

interface ArtistCardProps {
  artist: ArtistType;
}

const ArtistCard: FC<ArtistCardProps> = ({ artist }) => {
  const { name, mbid } = artist;

  return (
    <ArtistCardWrapper to={`/artist/${mbid}`}>
      <ArtistName>{name}</ArtistName>
    </ArtistCardWrapper>
  );
};

export default ArtistCard;
