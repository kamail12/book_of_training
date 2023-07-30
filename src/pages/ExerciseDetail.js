import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

//utils
import { exercisesOptions, fetchData } from "../utils/fetchData";

//components
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
	const [exerciseDetail, setExerciseDetail] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchExercisesData = async () => {
			const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
			const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
	  
			const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);

			// const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`, youtubeOptions);

			setExerciseDetail(exerciseDetailData);
	  
			
		  };

		fetchExercisesData();
	}, [id]);

	return (
		<Box>
			<Detail exerciseDetail={exerciseDetail} />
			<ExerciseVideos />
			<SimilarExercises />
		</Box>
	);
};

export default ExerciseDetail;
