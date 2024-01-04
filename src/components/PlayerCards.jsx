import { useNavigate } from "react-router-dom";
import "./PlayerCard.css";
import React from "react";

export default function PlayerCards({ player, component }) {
  const { name, breed, imageUrl, id, team } = player;
  const navigate = useNavigate();
  return (
    <div className="player-card-container">
      <h2>{name}</h2>
      <h3>{breed}</h3>
      {team && <h3>{team?.name}</h3>}
      <img src={imageUrl} alt="A dog named ${name}" width="200"></img>
      {component !== "detail" && (
        <button onClick={() => navigate(`/players/${id}`)}>See Details</button>
      )}
    </div>
  );
}

// component allows for the button to disappear once details button has been click. add to single player as well.
