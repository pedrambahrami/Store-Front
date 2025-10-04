<template>
  <div class="admin-layout">
   
    <aside class="sidebar" :class="{ closed: !sidebarOpen }">
      <div class="logo">
        <span>🛒</span>
        <span>بیبی مارت</span>
      </div>
      <nav>
        <ul>
          <li v-for="item in menuItems" :key="item.path">
            <router-link :to="item.path" class="menu-link" :class="{ active: isActive(item.path) }">
              <span class="icon">{{ item.icon }}</span>
              <span class="label">{{ item.label }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <main class="main-content" @click="handleMainClick">
      <header class="admin-header">
        <button class="toggle-btn" @click.stop="sidebarOpen = true">☰</button>
        <h1>پنل مدیریت</h1>
        <p>مدیریت فروشگاه بیبی مارت</p>
      </header>

      <section class="admin-section">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()

const menuItems = [
  { path: '/admin/dashboard', label: 'داشبورد', icon: '📊' },
  { path: '/admin/products', label: 'مدیریت محصولات', icon: '🛍️' },
  { path: '/admin/orders', label: 'سفارشات', icon: '📦' },
  { path: '/admin/categories', label: 'دسته‌بندی‌ها', icon: '📂' },
  { path: '/admin/customers', label: 'مشتریان', icon: '👥' },
  { path: '/admin/settings', label: 'تنظیمات', icon: '⚙️' },
]

const isActive = (path) => route.path === path
const sidebarOpen = ref(false)

const handleMainClick = () => {
  if (sidebarOpen.value) {
    sidebarOpen.value = false
  }
}
</script>

<style scoped>

.admin-layout {
  font-family: var(--title-font);
  direction: rtl;
  display: flex;
  min-height: 100vh;
  background-color: #8f9cb4;
}


.sidebar {
  width: 18rem;
  background: linear-gradient(180deg, #1e3a8a, #000308);
  color: white;
  padding: 1.5rem;
  transition: all 0.3s ease;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.15);
}

.sidebar.closed {
  width: 0;
  padding: 0;
  opacity: 0;
  overflow: hidden;
}


.logo {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 2rem;
  gap: 0.5rem;
}


nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.menu-link:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(-3px);
}

.menu-link.active {
  background: rgba(255, 255, 255, 0.25);
  font-weight: bold;
}


.icon {
  font-size: 1.2rem;
}

.main-content {
  flex: 1;
  padding: 2rem;
}
.admin-header h1 {
  font-size: 2rem; 
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.admin-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 0.5rem;
}
.admin-header p{
  margin-top: 15px;
}
.toggle-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
