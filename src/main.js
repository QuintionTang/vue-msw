import { createApp } from "vue";
import App from "./App.vue";

if (process.env.NODE_ENV === "development") {
    const { mocker } = require("./mocks/browser");
    mocker.start({
        // 对于没有 mock 的接口直接通过，避免异常
        onUnhandledRequest: "bypass",
    });
}

createApp(App).mount("#app");
