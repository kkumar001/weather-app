import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Details, Summary } from "./Pages" 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/weather/:city" element={<Details />} />
        {/* <Route exact path="/statewisesummary" element={<Summary />} /> */}
      </Routes>
    </Router>
  )
}

export default App
