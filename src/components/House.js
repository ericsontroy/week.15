import React from "react";
import { NewRoomInput } from "./NewRoomInput";

export const House = (props) => {
  const { house, updateHouse, fetchHouses } = props;

  const deleteRoomInput = (roomId) => {
    const updatedHouse = {
      ...house,
      rooms: house.rooms.filter((x) => x.id !== roomId),
    };
    updateHouse(updatedHouse);
  };
  //spread the house that the house represents

  const addRoom = (room, index) => {
    updateHouse({ ...house, rooms: [...house.rooms, room] });
    fetchHouses();
  };
  //taking old array and creating a new array and adding the updated added room to the array.

  const rooms = () => (
    <ul>
      {house.rooms.map((room, index) => (
        <li key={index}>
          <label>{`${room.name} -SqFt: ${room.sqft}`}</label>
          <button onClick={(e) => deleteRoomInput(room.id)}>Remove Room</button>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h2>{house.name}</h2>
      {rooms({ rooms, houseId: house.id, deleteRoomInput })}
      <NewRoomInput addRoom={addRoom} />
    </div>
  );
};
