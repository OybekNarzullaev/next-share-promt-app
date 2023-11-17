"use client";

import React, { useEffect } from "react";

interface Props {
  error: any;
  reset: any;
}
const Error = ({ error, reset = () => {} }: Props) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <h2>Something get wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
};

export default Error;
