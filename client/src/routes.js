import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginForm from './components/LoginForm';
import AddUser from './components/AddUser';
import About from './components/About';
import List from './components/List';
import Four0Four from './components/404';

Vue.use(VueRouter);

export const router = new VueRouter({
	mode: 'history',
	routes: [
		{ path: '', component: LoginForm },
		{ path: '/about', component: About },
		{ path: '/create/user', component: AddUser },
		{ path: '/user', component: List },
		{ path: '*', component: Four0Four },
	]
});
