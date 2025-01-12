import Home from "./Home.jsx"
import Page2 from "./Pages/Page2.jsx"
import Header from "./Pages/Header.jsx"
import { Route, Routes } from "react-router-dom"

function App() {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Page2 />} />
                </Routes>
            </div>

        </>
    )
}

export default App