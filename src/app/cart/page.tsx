"use client";

import { useCartStore } from "@/stores/useCartStore";
import EmptyCart from "./components/EmptyCart";
import CartItem from "./components/CartItem";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react";

function CartPage() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0,
  );

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/checkout`,
        {
          items,
          total: totalPrice,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      if (response.status === 201 || response.status === 200) {
        clearCart();
        const checkoutId = response.data.checkout.id; // Get the checkout ID from the response body
        router.push(`/checkout?id=${checkoutId}`); // Redirect to checkout page with the ID in the query params
      } else {
        throw new Error("Unexpected response");
      }
    } catch (error) {
      console.error("Checkout failed:", error);
      alert("Checkout failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center">
      <h2 className="heading mt-8">Your Cart</h2>
      <p className="text-gray-600 mb-6">Review your selected items</p>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="w-full space-y-4">
            {items.map((item: any) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-24 mb-16 w-full text-right space-y-2">
            <p className="text-lg font-medium">Total Items: {totalItems}</p>
            <p className="text-lg font-medium">
              Total Price: ${totalPrice.toFixed(2)}
            </p>
          </div>

          <Button
            className="my-6 w-full max-w-sm"
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Processing..." : "Proceed to Checkout"}
          </Button>
        </>
      )}
    </section>
  );
}

export default CartPage;
