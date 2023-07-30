import React, { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { exercisesOptions, fetchData } from "../utils/fetchData";

const Exercises = ({ setExercise, exercises, setBodyPart }) => {
	return (
		<Box
			id="exercises"
			sx={{
				mt: { lg: "110px" },
			}}
			mt="50px"
			p="20px"
		>
			<Typography variant="h3" mb="46px">
				Showing results
			</Typography>
			<Stack
				direction="row"
				sx={{
					gap: { lg: "110px", xs: "50px" },
				}}
				flexWrap="wrap"
				justifyContent="center"
			>
				{exercises.map((exercise, index) => (
					<p key={index}>{exercise.name}</p>
				))}
			</Stack>
		</Box>
	);
};

export default Exercises;
