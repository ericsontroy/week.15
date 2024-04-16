import React from "react";
import { House } from "./House";
import { houseApi } from "../HouseApi.js";

//this is my main rendering info, in it I have some basic ways of acquiring the houseApi varible, then showing how we are going to implament changes with the DOM

export class HousesSheet extends React.Component {
  state = {
    houses: [],
  };
  // settig some state for the houses array to load into

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = async () => {
    const houses = await houseApi.get();
    this.setState({ houses });
    console.log(houses);
  };

  updateHouse = async (updateHouse) => {
    await houseApi.put(updateHouse);
    this.fetchHouses();
  };

  //Returning a House component and the info associated with it on the mock api.

  render() {
    return (
      <div>
        {this.state.houses.map((house) => (
          <House
            house={house}
            key={house.id}
            updateHouse={this.updateHouse}
            fetchHouses={this.fetchHouses}
          />
        ))}
      </div>
    );
  }
}
