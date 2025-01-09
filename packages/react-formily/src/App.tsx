import { routers } from "@/routers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  FCProvider  from "@/components/Provider";

function App() {
  return (
    <FCProvider>
      <RouterProvider router={createBrowserRouter(routers)}></RouterProvider>
    </FCProvider>
  );
}

export default App;
