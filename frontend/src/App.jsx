import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Baby from"./components/Baby"
const App = () => {
  return (
    <div className="harry">
      <Baby></Baby>
      <br></br>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
<Route path="/create" element={<CreatePage></CreatePage>}></Route>
      </Routes>
      </div>
  );
}

export default App
