<script setup>
import { ref } from 'vue'

const customers = ref([
  { id: 1, name: 'علی محمدی', email: 'ali@example.com', orders: 5 },
  { id: 2, name: 'سارا احمدی', email: 'sara@example.com', orders: 3 },
])
</script>

<template>
  <div class="customers">
    <h2 class="title">مشتریان</h2>
    <table class="customers-table">
      <thead>
        <tr>
          <th>نام</th>
          <th>ایمیل</th>
          <th>سفارشات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.name }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.orders }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.customers {
  font-family: 'Vazir', sans-serif;
  direction: rtl;
  text-align: right;
}

.title {
  font-size: 1.5rem; 
  font-weight: bold;
  margin-bottom: 1rem; 
}

.customers-table {
  width: 100%; 
  border-collapse: collapse;
  text-align: right; 
}

.customers-table thead tr {
  background-color: #e5e7eb; 
}

.customers-table th,
.customers-table td {
  padding: 0.75rem; 
}

.customers-table tbody tr {
  border-bottom: 1px solid #e5e7eb; 
}
</style>
