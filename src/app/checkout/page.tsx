import { Suspense } from "react";
import CheckoutClientPage from "./client-page";

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={<div className="p-8 text-center">Loading receipt...</div>}
    >
      <CheckoutClientPage />
    </Suspense>
  );
}
