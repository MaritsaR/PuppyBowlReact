import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerCards from "./components/PlayerCards";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <>
      <div id="container">
        <h1>Puppy Bowl</h1>
      </div>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
          <Route path="/addNew" element={<NewPlayerForm />} />
          {/* <Route path="*" element={<AllPlayers />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
