import React from "react";
import Sdata from "./Sdata";
import Card from "./Cards";

const Netflix = () => {

     return (
       <Card
         key={Sdata[0].id}
         imgsrc={Sdata[0].imgsrc}
         title={Sdata[0].title}
         seriesname={Sdata[0].seriesname}
         link={Sdata[0].link}
       />
     );
}

export default Netflix;