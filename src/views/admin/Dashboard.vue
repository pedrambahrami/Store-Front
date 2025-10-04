<template>
  <div class="dashboard">
    <header class="dashboard-header">
      <div>
        <h2 class="title">داشبورد</h2>
        <p class="subtitle">خلاصه‌ای از فعالیت‌های فروشگاه: فروش، سفارشات جدید، و آمار مشتریان.</p>
      </div>

      <div class="quick-actions">
        <button class="btn btn-primary">افزودن محصول</button>
        <button class="btn">سفارش جدید</button>
        <button class="btn">گزارش‌گیری</button>
      </div>
    </header>

    <div class="stats-grid">
      <div class="stat-box blue">
        <div class="stat-top">
          <h3>فروش کل</h3>
          <div :class="['growth', stats.salesGrowth >= 0 ? 'positive' : 'negative']">
            <svg v-if="stats.salesGrowth >= 0" viewBox="0 0 24 24" class="arrow">
              <path d="M12 5 L19 18 H5 Z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="arrow">
              <path d="M12 19 L5 6 H19 Z" />
            </svg>
            <span>{{ Math.abs(stats.salesGrowth) }}%</span>
          </div>
        </div>

        <p class="stat-number">تومان {{ formatNumber(stats.totalSales) }}</p>

        <svg
          class="sparkline"
          :width="120"
          :height="40"
          viewBox="0 0 120 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <polyline
            :points="sparklinePoints(stats.sparkSales, 120, 40)"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="stat-box green">
        <div class="stat-top">
          <h3>سفارشات جدید</h3>
          <div :class="['growth', stats.ordersGrowth >= 0 ? 'positive' : 'negative']">
            <svg v-if="stats.ordersGrowth >= 0" viewBox="0 0 24 24" class="arrow">
              <path d="M12 5 L19 18 H5 Z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="arrow">
              <path d="M12 19 L5 6 H19 Z" />
            </svg>
            <span>{{ Math.abs(stats.ordersGrowth) }}%</span>
          </div>
        </div>

        <p class="stat-number">{{ stats.newOrders }}</p>

        <svg
          class="sparkline"
          :width="120"
          :height="40"
          viewBox="0 0 120 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <polyline
            :points="sparklinePoints(stats.sparkOrders, 120, 40)"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      <div class="stat-box yellow">
        <div class="stat-top">
          <h3>مشتریان</h3>
          <div :class="['growth', stats.customersGrowth >= 0 ? 'positive' : 'negative']">
            <svg v-if="stats.customersGrowth >= 0" viewBox="0 0 24 24" class="arrow">
              <path d="M12 5 L19 18 H5 Z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="arrow">
              <path d="M12 19 L5 6 H19 Z" />
            </svg>
            <span>{{ Math.abs(stats.customersGrowth) }}%</span>
          </div>
        </div>

        <p class="stat-number">{{ stats.customers }}</p>

        <svg
          class="sparkline"
          :width="120"
          :height="40"
          viewBox="0 0 120 40"
          preserveAspectRatio="none"
          aria-hidden
        >
          <polyline
            :points="sparklinePoints(stats.sparkCustomers, 120, 40)"
            fill="none"
            stroke="rgba(255,255,255,0.9)"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>

    <section class="content-grid">
      <div class="card chart-card">
        <h4>نمودار فروش ماهانه</h4>
        <svg
          class="bar-chart"
          viewBox="0 0 600 200"
          preserveAspectRatio="none"
          aria-label="نمودار فروش"
        >
          <g v-for="(v, i) in monthlySales" :key="i">
            <rect
              :x="i * 40 + 10"
              :y="200 - (v / Math.max(...monthlySales)) * 160"
              width="24"
              :height="(v / Math.max(...monthlySales)) * 160"
              rx="4"
              :fill="i === currentMonthIndex ? '#4f46e5' : '#93c5fd'"
            ></rect>
          </g>
        </svg>
      </div>

      <div class="card orders-card">
        <h4>سفارشات اخیر</h4>
        <table class="orders-table">
          <thead>
            <tr>
              <th>شماره</th>
              <th>مشتری</th>
              <th>تاریخ</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in recentOrders" :key="order.id">
              <td>#{{ order.id }}</td>
              <td>{{ order.customer }}</td>
              <td>{{ order.date }}</td>
              <td>تومان {{ formatNumber(order.total) }}</td>
              <td>
                <span :class="['badge', order.status]">{{ order.statusLabel }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const stats = {
  totalSales: 4398000,
  newOrders: 12,
  customers: 245,
  salesGrowth: 12, 
  ordersGrowth: -5,
  customersGrowth: 3,
  sparkSales: [120, 160, 140, 180, 220, 200, 260],
  sparkOrders: [5, 7, 6, 9, 8, 11, 12],
  sparkCustomers: [200, 210, 205, 220, 230, 240, 245],
}

const recentOrders = ref([
  {
    id: 10234,
    customer: 'علی رضایی',
    date: '1403/05/20',
    total: 99000,
    status: 'processing',
    statusLabel: 'در حال پردازش',
  },
  {
    id: 10235,
    customer: 'سارا احمدی',
    date: '1403/05/19',
    total: 129000,
    status: 'delivered',
    statusLabel: 'تحویل شده',
  },
  {
    id: 10236,
    customer: 'مهدی قاسمی',
    date: '1403/05/18',
    total: 45000,
    status: 'cancelled',
    statusLabel: 'لغو شده',
  },
  {
    id: 10237,
    customer: 'نگار ملکی',
    date: '1403/05/17',
    total: 78000,
    status: 'processing',
    statusLabel: 'در حال پردازش',
  },
  {
    id: 10238,
    customer: 'حمید آقایی',
    date: '1403/05/16',
    total: 34000,
    status: 'delivered',
    statusLabel: 'تحویل شده',
  },
])


const monthlySales = [
  120000, 160000, 140000, 180000, 220000, 200000, 260000, 300000, 250000, 270000, 290000, 310000,
]
const currentMonthIndex = new Date().getMonth() % 12

function formatNumber(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function sparklinePoints(data = [], w = 120, h = 40) {
  if (!data || data.length === 0) return ''
  const len = data.length
  const max = Math.max(...data)
  const min = Math.min(...data)
  const denom = max - min || 1
  return data
    .map((v, i) => {
      const x = (i / (len - 1 || 1)) * w
      const y = h - ((v - min) / denom) * (h - 4) - 2
      return `${x},${y}`
    })
    .join(' ')
}
</script>

<style scoped>
:root {
  --bg: #f8fafc;
  --card: #ffffff;
  --muted: #6b7280;
  --accent: #4f46e5;
  --shadow: 0 6px 18px rgba(15, 23, 42, 0.06);
}

.dashboard {
  font-family:
    'Vazir',
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial;
  direction: rtl;
  color: #0f172a;
  padding: 1.25rem;
  background: var(--bg);
}


.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.title {
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
}

.subtitle {
  margin: 0.25rem 0 0;
  color: var(--muted);
  font-size: 0.95rem;
}


.quick-actions {
  display: flex;
  gap: 0.5rem;
}
.btn {
  background: transparent;
  border: 1px solid rgba(15, 23, 42, 0.06);
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}
.btn-primary {
  background: var(--accent);
  color: white;
  border: none;
  box-shadow: 0 6px 14px rgba(79, 70, 229, 0.12);
}


.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}


.stat-box {
  padding: 1rem;
  border-radius: 12px;
  min-height: 110px;
  color: #081129;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}

.stat-box h3 {
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(2, 6, 23, 0.8);
}

.stat-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.stat-number {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0.5rem 0 0;
}


.stat-box.blue {
  background: linear-gradient(180deg, #e6f0ff, #dbeafe);
}
.stat-box.green {
  background: linear-gradient(180deg, #e6fff1, #d1fae5);
}
.stat-box.yellow {
  background: linear-gradient(180deg, #fffbe6, #fef9c3);
}


.growth {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 700;
  font-size: 0.9rem;
}
.growth .arrow {
  width: 14px;
  height: 14px;
  fill: rgba(2, 6, 23, 0.7);
  transform: rotate(0deg);
}
.growth.positive {
  color: #065f46;
}
.growth.negative {
  color: #b91c1c;
}


.sparkline {
  position: absolute;
  left: 12px;
  bottom: 8px;
  opacity: 0.85;
  width: calc(100% - 24px);
  height: 40px;
}


.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}


.card {
  background: var(--card);
  padding: 1rem;
  border-radius: 12px;
  box-shadow: var(--shadow);
}
.chart-card h4,
.orders-card h4 {
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
}


.bar-chart {
  width: 100%;
  height: 160px;
  display: block;
}


.orders-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.95rem;
}
.orders-table th,
.orders-table td {
  padding: 0.6rem 0.5rem;
  text-align: right;
  color: #0f172a;
}
.orders-table thead th {
  border-bottom: 1px solid #eef2f7;
  color: var(--muted);
  font-weight: 600;
}
.orders-table tbody tr + tr td {
  border-top: 1px solid #f1f5f9;
}


.badge {
  display: inline-block;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  color: white;
}
.badge.delivered {
  background: #10b981;
}
.badge.processing {
  background: #f59e0b;
}
.badge.cancelled {
  background: #ef4444;
}


@media (max-width: 900px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .content-grid {
    grid-template-columns: 1fr;
  }
  .quick-actions {
    display: none;
  }
}
@media (max-width: 520px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .dashboard {
    padding: 0.75rem;
  }
  .title {
    font-size: 1.2rem;
  }
}
</style>
