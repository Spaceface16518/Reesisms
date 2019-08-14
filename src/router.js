import Home from "@/views/Home";
import Credits from "@/views/Credits";
import Submit from "@/views/Submit";
// TODO: lazy/split loading

export default [
    {path: "/", name: "home", component: Home},
    {path: "/credits", name: "credits", component: Credits},
    {path: "/submit", name: "submit", component: Submit}
    // TODO: add report page route
];
