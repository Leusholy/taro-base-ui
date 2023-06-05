import { createApp } from "vue";
import router from "./router";
import pinia from "./store";

import "./mock";

import "@/assets/styles/prelight.css";

const app = createApp({});
app.use(router);
app.use(pinia);
export default app;
