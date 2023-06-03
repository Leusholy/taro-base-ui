import { createApp } from "vue";
import router from "./router";
import pinia from "./store";

const app = createApp({});
app.use(router).use(pinia);
export default app;
