// Komponent BodyPart
import React from "react";
import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={{
				borderTop: bodyPart === item.name ? "4px solid #ff2625" : "",
				backgroundColor: "#FFF",
				borderBottomLeftRadius: "20px",
				width: "270px",
				height: "280px",
				cursor: "pointer",
				gap: "47px",
			}}
		>
			<img
				src={Icon}
				alt="dumbbell"
				style={{
					width: "40px",
					height: "40px",
				}}
			/>
			<Typography
				fontSize="24px"
				fontWeight="bold"
				color="#3A1212"
				textTransform="capitalize"
			>
				{item.name}
			</Typography>{" "}
			{/* Wyświetl właściwą nazwę kategorii */}
		</Stack>
	);
};

export default BodyPart;
