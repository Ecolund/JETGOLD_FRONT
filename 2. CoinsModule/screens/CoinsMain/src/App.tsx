import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen } from "./screens/Screen";
import { ScreenScreen } from "./screens/ScreenScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Screen />,
  },
  {
    path: "/u1082u1072u1088u1090u1086u1095u1082u1080-u1087u1088u1086u1076u1072u1074u1094u1086u1074",
    element: <Screen />,
  },
  {
    path: "/u1075u1083u1072u1074u1085u1072u1103",
    element: <ScreenScreen />,
  },
  {
    path: "/u1084u1086u1085u1077u1090u1072",
    element: <DivWrapper />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
