import { useCartStore } from "@/stores/useCartStore"; // Adjust path
import { Product } from "@/types"; // Adjust path
import { FaTrashAlt } from "react-icons/fa"; // Icon for delete

interface CartItemProps {
  item: Product & { quantity: number };
}

function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCartStore(); // Get the remove function from the store

  return (
    <div className="flex items-center justify-between py-4 border-b">
      <div className="flex items-center">
        <img
          src={item.images[0]} // Display the first image from the array (adjust if necessary)
          alt={item.name}
          className="w-16 h-16 object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p>
            {item.storage} | {item.color}
          </p>
          <p className="text-gray-600">x{item.quantity}</p>
        </div>
      </div>

      <div className="flex items-center">
        <p className="font-semibold">${item.price * item.quantity}</p>
        <button
          onClick={() => removeFromCart(item.id)}
          className="ml-4 text-red-500 hover:text-red-700"
        >
          <FaTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
