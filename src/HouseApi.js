const HOUSES_URL = "https://6607289cbe53febb857f3f16.mockapi.io/house";
//taking the api url and making it a global varible to be used in other places

class HouseApi {
  get = async () => {
    try {
      const resp = await fetch(HOUSES_URL);
      const data = await resp.json();
      return data;
    } catch (e) {
      console.log("Broken Issue need help", e);
    }
  };

  put = async (house) => {
    try {
      const resp = await fetch(`${HOUSES_URL}/${house.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(house),
      });
      return await resp.json();
    } catch (e) {
      console.log("Houses did not UPDATE", e);
    }
  };
}
//made a new H

export const houseApi = new HouseApi();
