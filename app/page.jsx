// "use client";

import { Suspense } from "react";
import RootCompoent from "./RootComponent";
import RootDelay from "./RootDelay";

// import { useEffect, useState } from "react";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/hello");
//   return res.json();
// }

async function getData() {
  const temp = new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: "John Dae" }), 3000);
  });

  return temp;
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      PAge! {data.name}
      <RootCompoent />
      <Suspense fallback={<p>Loading Suspense</p>}>
        <RootDelay />
      </Suspense>
    </div>
  );
}
