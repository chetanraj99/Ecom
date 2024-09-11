import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../state/Cart/Action";

const calculatePrice = (cartItems) => {
	if (!cartItems || cartItems.length === 0) return 0;
	const total = cartItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	return total;
};

const Cart = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [price, setPrice] = useState(0);

	const cart = useSelector((store) => store.cart);

	const handleCheckOut = () => navigate("/checkout?step=2");

	useEffect(() => {
		if (cart.cartItems && cart.cartItems.length > 0) {
			const totalPrice = calculatePrice(cart.cartItems);
			setPrice(totalPrice);
		}
	}, [cart.cartItems]);

	useEffect(() => {
		dispatch(getCart());
	}, [dispatch, cart.updateCartItem, cart.deleteCartItem]);

	return (
		<div>
			<div className="lg:grid grid-cols-3 lg:px-16 relative">
				<div className="col-span-2 mt-4">
					{cart.cartItems && cart.cartItems.length > 0 ? (
						cart.cartItems.map((item) => <CartItem item={item} key={item.id} />)
					) : (
						<p className="text-center bg-purple-700 py-2 w-[90%] text-white mx-auto">
							Cart is empty.
						</p>
					)}
				</div>

				<div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 p-5">
					<div className="border p-4">
						<p className="uppercase font-bold opacity-60 pb-4">Price details</p>
						<hr />
						<div className="space-y-3 font-semibold mb-10">
							<div className="flex justify-between pt-3 text-black">
								<span>Price</span>
								<span>₹{price}</span>
							</div>

							<div className="flex justify-between pt-3 ">
								<span>Discount</span>
								<span className="text-green-600">
									-₹{cart?.cart?.discount || 0}
								</span>
							</div>

							<div className="flex justify-between pt-3 ">
								<span>Delivery Charge</span>
								<span className="text-green-600">Free</span>
							</div>

							<div className="flex justify-between pt-3 ">
								<span>Total Amount</span>
								<span className="text-green-600 font-bold">
									₹{cart?.cart?.totalDiscountedPrice || price}
								</span>
							</div>
						</div>
						<Button
							onClick={handleCheckOut}
							className="w-full mt-5"
							variant="contained"
							sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}
						>
							Checkout
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
