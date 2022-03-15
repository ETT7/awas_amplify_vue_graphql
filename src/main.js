import { createApp } from 'vue'
import App from './App.vue'
import Auth from "aws-amplify";
import awsConfig from "./aws-exports";
import "@aws-amplify/ui-vue/styles.css";

Auth.configure(awsConfig);
createApp(App).mount('#app')
