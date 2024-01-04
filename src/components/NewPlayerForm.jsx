import React, { useState } from "react";
import "./NewPlayerForm.css";
import { createPlayer } from "../API/index";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const navigate = useNavigate();
  const [playerName, setPlayerName] = useState("");
  const [breed, setBreed] = useState("");
  const [playerStatus, setPlayerStatus] = useState("bench");
  const [imageUrl, setImageUrl] = useState(
    "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png"
  );
  //e is to prevent it from refreshing
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const player = await createPlayer({
        name: playerName,
        breed,
        status: playerStatus,
        imageUrl,
      });
      if (player.success) {
        alert("Puppy successfully added!");
        navigate("/");
      } else {
        alert("Something went wrong with adding the pup. Please try again!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Add a New Player!</h1>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>
          Name:
          <input type="text" onChange={(e) => setPlayerName(e.target.value)} />
        </label>
        <label>
          Breed:
          <input type="text" onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Image Url:
          <input type="text" onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Status:
          <select onChange={(e) => setPlayerStatus(e.target.value)}>
            <option value="field">Field</option>
            <option selected value="bench">
              Bench
            </option>
          </select>
        </label>
        <button style={{ width: "25%", margin: "0 auto" }}>Add Player!</button>
      </form>
    </div>
  );
}
