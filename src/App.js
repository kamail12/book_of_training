import React from "react";
import { Route, Routes } from "react-router-dom";

//style
import "./App.css";
import { Box } from "@mui/material";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

function App() {
	return (
		<div className="App">
			<Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/exercise/:id" element={<ExerciseDetail />} />
				</Routes>
				<Footer />
			</Box>
		</div>
	);
}

export default App;
