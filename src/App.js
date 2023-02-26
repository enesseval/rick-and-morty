import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Detail from "./components/Detail";
function App() {
	return (
		<>
			<div className="container">
				<Nav />
				<Router>
					<Routes>
						<Route index path="/" element={<Home />} />
						<Route path="/detail/:char_id" element={<Detail />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
