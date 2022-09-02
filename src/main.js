/*
 * @Author: NYY
 * @Date: 2022-08-27 10:35:30
 * @LastEditTime: 2022-09-02 09:30:55
 * @LastEditors: NYY
 * @Description:
 */
import Vue from "vue";
import App from "./App.vue";
import {
  Button,
  Container,
  Main,
  Header,
  Aside,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Row,
  Card,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Tag,
  Form,
  FormItem,
  Input,
  Select,
  Option,
  Switch,
  DatePicker,
  Dialog,
  Table,
  TableColumn,
  Pagination,
  MessageBox,
  Message
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import router from "./router";
import store from "./store";
import http from "axios";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Container);
Vue.use(Main);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Row);
Vue.use(Card);
Vue.use(Col);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Select);
Vue.use(Option);
Vue.use(Switch);
Vue.use(DatePicker);
Vue.use(Dialog);
Vue.use(Pagination);

Vue.prototype.$http = http;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
  }else if(token && to.name === 'login'){
    next({name:'home'})
  }else{
    next()
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount("#app");
