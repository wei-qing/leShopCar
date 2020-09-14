// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem,
     Swipe, SwipeItem, Tab, Tabs,Lazyload,Sticky,Search,Form,Field,
     GoodsAction, GoodsActionIcon, GoodsActionButton,Card ,SwipeCell,
     Checkbox, CheckboxGroup ,Area ,RadioGroup, Radio ,PasswordInput, NumberKeyboard ,    } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Lazyload);
Vue.use(Sticky);
Vue.use(Search);
Vue.use(Form);
Vue.use(Field);
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Card);
Vue.use(SwipeCell);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Area);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(PasswordInput);
Vue.use(NumberKeyboard);

Vue.use(Lazyload, {
    lazyComponent: true,
  });

