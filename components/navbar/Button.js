import React from "react";

import  Link  from "next/link";

function Button() {
  return (
    <Link href="sign-up">
      <button className="btn">Sign Up</button>
    </Link>
  );
}
export default Button;
