import React from "react";
import DepositCard from "../components/DepositCard";

export default function Home() {
  return (
    <div className="container  mx-auto md:px-12  ">
      <div className="flex flex-wrap ">
        {Array.from("deposittt").map((elm, i) => {
          return (
            <div key={i} className="m-5">
              <DepositCard />
            </div>
          );
        })}
      </div>
    </div>
  );
}
