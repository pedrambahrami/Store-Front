<template>
  <div class="orders">
    <h2 class="title">سفارشات</h2>

    <div v-if="orderStore.loading">در حال بارگذاری...</div>
    <div v-else-if="orderStore.error" class="error">{{ orderStore.error }}</div>
    <table v-else class="orders-table">
      <thead>
        <tr>
          <th>شماره سفارش</th>
          <th>مشتری</th>
          <th>مبلغ</th>
          <th>وضعیت</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="order in orderStore.orders" :key="order.id">
          <td>{{ order.id }}</td>
          <td>{{ order.customer }}</td>
          <td>{{ order.amount }}</td>
          <td>{{ order.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
// import { onMounted } from "vue"
// import { useOrderStore } from "@/stores/orderStore"

const orderStore = useOrderStore()

onMounted(() => {
  orderStore.loadOrders()
})
</script>

<style scoped>
.orders {
  
  direction: rtl;
  text-align: right;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem; 
}

.orders-table {
  width: 100%; 
  border-collapse: collapse;
  text-align: right; 
}

.orders-table thead tr {
  background-color: #e5e7eb; 
}

.orders-table th,
.orders-table td {
  padding: 0.75rem;
}

.orders-table tbody tr {
  border-bottom: 1px solid #e5e7eb; 
}
</style>
