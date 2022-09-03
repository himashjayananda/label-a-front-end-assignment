import { FC } from 'react';
import { TrackWrapper } from './Track.styled';

interface TrackProps {
  track: {
    name: string;
  };
  trackNo: number;
}

const Track: FC<TrackProps> = ({ track, trackNo }) => {
  return <TrackWrapper>{`${trackNo}. ${track.name}`}</TrackWrapper>;
};

export default Track;
