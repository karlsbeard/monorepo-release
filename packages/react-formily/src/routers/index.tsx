import { Demo1 } from "@/components/Demo1";
import { Welcome } from "@/Welcome";
import { RouteObject } from "react-router-dom";

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <Welcome></Welcome>,
    handle: {
        name: "Welcome",
    }
  },
  {
    path: "/demo1",
    element: <Demo1></Demo1>,
    handle: {
      name: "Demo1",
    },
  },
];
