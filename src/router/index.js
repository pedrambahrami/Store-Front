import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import Home from '@/views/Home.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import Checkout from '@/views/Checkout.vue'
import Shop from '@/views/Shop.vue'
import AuthForm from '@/views/AuthForm.vue'
import Dashboard from '@/views/admin/Dashboard.vue'
import Products from '@/views/admin/Products.vue'
import Orders from '@/views/admin/Orders.vue'
import Categories from '@/views/admin/Categories.vue'
import Customers from '@/views/admin/Customers.vue'
import Settings from '@/views/admin/Settings.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/product/:id', component: ProductDetails },
  { path: '/cart', component: () => import('@/views/Cart.vue') },
  { path: '/checkout', component: Checkout },
  { path: '/shop', component: Shop },
  { path: '/auth', name: 'AuthForm', component: AuthForm },

  // 🔹 اضافه کردن مسیرهای ورود و تایید کد
  {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/AuthForm.vue')
  },
  {
    path: '/OTP',
    name: 'VerifyOtp',
    component: () => import('@/views/OtpVerify.vue')
    
  },

  {
    path: '/admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'products', component: Products },
      { path: 'orders', component: Orders },
      { path: 'categories', component: Categories },
      { path: 'customers', component: Customers },
      { path: 'settings', component: Settings }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
