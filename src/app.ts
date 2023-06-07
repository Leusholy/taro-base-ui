import { createApp } from "vue";
import router from "./router";
import pinia from "./store";

import "./mock";
import "./utils/interceptor";

const app = createApp({});
app.use(router);
app.use(pinia);
export default app;
