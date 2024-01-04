import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPlayerId, deletePlayer } from "../API";
import PlayerCards from "./PlayerCards";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const [player, setPlayer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchSinglePlayer() {
      try {
        const player = await getPlayerId(id);
        console.log(player);
        if (player.data === null) {
          navigate("/");
        }
        setPlayer(player.data.player);
      } catch (err) {
        console.log(err);
      }
    }
    fetchSinglePlayer();
  }, [navigate]);

  async function handleDelete() {
    try {
      const result = await deletePlayer(id);
      if (result.success) {
        alert("Puppy succesfully removed from roster!");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PlayerCards player={player} component={"detail"} />
      <button onClick={handleDelete}>Remove Player</button>
    </div>
  );
}
