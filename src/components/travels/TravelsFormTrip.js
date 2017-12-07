import React from 'react';

const TravelsFormTrip = ({ handleChange, handleSubmit, travel }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="budget"
          placeholder="budget"
          onChange={handleChange}
          value={travel.budget}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="startTravelDate"
          placeholder="start date"
          onChange={handleChange}
          value={travel.startTravelDate}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="endTravelDate"
          placeholder="end date"
          onChange={handleChange}
          value={travel.endTravelDate}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="Country"
          placeholder="Country"
          onChange={handleChange}
          value={travel.country}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="name"
          name="hotelCost"
          placeholder="Hotel cost"
          onChange={handleChange}
          value={travel.hotelCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="hotelCost"
          name="hotelCost"
          placeholder="Hotel cost"
          onChange={handleChange}
          value={travel.hotelCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="foodCost"
          name="foodCost"
          placeholder="Food cost"
          onChange={handleChange}
          value={travel.foodCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="foodCost"
          name="foodCost"
          placeholder="Food cost"
          onChange={handleChange}
          value={travel.foodCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="foodCost"
          name="foodCost"
          placeholder="Food cost"
          onChange={handleChange}
          value={travel.foodCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="foodCost"
          name="foodCost"
          placeholder="Food cost"
          onChange={handleChange}
          value={travel.foodCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="foodCost"
          name="foodCost"
          placeholder="Food cost"
          onChange={handleChange}
          value={travel.foodCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="foodCost"
          name="foodCost"
          placeholder="Food cost"
          onChange={handleChange}
          value={travel.foodCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="extra"
          name="extra"
          placeholder="extra"
          onChange={handleChange}
          value={travel.extra}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="travelCost"
          name="travelCost"
          placeholder="travelCost"
          onChange={handleChange}
          value={travel.travelCost}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <input
          type="transportation"
          name="transporation"
          placeholder="transportation"
          onChange={handleChange}
          value={travel.transporation}
          className="form-control"
        />
      </div>


      <button className="btn btn-primary">Current travel</button>
    </form>
  );
};

export default TravelsFormTrip;
