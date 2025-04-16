import { create } from "zustand";
import { Product } from "@/types"; // Adjust the path as needed

type CartItem = Product & { quantity: number };

interface CartState {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
}

const getInitialCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem("cart");
  return stored ? JSON.parse(stored) : [];
};

export const useCartStore = create<CartState>((set, get) => ({
  items: getInitialCart(),

  addToCart: (product, quantity = 1) => {
    const items = get().items;
    const existing = items.find((item) => item.id === product.id);

    let updated: CartItem[];

    if (existing) {
      updated = items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
    } else {
      updated = [...items, { ...product, quantity }];
    }

    localStorage.setItem("cart", JSON.stringify(updated));
    set({ items: updated });
  },

  removeFromCart: (productId: string) => {
    const updated = get().items.filter((item: any) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updated));
    set({ items: updated });
  },

  clearCart: () => {
    localStorage.removeItem("cart");
    set({ items: [] });
  },
}));
