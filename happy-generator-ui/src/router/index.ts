import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const menuRoutes: RouteRecordRaw[] = [
	{
		path: '/p/gen',
		meta: {
			title: '代码生成器',
			icon: 'icon-appstore'
		},
		children: [
			{
				path: '/gen/datasource',
				name: 'DataSource',
				component: () => import('../views/datasource/index.vue'),
				meta: {
					title: '数据源管理',
					icon: 'icon-database-fill'
				}
			},

			{
				path: '/gen/fieldtype',
				name: 'FieldType',
				component: () => import('../views/fieldtype/index.vue'),
				meta: {
					title: '类型映射',
					icon: 'icon-menu'
				}
			},
			{
				path: '/gen/baseclass',
				name: 'BaseClass',
				component: () => import('../views/baseclass/index.vue'),
				meta: {
					title: '基类管理',
					icon: 'icon-cluster'
				}
			},
			{
				path: '/gen/project',
				name: 'ProjectIndex',
				component: () => import('../views/project/index.vue'),
				meta: {
					title: '项目配置',
					icon: 'icon-edit-square'
				}
			},
			{
				path: '/gen/generator',
				name: 'Generator',
				component: () => import('../views/generator/index.vue'),
				meta: {
					title: '代码生成',
					icon: 'icon-fire'
				}
			}

		]
	}
]

export const constantRoutes: RouteRecordRaw[] = [
	{
		path: '/redirect',
		component: () => import('../layout/index.vue'),
		children: [
			{
				path: '/redirect/:path(.*)',
				component: () => import('../layout/components/Router/Redirect.vue')
			}
		]
	},
	{
		path: '/',
		component: () => import('../layout/index.vue'),
		redirect: '/gen/generator',
		children: [...menuRoutes]
	},
	{
		path: '/404',
		component: () => import('../views/404.vue')
	},
	{
		path: '/:pathMatch(.*)',
		redirect: '/404'
	}
]

export const router = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes
})
