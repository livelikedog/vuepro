import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/pages/index';
import DetailPage from '@/pages/detail';
import Analysis from '@/components/detail/analysis';
import Publish from '@/components/detail/publish';
import Count from '@/components/detail/count';
import Forecast from '@/components/detail/forecast';
import OrderListPage from '@/pages/orderList';

Vue.use(Router)

export default new Router({
	routes: [
	    {
	      path: '/',
	      name: 'IndexPage	',
	      component: IndexPage
	    },
	    {
			path: '/orderList',
			component: OrderListPage
		},
	    {
	    	path:'/detail',
	    	name:'DetailPage',
	    	component:DetailPage,
	    	redirect:'/detail/analysis',
	    	children:[
	    		{
	    			path:'forecast',
	    			component:Forecast
	    		},
	    		{
	    			path:'analysis',
	    			component:Analysis
	    		},
	    		{
	    			path:'count',
	    			component:Count
	    		},
	    		{
	    			path:'publish',
	    			component:Publish
	    		}
	    	]
	    }
	]
})
