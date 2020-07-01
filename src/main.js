import Vue from 'vue'
import App from './App.vue'


import "@/assets/css/font/iconfont.css"
import "@/assets/css/common.css"
import 'mavon-editor/dist/css/index.css'
import router from './router'
import mavonEditor from 'mavon-editor'



//????????element???
import { Form, FormItem, Input, Button, Checkbox, Pagination, Badge, Select, Option, Backtop, Icon, Dialog, Upload ,Table,TableColumn,Tag} from 'element-ui';
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
Vue.component(CollapseTransition.name, CollapseTransition)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(Pagination)
Vue.use(Badge)
Vue.use(Select)
Vue.use(Option)
Vue.use(Backtop)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Upload)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)

//????



// use
Vue.use(mavonEditor)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
