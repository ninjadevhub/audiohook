import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './style.scss';
import { useViewport } from '../../hooks';
const Search: React.FC = () => {
  return (
    <div className="search-wrapper">
      <SearchIcon className="search-icon" />
      <input placeholder="Search my campaigns" />
    </div>
  );
};
export default Search;
