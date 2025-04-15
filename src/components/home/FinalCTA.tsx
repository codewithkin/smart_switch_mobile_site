import Link from "next/link";
import { Button } from "../ui/button";

function FinalCTA() {
  return (
    <section className="section bg-slate-200 rounded-2xl p-10 m-8 md:m-20 text-center space-y-4 shadow-sm">
      <h2 className="text-3xl font-bold text-slate-800">
        Ready to Upgrade Your Tech?
      </h2>
      <p className="max-w-2xl mx-auto text-slate-600">
        From budget-friendly finds to flagship favorites, we’ve got something
        for everyone. Browse our full shop and get your next device the smart way.
      </p>
      <Button asChild size="lg">
        <Link href="/shop">Start Shopping</Link>
      </Button>
    </section>
  );
}

export default FinalCTA;
