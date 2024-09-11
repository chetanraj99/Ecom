import React, { useState, useRef, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button, Skeleton } from "@mui/material";

const HomeSectionCarousel = ({ data, sectionName, loading, setLoading }) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const carouselRef = useRef(null);
	const [items, setItems] = useState([]);

	const responsive = {
		500: {
			items: 1.5,
		},
		600: {
			items: 2,
		},
		720: { items: 2.5 },
		840: {
			items: 3.2,
		},

		1024: { items: 3.5 },
		1200: {
			items: 4.5,
		},
	};

	useEffect(() => {
		if (loading) {
			const items = Array(5)
				.fill(0)
				.map((_, index) => (
					<Skeleton sx={{ width: "200px", height: "400px" }} key={index} />
				));
			setItems(items);
		} else if (Array.isArray(data) && data.length > 0) {
			const items = data.map((item, index) => (
				<HomeSectionCard key={index} product={item} />
			));
			setItems(items);
		}
	}, [data, loading]);

	const handleSlidePrev = () => {
		if (carouselRef.current) {
			const newIndex = activeIndex > 0 ? activeIndex - 1 : 0;
			setActiveIndex(newIndex);
			carouselRef.current.slideTo(newIndex);
		}
	};

	const handleSlideNext = () => {
		if (carouselRef.current) {
			const newIndex =
				activeIndex < items.length - 1 ? activeIndex + 1 : items.length - 1;
			setActiveIndex(newIndex);
			carouselRef.current.slideTo(newIndex);
		}
	};

	const handleSlideChanged = ({ item }) => setActiveIndex(item);

	return (
		<div className="border">
			<h2 className="text-2xl font-extrabold text-gray-800 py-5">
				{sectionName}
			</h2>
			<div className="relative p-5">
				<AliceCarousel
					disableButtonsControls
					disableDotsControls
					items={items}
					responsive={responsive}
					onSlideChanged={handleSlideChanged}
					activeIndex={activeIndex}
					ref={carouselRef}
				/>

				{activeIndex !== items.length - 1 && (
					<Button
						variant="contained"
						className="z-50 bg-white"
						onClick={handleSlideNext}
						sx={{
							position: "absolute",
							top: "8rem",
							right: "0rem",
							transform: "translate(50%) rotate(90deg)",
							bgcolor: "white",
						}}
						aria-label="next"
					>
						<KeyboardArrowLeftIcon
							style={{ transform: "rotate(90deg)", color: "black" }}
						/>
					</Button>
				)}

				{activeIndex !== 0 && (
					<Button
						variant="contained"
						className="z-50 bg-white"
						onClick={handleSlidePrev}
						sx={{
							position: "absolute",
							top: "8rem",
							left: "0rem",
							transform: "translate(-50%) rotate(-90deg)",
							bgcolor: "white",
						}}
						aria-label="prev"
					>
						<KeyboardArrowLeftIcon
							sx={{ transform: "rotate(90deg)", color: "black" }}
						/>
					</Button>
				)}
			</div>
		</div>
	);
};

export default HomeSectionCarousel;
