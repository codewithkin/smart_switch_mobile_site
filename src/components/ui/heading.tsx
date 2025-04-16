import React, { ReactNode } from "react";

function Heading({ children }: { children: ReactNode }) {
  return <h2 className="heading">{children}</h2>;
}

export default Heading;
