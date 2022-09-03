import { FC, ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { CustomSelect, CustomSelectWrapper } from './AlbumSortbySelect.styled';
import { AppDispatch } from '../../../behavior/store';

interface AlbumSortbySelectProps {
  sortByOption: string;
  setSortByOption: Dispatch<SetStateAction<string>>;
}

const AlbumSortbySelect: FC<AlbumSortbySelectProps> = ({
  sortByOption,
  setSortByOption,
}) => {
  return (
    <CustomSelectWrapper>
      <div>Sort by:</div>
      <CustomSelect
        value={sortByOption}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          setSortByOption(e.target.value);
        }}
      >
        <option value='asc'>Name - Ascending</option>
        <option value='desc'>Name - Descending</option>
      </CustomSelect>
    </CustomSelectWrapper>
  );
};

export default AlbumSortbySelect;
