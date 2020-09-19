import React from 'react';
import './style.scss';
import DateRangeIcon from '@material-ui/icons/DateRange';
import { styled } from '@material-ui/core/styles';
import { ICustomDatePickerProps } from '../../models';
import IconButton from '@material-ui/core/IconButton';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  DatePicker,
} from '@material-ui/pickers';
const InputContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
const CustomDatePicker: React.FC<ICustomDatePickerProps> = ({
  required,
  label,
  placeholder,
  props,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div className="custom-date-picker-wrapper">
      <div className="label-wrapper">
        <div className="label">{label}</div>
        {require && <div className="optional">optional</div>}
      </div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          className="custom-date-picker"
          InputAdornmentProps={{ position: 'start' }}
          disableToolbar
          variant="inline"
          format="MM MMM, yyyy"
          margin="normal"
          id="date-picker-inline"
          label=""
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
          keyboardIcon={<DateRangeIcon />}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default CustomDatePicker;
