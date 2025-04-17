import { Loader2 } from "lucide-react";
import React from "react";

function spinner({ size = 20 }: { size: number }) {
  return <Loader2 className="animate-spin" size={size} />;
}

export default spinner;
