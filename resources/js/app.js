import './bootstrap';
import { createApp } from 'vue';
import '../../public/assets/vendor/fonts/boxicons.css'
import '../../public/assets/vendor/fonts/fontawesome.css'
import '../../public/assets/vendor/fonts/flag-icons.css'
import '../../public/assets/vendor/css/rtl/core-dark.css'
import '../../public/assets/vendor/css/rtl/theme-default-dark.css'
import '../../public/assets/css/demo.css'
import '../../public/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css'
import '../../public/assets/vendor/libs/typeahead-js/typeahead.css'
import '../../public/assets/vendor/libs/apex-charts/apex-charts.css'
import '../../public/assets/vendor/js/helpers.js'
import '../../public/assets/vendor/js/template-customizer.js'
//import '../../public/assets/js/config.js'
import '../../public/assets/vendor/libs/jquery/jquery.js'
import '../../public/assets/vendor/libs/popper/popper.js'
import '../../public/assets/vendor/js/bootstrap.js'
import '../../public/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'
import '../../public/assets/vendor/libs/hammer/hammer.js'
import '../../public/assets/vendor/libs/i18n/i18n.js'
import '../../public/assets/vendor/libs/typeahead-js/typeahead.js'
import '../../public/assets/vendor/js/menu.js'
import '../../public/assets/vendor/libs/apex-charts/apexcharts.js'
import '../../public/assets/js/main.js'
//import '../../public/assets/js/dashboards-ecommerce.js'


import ViewUIPlus from 'view-ui-plus';
//import 'view-ui-plus/dist/styles/viewuiplus.css';
//import vue-router
import router from './router';
//Import mixin
import common from './mixin/common';
import formActionMixin from './mixin/form-action'
import store from './store';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

const token = localStorage.getItem('accessToken');

if (token) {
    axios.defaults.headers.common['Authorization'] = token;
}

import MainApp from './components/MainApp.vue';

const app = createApp({});

app.component('main-app', MainApp);

app.use(router);
app.use(ViewUIPlus);
app.use(store);
app.mixin(common);
app.mixin(formActionMixin);
app.mount('#app')