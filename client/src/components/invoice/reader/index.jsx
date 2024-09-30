import React from "react";
import Invoice_Hero from "./Hero";
import Invoice_Reader_Marque from "./Marque";
import Invoice_uploader from "./Invoice_uploader";

const index = () => {
  return (
    <div>
      <Invoice_Hero />
      <Invoice_Reader_Marque />
      <Invoice_uploader />
    </div>
  );
};

export default index;
