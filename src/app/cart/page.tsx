"use client";

import EmptyCart from "./components/EmptyCart";
import CartItem from "./components/CartItem";
import { useCartStore } from "@/stores/useCartStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

function CartPage() {
  const { items } = useCartStore(); // Get items from cart store
  const router = useRouter();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <section className="px-4 md:px-32 min-h-screen flex flex-col items-center pt-10 pb-20">
      <h2 className="heading text-3xl mb-2">Your Cart</h2>
      <p className="text-muted-foreground mb-6 text-center">
        Review your selected products before checking out.
      </p>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="w-full space-y-6">
          {/* Cart Summary */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border p-4 rounded-md shadow-sm">
            <div>
              <p className="text-lg font-medium">
                Total Items: <span className="font-bold">{totalItems}</span>
              </p>
              <p className="text-lg font-medium">
                Total Price:{" "}
                <span className="font-bold">${totalPrice.toFixed(2)}</span>
              </p>
            </div>

            <Button onClick={() => router.push("/checkout")}>
              Proceed to Checkout
            </Button>
          </div>

          {/* Cart Items */}
          <div className="w-full space-y-4">
            {items.map((item: any) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default CartPage;
