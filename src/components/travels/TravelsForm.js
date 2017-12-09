import React from 'react';
import currencyList from '../../lib/currencyList';
import {TextField} from 'material-ui';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import Button from 'material-ui/Button';
import { DatePicker } from 'material-ui-pickers';
import {ArrowBack, ArrowForward}  from 'material-ui-icons';

const TravelsFormTrip = ({ handleChange, handleSubmit, travel }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <TextField
          label="text"
          name="budget"
          placeholder="budget"
          onChange={handleChange}
          value={travel.budget}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <DatePicker
          value={travel.startTravelDate}
          onChange={handleChange}
          leftArrowIcon={<ArrowBack />}
          rightArrowIcon={<ArrowForward />}
        />
      </div>
      <div className="form-group">
        <DatePicker
          value={travel.endTravelDate}
          onChange={handleChange}
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
            value={travel.currency.code}
            onChange={handleChange}
            input={<Input name="currency" id="currency-code-native" />}
          >
            { currencyList.map(currency => <option  key={currency.code} value={currency.code}>{currency.name}</option>) }
          </Select>
        </FormControl>
      </div>
      <div className="form-group">
        <TextField
          type="name"
          name="hotelCost"
          placeholder="Hotel cost"
          onChange={handleChange}
          value={travel.hotelCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          type="foodCost"
          name="foodCost"
          placeholder="Food cost"
          onChange={handleChange}
          value={travel.foodCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          type="extra"
          name="extra"
          placeholder="Other expenses"
          onChange={handleChange}
          value={travel.extra}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          type="travelCost"
          name="travelCost"
          placeholder="Travel cost"
          onChange={handleChange}
          value={travel.travelCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <TextField
          type="transportation"
          name="transporation"
          placeholder="transportation"
          onChange={handleChange}
          value={travel.transporation}
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
