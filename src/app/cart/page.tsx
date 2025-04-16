import EmptyCart from "./components/EmptyCart";

function CartPage() {
  return (
    <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center">
      <h2 className="heading">Your Cart</h2>

      <EmptyCart />
    </section>
  );
}

export default CartPage;
