import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/MyHome.vue";
import Letter from "@/components/NameInspect.vue";
import Create from "@/components/CreateLink.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/create", component: Create },
  { path: "/view", component: Letter },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
