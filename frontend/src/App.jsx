import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
const App = () => {
  return (
    <div className="harry">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
<Route path="/create" element={<CreatePage></CreatePage>}></Route>
      </Routes>
      </div>
  );
}

export default App
