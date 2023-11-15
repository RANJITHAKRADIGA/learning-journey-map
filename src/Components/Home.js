import React from "react";
import Navigation from "./Navigation";

function Home(props) {
  const tabIndex = props.tab;
  return (
    <div>
      <Navigation tabIndex={tabIndex} />
    </div>
  );
}

export default Home;
