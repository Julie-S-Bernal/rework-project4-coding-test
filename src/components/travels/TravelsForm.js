import React from 'react';
import currencyList from '../../lib/currencyList';
import {TextField} from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { DatePicker } from 'material-ui-pickers';
import {ArrowBack, ArrowForward}  from 'material-ui-icons';


const TravelsFormTrip = ({
  handleChange,
  handleSubmit,
  handleStartDateChange,
  handleEndDateChange,
  travel
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <TextField
          type="text"
          label="Budget"
          name="budget"
          placeholder="budget"
          onChange={handleChange}
          value={travel.budget}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <DatePicker
          onChange={handleStartDateChange}
          value={travel.startTravelDate}
          returnMoment
          leftArrowIcon={<ArrowBack />}
          rightArrowIcon={<ArrowForward />}
        />
      </div>
      <div className="form-group">
        <DatePicker
          value={travel.endTravelDate}
          onChange={handleEndDateChange}
          returnMoment
          leftArrowIcon={<ArrowBack />}
          rightArrowIcon={<ArrowForward />}
        />
      </div>
      <div className="form-group">
        <TextField
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
          value={travel.country}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <FormControl>
          <InputLabel htmlFor="currency-code-native">Currency</InputLabel>
          <Select
            native
            value={travel.currency}
            onChange={handleChange}
            input={<Input name="currency" id="currency-code-native" />}
          >
            { currencyList.map(cur => <option  key={cur.code} value={cur.code}>{cur.name}</option>) }
          </Select>
        </FormControl>
      </div>
      <div className="form-group">
        <TextField
          label="Hotel Cost"
          name="hotelCost"
          placeholder="Hotel cost"
          onChange={handleChange}
          value={travel.hotelCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          label="Food Cost"
          name="foodCost"
          placeholder="Food cost"
          onChange={handleChange}
          value={travel.foodCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          label="Extra Cost"
          name="extra"
          placeholder="Other expenses"
          onChange={handleChange}
          value={travel.extra}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          label="Travel Cost"
          name="travelCost"
          placeholder="Travel cost"
          onChange={handleChange}
          value={travel.travelCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          label="Transportation Cost"
          name="transportation"
          placeholder="transportation"
          onChange={handleChange}
          value={travel.transportation}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          type="createdBy"
          name="createdBy"
          placeholder=""
          onChange={handleChange}
          value={travel.createdBy}
          className="form-control"
        />
      </div>

      <Button type="submit" className="btn btn-primary">Submit</Button>
    </form>
  );
};

export default TravelsFormTrip;
