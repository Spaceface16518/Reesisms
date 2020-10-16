import Home from "@/views/Home";

const Credits = () => import("@/views/Credits");
const Submit = () => import("@/views/Submit");
const Details = () => import("@/views/Details");

export default [
    {path: "/", name: "home", component: Home},
    {path: "/credits", name: "credits", component: Credits},
    {path: "/submit", name: "submit", component: Submit},
    {path: "/details/:id", name: "details", component: Details}
    // TODO: add report page route
];
