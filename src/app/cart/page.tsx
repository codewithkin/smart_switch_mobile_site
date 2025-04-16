"use client";
import EmptyCart from "./components/EmptyCart";
import CartItem from "./components/CartItem";
import { useCartStore } from "@/stores/useCartStore";

function CartPage() {
  const { items } = useCartStore(); // Get the items from the cart store

  return (
    <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center">
      <h2 className="heading">Your Cart</h2>

      {items.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="w-full space-y-4">
          {items.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
}

export default CartPage;
