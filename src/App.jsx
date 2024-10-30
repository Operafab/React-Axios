import React from "react";
import DataFetch from "./Hooks/DataFetch";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <DataFetch />
    </div>
  );
};

export default App;