import Home from "./Home.jsx"
import Page2 from "./Pages/Page2.jsx"
import Header from "./Pages/Header.jsx"
import { Route, Routes } from "react-router-dom"
import SignUp from './Pages/SignUp.jsx'
import Query from './Pages/Query.jsx'
import LogIn from './Pages/LogIn.jsx'
import { img } from "framer-motion/client"
import AddCard from "./Pages/AddCard.jsx"

function App() {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Page2 />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/query" element={<Query />}/>
                    <Route path="/login" element={<LogIn />}/>
                    <Route path="/dashboard/add" element={<AddCard/>}/>
                </Routes>
            </div>

        </>
    )
}

export default App