import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Stack, TextField } from "@mui/material";

import { fetchData, exercisesOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercise, bodyPart, setBodyPart }) => {
	const [search, setsearch] = useState("");
	const [bodyParts, setBodyParts] = useState([]);

	useEffect(() => {
		const fetchExercisesData = async () => {
		  const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);
	
		  setBodyParts(['all', ...bodyPartsData]);
		};
	
		fetchExercisesData();
	  }, []);
	  

	const handleSearch = async () => {
		if (search) {
			const exercisesData = await fetchData(
				"https://exercisedb.p.rapidapi.com/exercises",
				exercisesOptions
			);

			const searchExercises = exercisesData.filter(
				exercise =>
					exercise.name.toLowerCase().includes(search) ||
					exercise.target.toLowerCase().includes(search) ||
					exercise.equipment.toLowerCase().includes(search) ||
					exercise.bodyPart.toLowerCase().includes(search)
			);

			setsearch("");
			setExercise(searchExercises);
		}
	};

	return (
		<Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
			<Typography
				textAlign="center"
				fontWeight={700}
				sx={{
					fontSize: { lg: "44px", xs: "30px" },
				}}
				mb="50px"
			>
				Awesome Exercises You <br /> Should Know
			</Typography>
			<Box position="relative" mb="72px">
				<TextField
					sx={{
						input: {
							fontWeight: "700",
							border: "none",
							borderRadius: "4px",
						},
						width: { lg: "800px", xs: "350px" },
						backgroundColor: "#fff",
						borderRadius: "40px",
					}}
					height="76px"
					value={search}
					onChange={e => {
						setsearch(e.target.value.toLowerCase());
					}}
					placeholder="Search exercises"
					type="text"
				/>
				<Button
					className="search-btn"
					sx={{
						backgroundColor: "#ff2625",
						color: "#fff",
						textTransform: "none",
						width: { lg: "175px", xs: "80px" },
						fontSize: { lg: "20px", xs: "14px" },
						height: "56px",
						position: "absolute",
						right: "0",
					}}
					onClick={handleSearch}
				>
					Search
				</Button>
			</Box>
			<Box
				sx={{
					position: "relative",
					p: "20px",
					width: "100%",
				}}
			>
				<HorizontalScrollbar
					data={bodyParts}
					bodyPart={bodyPart}
					setBodyPart={setBodyPart}
				/>
			</Box>
		</Stack>
	);
};

export default SearchExercises;
