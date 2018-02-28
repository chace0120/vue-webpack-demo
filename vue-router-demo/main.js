import Vue from 'vue';
import App from './component/app.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 路由配置
const Routers = [
	{
		path: '/index',
		meta: {
			title: '首页'
		}, 
		component: (resolve) => require(['./views/index.vue'], resolve)
	},
	{
		path: '/about',
		meta: {
			title: '关于'
		}, 
		component: (resolve) => require(['./views/about.vue'], resolve)
	},
	{
		path: '/user/:id',
		meta: {
			title: '个人主页'
		}, 
		component: (resolve) => require(['./views/user.vue'], resolve)
	},
	{
		path: '*',
		redirect: '/index'
	}
];

const RouterConfig = {
	// 使用 H5 的 History 路由模式
	mode: 'history',
	routes: Routers
}

const router = new VueRouter(RouterConfig);

// router.beforeEach((to, from, next) => {
// 	window.document.title = to.meta.title;
// 	next();
// });

new Vue({
	el: '#app',
	router: router,
	render: h => {
		return h(App)
	}
});