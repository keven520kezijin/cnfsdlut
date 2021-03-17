import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/dashboard'),
      meta: { title: '首页' }
    }]
  },

  {
    path: '/news',
    component: Layout,
    hidden: true,
    redirect: '/news',
    children: [{
      path: '/news',
      name: 'News',
      hidden: true,
      component: () => import('@/views/import-news/import-news'),
      meta: { title: '重要新闻' }
    }]
  },

  {
    path: '/connections',
    component: Layout,
    redirect: '/connections',
    children: [{
      path: '/connections',
      name: 'Connections',
      component: () => import('@/views/connections/connections'),
      meta: { title: '学术合作' }
    }]
  },
  {
    path: '/events',
    component: Layout,
    redirect: '/events',
    children: [{
      path: '/events',
      name: 'Events',
      component: () => import('@/views/events/events'),
      meta: { title: '大会和活动' }
    }]
  },
  {
    path: '/jobs',
    component: Layout,
    redirect: '/jobs',
    children: [{
      path: '/jobs',
      name: 'Jobs',
      component: () => import('@/views/jobs/jobs'),
      meta: { title: '招贤纳士' }
    }]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about',
    children: [{
      path: '/about',
      name: 'About',
      component: () => import('@/views/about/about'),
      meta: { title: '关于我们' }
    }]
  },
  // {
  //   path: '/enterprise4',
  //   component: Layout,
  //   redirect: '/enterprise',
  //   children: [{
  //     path: '/enterprise4',
  //     name: 'Enterprise',
  //     component: () => import('@/views/dashboard/dashboard'),
  //     meta: { title: 'Microsoft Research' }
  //   }]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
