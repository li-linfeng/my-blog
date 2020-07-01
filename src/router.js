import Vue from 'vue'
import Router from 'vue-router'

import basicLayout from "@/layouts/basicLayout"
import adminLayout from "@/layouts/adminLayout"


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: basicLayout,
      children: [
        {
          path: '',
          redirect: 'index'
        },
        {
          path: 'index',
          name: 'index',
          component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue')
        },
        {
          path: 'categorys',
          name: 'categorys',
          component: () => import(/* webpackChunkName: "index" */ '@/views/Category.vue')
        },
        {
          path: 'tags',
          name: 'tags',
          component: () => import(/* webpackChunkName: "index" */ '@/views/Tags.vue')
        },
        {
          path: 'timeline',
          name: 'timeline',
          component: () => import(/* webpackChunkName: "index" */ '@/views/Timeline.vue')
        },
        {
          path: 'category/:id',
          name: 'cateDetail',
          component: () => import(/* webpackChunkName: "index" */ '@/views/CateDetail.vue')
        },
        {
          path: 'tag/:id',
          name: 'tagDetail',
          component: () => import(/* webpackChunkName: "index" */ '@/views/TagDetail.vue')
        }
      ]
    },
    {
      path:'/admin',
      component: adminLayout,
      children: [
        {
          path: '',
          name: 'articles',
          component: () => import(/* webpackChunkName: "index" */ '@/views/admin/Article.vue')
        },
        {
          path: '/article-create',
          name: 'article-create',
          component: () => import(/* webpackChunkName: "index" */ '@/views/admin/ArticleCreate.vue')
        },
      ]
    }
  ]
})
export default router