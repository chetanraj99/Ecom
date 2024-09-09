import React from "react";
import { Link } from "react-router-dom";

const HomeSectionCard = ({ product }) => {
	return (
		<Link
			to={`/product/${product.id}`}
			className=" border cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg
    overflow-hidden w-[15rem] mx-3  group "
		>
			<div className="h-[13rem] w-[10rem] overflow-hidden">
				<img
					className="object-cover duration-500  group-hover:scale-125 transition-all object-top w-full h-full"
					src={product.imageUrl}
					alt=""
				/>
			</div>
			<div className="p-4">
				<h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
				<p className="mt-2 text-sm text-gray-500">{product.title}</p>
			</div>
		</Link>
	);
};

export default HomeSectionCard;
