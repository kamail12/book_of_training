import React, { useState } from "react";
import App from "../App";
import { Box, Button, Typography } from "@mui/material";

const PasswordComponent = () => {
	const [password, setPassword] = useState(false);
	const [inputPassword, setInputPassword] = useState("");

	const correctPassword = "GymBestTraining";

	const handleInputChange = event => {
		setInputPassword(event.target.value);
	};

	const handlePasswordSubmit = () => {
		if (inputPassword === correctPassword) {
			setPassword(true);
		} else {
			alert("Niepoprawne hasło!");
			setInputPassword("");
		}
	};

	const backgroundImageUrl =
		"https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

	const styles = {
		root: {
			width: "100%",
			height: "100vh",
			background: `url('${backgroundImageUrl}') no-repeat center center fixed`,
			backgroundSize: "cover",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			flexDirection: "column",
			"@media (max-width: 600px)": {
				background:
					"url(https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
				backgroundSize: "100% 100%", // Lub inna wartość, która zachowa proporcje obrazka
				height: "100vh",
			},
		},
	};

	return (
		<>
			{!password ? (
				<Box sx={styles.root}>
					<Typography variant="h3" mb="20px" color="lightgrey">
						JiMi GYM 🏋🏽‍♀️
					</Typography>
					<Typography variant="h5" mb="20px" color="lightgrey">
						Enter a password ✍🏻
					</Typography>
					<input
						type="password"
						value={inputPassword}
						onChange={handleInputChange}
						className="password"
					/>
					<Button
						variant="contained"
						onClick={handlePasswordSubmit}
						sx={{ mt: "20px" }}
					>
						Wchodzę
					</Button>
				</Box>
			) : (
				<App />
			)}
		</>
	);
};

export default PasswordComponent;
