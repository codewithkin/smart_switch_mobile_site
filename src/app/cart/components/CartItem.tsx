"use client";

import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/useCartStore"; // Adjust path
import { Product } from "@/types"; // Adjust path
import { FaTrashAlt } from "react-icons/fa"; // Icon for delete
import { motion } from "framer-motion";

interface CartItemProps {
  item: Product & { quantity: number };
}

function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCartStore(); // Get the remove function from the store

  return (
    <motion.article className="flex items-center justify-between py-4 border-b">
      <article className="flex items-center">
        <img
          src={item.images[0]} // Display the first image from the array (adjust if necessary)
          alt={item.name}
          className="w-16 h-16 object-cover mr-4"
        />
        <article>
          <h3 className="font-semibold">{item.name}</h3>
          <p>
            {item.storage} | {item.color}
          </p>
          <p className="text-gray-600">x{item.quantity}</p>
        </article>
      </article>

      <article className="flex items-center gap-4">
        <p className="font-semibold">${item.price * item.quantity}</p>
        <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
          <FaTrashAlt size={20} />
        </Button>
      </article>
    </motion.article>
  );
}

export default CartItem;
