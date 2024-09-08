import { CgClose } from "react-icons/cg";
import React, { useEffect, useRef, useState } from "react";
import { register } from "../../api/auth";
import toast from "react-hot-toast";

const RegisterForm = ({ setRegisterModal, registerModal, setLoginModal }) => {
	const [loading, setLoading] = useState(false);
	const [inputs, setInputs] = useState({
		firstName: "chetan",
		lastName: "patel",
		email: `chetan${Math.floor(Math.random() * 100)}@gmail.com`,
		password: "chetan2345",
		role: "user",
		mobile: "9183883838",
	});

	const modalRef = useRef();
	const handleOutSideCloseModal = (e) => {
		if (e.target === modalRef.current) {
			setOpenModal(false);
		}
	};
	useEffect(() => {
		document.body.style.overflow = registerModal ? "hidden" : "auto";
	}, [registerModal]);

	const handleChange = (e) => {
		setInputs((preState) => {
			return { ...preState, [e.target.name]: e.target.value };
		});
	};
	const handleRegister = async (e) => {
		e.preventDefault();
		const toastId = toast.loading("Signing up, please wait!");
		setLoading(true);
		try {
			await register(inputs);
			toast.dismiss(toastId);
			toast.success("Sign up, successful!");
			setRegisterModal(false);
			setLoginModal(true);
			setLoading(false);

			// console.log(data);
		} catch (error) {
			toast.dismiss(toastId);
			toast.error("Somthing went wrong.");
			setLoading(false);
		}
	};
	return (
		<>
			{registerModal && (
				<div
					ref={modalRef}
					onClick={handleOutSideCloseModal}
					className="fixed inset-0 bg-[rgba(0,0,0,0.7)] flex justify-center items-center"
				>
					<form
						method="post"
						onSubmit={handleRegister}
						className="bg-white max-w-[500px] relative  p-10 flex flex-col w-[60%] min-h-[420px] rounded"
					>
						<div className="flex-grow  flex gap-8 flex-col">
							<div>
								<input
									type="text"
									name="firstName"
									placeholder="First Name"
									id="firstNameReg"
									value={inputs.firstName}
									onChange={handleChange}
									className="border h-12 w-full rounded-md p-2"
								/>
							</div>
							<div>
								<input
									type="text"
									name="lastName"
									placeholder="Last Name"
									id="lastNameReg"
									value={inputs.lastName}
									onChange={handleChange}
									className="border h-12 w-full rounded-md p-2"
								/>
							</div>
							<div>
								<input
									type="text"
									name="mobile"
									placeholder="phone"
									id="mobileReg"
									value={inputs.mobile}
									onChange={handleChange}
									className="border h-12 w-full rounded-md p-2"
								/>
							</div>
							<div>
								<input
									type="email"
									placeholder="Email"
									name="email"
									value={inputs.email}
									onChange={handleChange}
									id="emailReg"
									className="border h-12 w-full rounded-md p-2"
								/>
							</div>
							<div>
								<input
									type="password"
									placeholder="Password"
									name="password"
									value={inputs.password}
									onChange={handleChange}
									id="passwordReg"
									className="border h-12 w-full rounded-md p-2"
								/>
							</div>
						</div>
						<button
							disabled={loading}
							type="submit"
							className="bg-purple-600 disabled:bg-purple-900 mt-5 py-2 rounded-md text-lg text-white text-center"
						>
							Sign up
						</button>
						<p className="text-center mt-2">
							if you already have an account{" "}
							<button
								type="button"
								onClick={() => {
									setRegisterModal(false);
									setLoginModal(true);
								}}
								className="text-blue-600"
							>
								Login.
							</button>
						</p>
						<button
							type="button"
							onClick={() => setRegisterModal(false)}
							className="absolute -top-6 -right-6 text-white text-2xl"
						>
							<CgClose />
						</button>
					</form>
				</div>
			)}
		</>
	);
};

export default RegisterForm;
