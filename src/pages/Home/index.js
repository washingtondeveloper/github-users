import React from "react";

import "./styles.css";

import User from "@/components/User";
import Repos from "@/components/Repos";
import Search from "@/components/Search";

export default function Home() {
  return (
    <div className="gs-home">
      <Search />
      <User />
      <Repos />
    </div>
  );
}
