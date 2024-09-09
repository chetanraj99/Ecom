import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
	return (
		<div className=" ">
			<Grid container className="flex gap-3 md:flex-row flex-col">
				<Grid item className="">
					<Box>
						<Avatar
							className="text-white"
							sx={{ width: 30, height: 30, marginTop: 1, bgcolor: "#9155fd" }}
						></Avatar>
					</Box>
				</Grid>
				<Grid item xs={9}>
					<div className="space-y-2">
						<div>
							<p className="font-semibold text-lg">Raam</p>
							<p className="opacity-50">April 5,2023</p>
						</div>
					</div>
					<Rating value={4.5} precision={0.5} name="half-rating" readOnly />
					<p>nice product, I love this shirt</p>
				</Grid>
			</Grid>
		</div>
	);
};

export default ProductReviewCard;
