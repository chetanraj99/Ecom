// import { CgClose } from "react-icons/cg";
// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { register } from "../../api/auth";

// const AuthModel = ({ setOpenModal, openModal }) => {
// 	const [inputs, setInputs] = useState({
// 		firstName: "chetan",
// 		lastName: "patel",
// 		email: "chetan@gmail.com",
// 		password: "chetan2345",
// 		role: "user",
// 		mobile: "9183883838",
// 	});
// 	const modalRef = useRef();
// 	const handleOutSideCloseModal = (e) => {
// 		if (e.target === modalRef.current) {
// 			setOpenModal(false);
// 		}
// 	};
// 	useEffect(() => {
// 		document.body.style.overflow = openModal ? "hidden" : "auto";
// 	}, [openModal]);

// 	const handleChange = (e) => {
// 		setInputs((preState) => {
// 			return { ...preState, [e.target.name]: e.target.value };
// 		});
// 	};
// 	const handleRegister = async (e) => {
// 		console.log("");
// 		e.preventDefault();
// 		try {
// 			const { data } = await register(inputs);
// 			console.log(data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	return (
// 		<>
// 			{true && (
// 				<div
// 					ref={modalRef}
// 					onClick={handleOutSideCloseModal}
// 					className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center"
// 				>
// 					<form
// 						method="post"
// 						className="bg-white max-w-[500px] relative  p-10 flex flex-col w-[60%] min-h-[420px] rounded"
// 					>
// 						<div className="flex-grow  flex gap-8 flex-col">
// 							<div>
// 								<input
// 									type="text"
// 									name="firstName"
// 									placeholder="First Name"
// 									id="firstName"
// 									value={inputs.firstName}
// 									onChange={handleChange}
// 									className="border h-12 w-full rounded-md p-2"
// 								/>
// 							</div>
// 							<div>
// 								<input
// 									type="text"
// 									name="lastName"
// 									placeholder="Last Name"
// 									id="lastName"
// 									value={inputs.lastName}
// 									onChange={handleChange}
// 									className="border h-12 w-full rounded-md p-2"
// 								/>
// 							</div>
// 							<div>
// 								<input
// 									type="text"
// 									name="mobile"
// 									placeholder="phone"
// 									id="mobile"
// 									value={inputs.mobile}
// 									onChange={handleChange}
// 									className="border h-12 w-full rounded-md p-2"
// 								/>
// 							</div>

// 							<div>
// 								<input
// 									type="password"
// 									placeholder="Password"
// 									name="password"
// 									value={inputs.password}
// 									onChange={handleChange}
// 									id="password"
// 									className="border h-12 w-full rounded-md p-2"
// 								/>
// 							</div>
// 							<div>
// 								<input
// 									type="email"
// 									placeholder="Email"
// 									name="email"
// 									value={inputs.email}
// 									onChange={handleChange}
// 									id="email"
// 									className="border h-12 w-full rounded-md p-2"
// 								/>
// 							</div>
// 						</div>
// 						<button
// 							onClick={handleRegister}
// 							className="bg-purple-600 mt-5 py-2 rounded-md text-lg text-white text-center"
// 						>
// 							Sign up
// 						</button>
// 						<p className="text-center mt-2">
// 							if you don't have account?{" "}
// 							<button className="text-blue-600">Register.</button>
// 						</p>
// 						<button
// 							type="submit"
// 							onClick={() => setOpenModal(false)}
// 							className="absolute -top-6 -right-6 text-white text-2xl"
// 						>
// 							<CgClose />
// 						</button>
// 					</form>
// 				</div>
// 			)}
// 		</>
// 	);
// };

// export default AuthModel;
