import React, { useEffect, useState } from "react";
import ProductLists from "./components/ProductLists";
const App = () => {
  return (
    <div>
      <h1>List of products</h1>
      <ProductLists />
    </div>
  );
};

export default App;
