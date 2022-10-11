import { createApp } from 'vue'
import router from "./routes";
import { createStore } from "vuex"
import App from './App.vue'
import './style/bootstrap.min.css'
import './style/style.css'
const app = createApp(App);
app.use(router);

// ElementPlus完整引用
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// app.use(ElementPlus)

// vuex
const store = createStore({
    state() {
        return {
        };
    },
    mutations: {
    }
});
app.use(store);
app.mount("#app");