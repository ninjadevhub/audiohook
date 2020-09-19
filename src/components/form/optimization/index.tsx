import 'date-fns';
import React from 'react';
import './style.scss';

import CustomDatePicker from '../../date-picker';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import AddIcon from '@material-ui/icons/Add';
const OptimizationForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(
    new Date('2014-08-18T21:11:54')
  );
  const [checkAuto, setCheckState] = React.useState(true);
  const onCheckStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckState(event.target.checked);
  };
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  return (
    <div className="opt-wrapper">
      <div className="title">Basic Information & KPI Optimizations</div>
      <div className="form">
        <div className="form-wrapper">
          <div className="item">
            <div className="custom-input-wrapper">
              <div className="label">Сampaign Name</div>
              <TextField
                label=""
                className="custom-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">Kg</InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className="item">
            <CustomDatePicker
              label="Start Date"
              required={true}
              placeholder="From"
            />
            <CustomDatePicker
              label="End Date"
              required={false}
              placeholder="From"
            />
          </div>

          <div className="item">
            <div className="custom-input-wrapper two-column">
              <div className="label">Budget</div>
              <TextField
                label=""
                className="custom-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="custom-input-wrapper two-column">
              <div className="label">Daily Budget</div>
              <TextField
                label=""
                className="custom-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className="item">
            <div className="custom-input-wrapper two-column">
              <div className="label">Max CPM, $</div>
              <TextField
                label=""
                className="custom-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="custom-input-wrapper two-column checkbox-wrapper">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkAuto}
                    onChange={onCheckStateChange}
                    name="checkedA"
                  />
                }
                label="Auto Optimized CPM"
              />
            </div>
          </div>
          <div className="info-label">
            Set a max CPM or select "Auto Optimized CPM"
          </div>

          <div className="item">
            <div className="custom-input-wrapper two-column">
              <div className="label">KPI</div>
              <TextField
                label=""
                className="custom-input"
                value={'REACH'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="custom-input-wrapper two-column">
              <div className="label">Value</div>
              <TextField
                label=""
                className="custom-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">%</InputAdornment>
                  ),
                }}
              />
            </div>
          </div>

          <div className="item">
            <div className="custom-input-wrapper two-column">
              <div className="label">Freq Cap</div>
              <TextField
                label=""
                className="custom-input"
                value={'REACH'}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
            </div>
            <div className="custom-input-wrapper two-column">
              <div className="label">Freq Cap</div>
              <TextField
                label=""
                value={'Week'}
                className="custom-input"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end"></InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className="add">
            <AddIcon className="add-icon" />
            Add another freq cap
          </div>
        </div>
      </div>
    </div>
  );
};
export default OptimizationForm;
