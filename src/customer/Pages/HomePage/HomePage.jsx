import React, { useEffect, useState } from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../Data/mens_kurta";
import { api } from "../../../api/auth";
import { findProducts } from "../../../state/Product/Action";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
	const [kurtas, setKurtas] = useState(mens_kurta);
	const [shoes, setShoes] = useState([]);
	const [shirts, setShirts] = useState([]);
	const [sarees, setSarees] = useState([]);

	useEffect(() => {
		const getKurtas = async () => {
			const { data } = await api.get(
				"api/products?colors=&size=0&minPrice=399&maxPrice=999&minDiscount=0&category=mens_kurta&stock=null&sort=price_low&pageNumber=0&pageSize=4"
			);
			setKurtas(data.content);
		};
		getKurtas();
	}, []);
	useEffect(() => {
		const getShoes = async () => {
			const { data } = await api.get(
				"api/products?colors=&size=0&minPrice=399&maxPrice=999&minDiscount=0&category=mens_shoes&stock=null&sort=price_low&pageNumber=0&pageSize=4"
			);
			setShoes(data.content);
			console.log(shoes);
		};
		getShoes();
	}, []);
	useEffect(() => {
		const getShirts = async () => {
			const { data } = await api.get(
				"api/products?colors=&size=0&minPrice=399&maxPrice=999&minDiscount=0&category=mens_shirts&stock=null&sort=price_low&pageNumber=0&pageSize=4"
			);
			setShirts(data.content);
			console.log("shirts", data);
		};
		getShirts();
	}, []);
	useEffect(() => {
		const getSarees = async () => {
			const { data } = await api.get(
				"api/products?colors=&size=0&minPrice=399&maxPrice=999&minDiscount=0&category=mens_kurta&stock=null&sort=price_low&pageNumber=0&pageSize=4"
			);
			setSarees(data.content);
		};
		getSarees();
	}, []);

	return (
		<div>
			<MainCarousel />
			<div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
				<HomeSectionCarousel data={kurtas} sectionName={"Men's Kurta"} />
				<HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shoes"} />
				<HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"} />
				<HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"} />
			</div>
		</div>
	);
};

export default HomePage;
