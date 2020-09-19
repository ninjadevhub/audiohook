import React from 'react';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import IconButton from '@material-ui/core/IconButton';
import './style.scss';
const DateRangePicker: React.FC = () => {
  return (
    <div className="date-picker-wrapper">
      <IconButton aria-label="date-range">
        <DateRangeIcon className="date-icon" />
      </IconButton>
      <input type="text" readOnly={true} value="17 Aug, 2019 - 22 Au" />
      <ArrowDropDownIcon className="down-icon" />
    </div>
  );
};

export default DateRangePicker;
