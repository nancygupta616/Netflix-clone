import React from "react";
import Card from "./Cards";
import Sdata from "./Sdata";
import Netflix from "./Netflix";
import Amazon from "./Amazon";


const favseries = "netflix";

//  const FavS = () => {
//    if (favseries === "netflix") {
//      return <Netflix />;
//    } else {
//      return <Amazon />;
//    }
//  };  


const App = () => (
  <>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2023 </h1>
    {/* <FavS /> */}

    {favseries === "netflix" ? <Netflix /> : <Amazon />}

    {/* {Sdata.map((val, index) => {
      return (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          seriesname={val.seriesname}
          link={val.link}
        />
      );
    })} */}
  </>
);

export default App;


