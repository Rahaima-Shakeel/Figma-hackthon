"use client";

import { useCart } from "../../../context/Cart_Context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Checkout() {
  const { cart } = useCart();

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Thank you for your order! Your items will be shipped soon.");
    // Implement order placement logic here (e.g., API call, clearing cart, etc.)
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
      {cart.length === 0 ? (
        <div className="text-center">
          <p className="text-lg text-gray-500 mb-4">Your cart is empty.</p>
          <Link href="/AllProducts">
            <Button className="bg-gray-700 text-white px-4 py-2 rounded-lg">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="max-w-xl mx-auto">
          <ul className="mb-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  &#163; {(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex justify-between text-lg font-semibold mb-6">
            <span>Total:</span>
            <span>&#163; {totalAmount.toFixed(2)}</span>
          </div>
          <Button
            className="bg-[#2A254B] text-white w-full py-3 rounded-lg"
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </div>
      )}
    </div>
  );
}
