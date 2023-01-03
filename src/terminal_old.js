import Vue from "vue";

import Terminal from "./terminal_old";

Vue.config.productionTip = false;

/* eslint-disable no-new */
import { createApp } from 'vue'
import terminal from './Terminal.vue'

import './assets/main.css'

createApp(terminal).mount('#terminal')
