"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from "@/components/ui/spinner"; // Custom spinner or replace with shadcn fallback
import { saveAs } from "file-saver";
import { formatDate } from "date-fns";

function CheckoutPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const {
    data: checkoutData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["checkout", id],
    queryFn: async (): Promise<any> => {
      console.log("Checkout id: ", id);

      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/checkout/${id}`,
      );
      return res.data;
    },
    enabled: !!id, // only fetch if id is present
  });

  const handleDownloadReceipt = () => {
    if (!checkoutData) return;

    const content = `
      Receipt ID: ${checkoutData.id}
      Date: ${checkoutData.createdAt}
      Total: $${checkoutData.total}

      Items:
      ${checkoutData.items
        .map(
          (item: any) =>
            `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`,
        )
        .join("\n")}

      Thank you for your purchase!
    `;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    saveAs(blob, `receipt-${checkoutData.id}.txt`);
  };

  if (!id) {
    return (
      <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="heading mt-8">This is the Checkout Page</h2>
        <p className="text-muted-foreground">
          When you buy something, it'll appear here.
        </p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center">
        <Spinner size={40} className="mt-8" />
        <h3 className="mt-4 text-muted-foreground text-xl">
          Loading checkout...
        </h3>
      </section>
    );
  }

  if (isError || !checkoutData) {
    return (
      <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-lg font-semibold text-destructive mt-8">
          Something went wrong
        </h2>
        <p className="text-muted-foreground">We couldn’t load your receipt.</p>
      </section>
    );
  }

  return (
    <section className="px-4 md:px-32 min-h-screen flex flex-col justify-center items-center">
      <h2 className="heading mt-8">Checkout Complete!</h2>
      <p className="text-gray-600 mb-6">Here’s your receipt</p>

      <Card className="w-full max-w-xl">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Smart Switch Mobile</h2>
          <CardTitle className="text-xl mt-2">
            Receipt number:{" "}
            <span className="text-slate-500 text-sm">{checkoutData.id}</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Date: {formatDate(checkoutData.createdAt, "yyyy-MM-dd")}
          </p>

          <div>
            <h4 className="font-semibold mb-2">Items:</h4>
            <ul className="space-y-2 list-disc list-inside">
              {checkoutData.items.map((item: any) => (
                <li key={item.id}>
                  {item.name} (x{item.quantity}) - $
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>
          </div>

          <h3 className="text-xl font-bold text-center text-primary flex w-full justify-between items-center">
            <span>Total:</span> <span>${checkoutData.total}</span>
          </h3>

          <Button className="mt-4" onClick={handleDownloadReceipt}>
            Download Receipt
          </Button>

          <div className="pt-6 border-t text-center text-sm text-slate-500">
            Shop #18 2nd Floor Meikles Market, Mutare, Zimbabwe
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

export default CheckoutPage;
