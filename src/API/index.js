const cohortName = "2308-FTB-ET-WEB-PT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${APIURL}/players`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error fetching all players", err);
  }
};

export const getPlayerId = async (id) => {
  try {
    const response = await fetch(`${APIURL}/players/${id}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export const createPlayer = async (playerData) => {
  try {
    const response = await fetch(`${APIURL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerData),
    });
    const json = await response.json();
    return json;
  } catch (err) {
    throw err;
  }
};

export const deletePlayer = async (id) => {
  try {
    const response = await fetch(`${APIURL}/players/${id}`, {
      method: "DELETE",
    });
    const json = await response.json();
    return json;
  } catch (err) {
    throw err;
  }
};
