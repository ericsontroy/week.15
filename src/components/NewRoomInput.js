import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const NewRoomInput = (props) => {
  const [name, setName] = useState([]);
  const [sqft, setSqft] = useState([]);

  const handleSqftInput = (e) => {
    const int = parseInt(e.target.value);
    setSqft(int >= 0 ? int : "");
  };

  //making the sqft input up here to read where all the info is being passed in and then going to use the varible downn in the onChange with the form input

  const onSubmit = (e) => {
    e.preventDefault();
    if (name && sqft) {
      const id = uuidv4();
      props.addRoom({ id, name, sqft });
      setName("");
      setSqft("");

      alert("Thank You for adding a Room! ⭐️");
    } else {
      alert("🚨 You need to fill out all the info 🤦‍♂️⤵️ ");
      console.log("Not cool");
    }
  };

  return (
    <div className="form-control">
      <h3>Add New Room</h3>
      <form>
        <input
          type="text"
          placeholder="Room Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>

        <input
          type="text"
          placeholder="Sqft"
          value={sqft}
          onChange={handleSqftInput} //easier to add the logic up above
        />
        <br></br>

        <button type="submit" onClick={onSubmit}>
          Add Room
        </button>
      </form>
    </div>
  );
};

/* every time the text changes the Name value will change */
