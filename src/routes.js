import Home from "./components/Home/Home";

export const routes = [
  { path: "/home", name: "home", component: Home, titulo: "Home", menu: true },
  { path: "*", component: Home, menu: false }
];
