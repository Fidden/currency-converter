import {createApp} from 'vue';
import '@/assets/css/style.scss';
import App from '@/App.vue';
import {createPinia} from 'pinia';
import {router} from '@/router/router';
import {clickOutside} from '@/directives/clickOutside';

createApp(App)
    .use(router)
    .use(createPinia())
    .directive('click-outside', clickOutside)
    .mount('#app');
