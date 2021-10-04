import React from "react";
import Myapp from "./Myapp";
import { store } from "./Store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-gray-900 min-h-screen py-2">
        <div className="w-full md:w-10/12 m-auto bg-gray-200">
          <Myapp />
        </div>
      </div>
    </Provider>
  );
}

export default App;
