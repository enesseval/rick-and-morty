import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "./images/logo.png";
import Home from "./pages/Home";
import Episodes from "./pages/Episodes";
function App() {
	return (
		<>
			<div className="container">
				<Router>
					<div className="nav">
						<img className="logo" src={logo} alt="" />
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/episodes">Episodes</Link>
							</li>
						</ul>
					</div>
					<Routes>
						<Route index path="/" element={<Home />} />
						<Route index path="/episodes" element={<Episodes />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
