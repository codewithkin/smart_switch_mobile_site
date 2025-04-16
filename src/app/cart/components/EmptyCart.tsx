import { Button } from "@/components/ui/button";
import { Home, LucideShoppingBag, ShoppingCart } from "lucide-react";
import Link from "next/link";

function EmptyCart() {
  return (
    <article className="flex flex-col gap-4 my-20 justify-center items-center text-center">
      <LucideShoppingBag
        className="text-slate-500"
        size={120}
        strokeWidth={1}
      />
      <article>
        <h2 className="text-2xl font-medium">Nothing here, yet...</h2>
        <p className="text-slate-500">
          Add a few items to your cart and they'll appear here
        </p>
        <article className="flex flex-col md:flex-row gap-4 justify-center items-center mt-2">
          <Button className="w-full md:w-fit" asChild variant="default">
            <Link href="/">
              <Home />
              Take me home
            </Link>
          </Button>
          <Button className="w-full md:w-fit" asChild variant="secondary">
            <Link href="/shop">
              <ShoppingCart />
              Shop now
            </Link>
          </Button>
        </article>
      </article>
    </article>
  );
}

export default EmptyCart;
