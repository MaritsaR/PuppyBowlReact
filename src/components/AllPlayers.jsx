import { fetchAllPlayers } from "../API/index.js";
import React, { useEffect, useState } from "react";
import PlayerCards from "./PlayerCards.jsx";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    async function loadPlayers() {
      try {
        const results = await fetchAllPlayers();
        setPlayerData(results);
        setPlayers(results.data.players);
        return results;
      } catch (err) {}

      //use await to call fetchAllPlayers async store in a variable
      // use a try catch
    }
    // call set players here
    loadPlayers();
  }, []);

  function handleSearch(e) {
    const searchResults = playerData.filter((player) =>
      player.name.toLowerCase().includes(e.target.value.toLowerCase)
    );
    setPlayers(searchResults);
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Search Player</h2>
        <input
          style={{ width: "35%", margin: "0 auto" }}
          type="text"
          onChange={handleSearch}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "2%",
          marginTop: "10px",
        }}
      >
        {players.map((player) => (
          <PlayerCards key={player.id} player={player} />
        ))}
      </div>
    </>
  );
}
