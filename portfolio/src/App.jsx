import { Routes, Route } from "react-router-dom"

import StageSelect from "./components/StageSelect.jsx"

const App = () => {
  return(
    <>
    <StageSelect/>

    <Routes>
        <Route path="/" element />
    </Routes>
    </>
  )
}

export default App
