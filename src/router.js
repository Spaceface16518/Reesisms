import Home from "@/views/Home";

export default [
    {path: "/", name: "home", component: Home},
    {path: "/credits", name: "credits", component: import("@/views/Credits")},
    {path: "/submit", name: "submit", component: import("@/views/Submit")},
    {path: "/details/:id", name: "details", component: import("@/views/Details")}
    // TODO: add report page route
];
