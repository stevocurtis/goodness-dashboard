import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import HelloWorld from "./components/HelloWorld";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/about", name: "about", component: About },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/hello", name: "hello", component: HelloWorld },
    { path: "*", name: "home", component: Home }
  ]
});
