import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { Dashboard } from "./components/Dashboard";
// import { Landing } from "./components/Landing";
const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {

    return (
        <div>
            {/* we can't use navigate() outside browserRouter */}
            {/* <div style={{background: "black", color: "white"}}>
                    Hi this is the topbar remains constant
                    <br />
                    <button onClick={() => {
                        // window.location.href="/"  we don't do this cozing refreshing page
                        navigate("/")
                    }}>Landing Page</button>
                    <button onClick={() => {
                        // window.location.href="/dashboard"
                        navigate("/dashboard")
                    }}>Dashboard Page</button>
            </div> */}

            <BrowserRouter>
                <Appbar />  { /* this part remains same accross all routers */}
                <Routes>
                    <Route path="/" element={<Suspense fallback={"loading..."}> <Landing/> </Suspense>}> </Route>
                    <Route path="/dashboard" element={<Suspense fallback={"loading..."}> <Dashboard/> </Suspense>}> </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
   
}

function Appbar() {
    const navigate = useNavigate();

    return <div>
        <div>
            <button onClick={() => {
                // window.location.href="/"  we don't do this cozing refreshing page
                navigate("/")
            }}>Landing Page</button>
            <button onClick={() => {
                // window.location.href="/dashboard"
                navigate("/dashboard")
            }}>Dashboard Page</button>
        </div>
    </div>
}

export default App
