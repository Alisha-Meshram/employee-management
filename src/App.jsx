import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Overview from "./components/Overview";
import PeopleDiscovery from "./components/PeopleDiscovery";
import Create from "./components/Create";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/update/:id" element={<Edit />} />
          <Route path="/add" element={<Create />} />
          <Route path="/home" element={<Home />}>

            <Route path="overview" element={<Overview />} />
            <Route path="peopleDiscover" element={<PeopleDiscovery />} />
          </Route>
        </Routes>
      </>

    </BrowserRouter>
  );
}

export default App;
