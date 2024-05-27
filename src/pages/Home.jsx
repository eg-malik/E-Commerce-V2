import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Featured from "../components/Featured";
import Discounted from "../components/Discounted";
import Explore from "../components/Explore";

export default function Home() {
  return (
    <>
      <Landing></Landing>
      <Highlights></Highlights>
      <Featured></Featured>
      <Discounted></Discounted>
      <Explore></Explore>
    </>
  );
}
