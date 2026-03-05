import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { JavaTutorial } from "./java-tutorial";
import { JavaScriptTutorial } from "./javascript-tutorial";


export function TutorialIndex() {
    return(
       <BrowserRouter>
        <div className="container-fluid">
            <header className="p-3 border-2 text-center m-3 bg-dark text-white">
                <span className="bi bi-camera-video fs-3 fw-bold"> Tech Video Tutorial</span>
                <div className="fs-5">
                    <Link to="/" className="text-white text-decoration-none"> Home </Link>
                    <Link to="/java" className="text-white text-decoration-none mx-4"> java </Link>
                    <Link to="/js" className="text-white text-decoration-none"> JavaScript </Link>
                </div>
            </header>
            <section>
              <Routes>
                <Route path="/" element={<div><h3>Welcome to tech Video's</h3><p>We provides videos for various technology like java, AWS, React...</p></div>}></Route>
                <Route path="java" element={<JavaTutorial />}></Route>
                <Route path="js" element={<JavaScriptTutorial />}></Route>
                <Route path="*" element={<h3>Requated path: not found</h3>}></Route>
                </Routes>  
            </section>
            <footer>
                <div>
                    <span>Visit us :-</span>  
                    <span className="bi bi-instagram mx-2"></span>
                    <span className="bi bi-twitter-x"></span>
                    <span className="bi bi-youtube mx-2"></span>
                    <span className="bi bi-github"></span>
                    <span className="bi bi-linkedin mx-2"></span>
                </div>
            </footer>
        </div>
       </BrowserRouter>
    )
}