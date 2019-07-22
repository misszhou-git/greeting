import Vue from 'vue'
import Router from 'vue-router'
import headers from '@/components/common/header'
import welcome from '@/components/page/welcome'
import message from '@/components/page/message'
import sayhello from '@/components/page/sayhello'
import economics from '@/components/page/economics'
import articleDetil from '@/components/page/articleDetil'
import affairs from '@/components/page/affairs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
    		welcome: welcome,
    		headers: headers,
    		}
    },{
      path: '/welcome',
      name: 'welcome',
      components: {
				welcome: welcome,
				headers: headers,
				}
    },{
			path: '/message',
			name: 'message',
			components: {
				message: message,
				headers: headers,
				}
		},{
			path: '/sayhello',
			name: 'sayhello',
			components: {
				sayhello: sayhello,
				headers: headers,
				}
		},{
			path: '/economics',
			name: 'economics',
			components: {
				economics: economics,
				headers: headers,
				}
		},{
			path: '/articleDetil',
			name: 'articleDetil',
			components: {
				articleDetil: articleDetil,
				headers: headers,
				}
		},{
			path: '/affairs',
			name: 'affairs',
			components: {
				affairs: affairs,
				headers: headers,
				}
		}
  ]
})
