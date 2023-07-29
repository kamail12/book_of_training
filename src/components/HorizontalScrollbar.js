import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => {
	const categories = data.slice(1); // Ignoruj pierwszy element ("all")

	const LeftArrow = () => {
		const { scrollPrev } = useContext(VisibilityContext);

		return (
			<Typography onClick={() => scrollPrev()} className="right-arrow">
				<img src={LeftArrowIcon} alt="right-arrow" />
			</Typography>
		);
	};

	const RightArrow = () => {
		const { scrollNext } = useContext(VisibilityContext);

		return (
			<Typography onClick={() => scrollNext()} className="left-arrow">
				<img src={RightArrowIcon} alt="right-arrow" />
			</Typography>
		);
	};

	return (
		<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
			<Box key="all" itemID="all" title="all" m="0 40px">
				<BodyPart
					item={{ name: "all" }}
					setBodyPart={setBodyPart}
					bodyPart={bodyPart}
				/>
			</Box>
			{categories.map(item => (
				<Box
					key={item.name}
					itemID={item.name}
					title={item.name}
					m="0 40px"
				>
					<BodyPart
						item={item}
						setBodyPart={setBodyPart}
						bodyPart={bodyPart}
					/>
				</Box>
			))}
		</ScrollMenu>
	);
};

export default HorizontalScrollbar;
