<template>
  <div v-if="!cartStore.loading" class="cart-container rtl">
    <div v-if="cartStore.items.length === 0" class="empty-cart">سبد خرید شما خالی است 😢</div>

    <div v-else class="table-wrapper">
      <table class="cart-table">
        <thead>
          <tr>
            <th>محصول</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>جمع کل</th>
            <th>حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.items" :key="item.id">
            <td class="product-cell">
              <img :src="item.product.image" alt="product" />
              <span>{{ item.product.name }}</span>
            </td>
            <td>{{ formatPrice(item.price) }}</td>
            <td>
              <div class="qty-control">
                <button @click="decreaseQty(item)">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQty(item)">+</button>
              </div>
            </td>
            <td>{{ formatPrice(item.price * item.quantity) }}</td>
            <td>
              <button @click="removeItem(item.id)" class="remove-btn">حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div v-else class="cart-container">
    <i class="fa fa-loader empty-cart"></i>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

onMounted(() => {
  cartStore.getusercart() 
})

function formatPrice(value) {
  return new Intl.NumberFormat('fa-IR').format(value) + ' تومان'
}

async function increaseQty(item) {
  await cartStore.addToCartItem(item.id)
}

async function decreaseQty(item) {
  await cartStore.subtractFromCartItem(item.id)
}

function removeItem(id) {
  cartStore.removeFromCart(id)
  
}
</script>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 15px;
  font-family: 'Tahoma', sans-serif;
}

.empty-cart {
  text-align: center;
  font-size: 20px;
  color: #666;
  padding: 60px 0;
  background-color: #fdfdfd;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}


.table-wrapper {
  overflow-x: auto;
}

.cart-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
  min-width: 600px;
}

.cart-table th,
.cart-table td {
  padding: 14px 15px;
  text-align: right;
}

.cart-table th {
  background-color: #f7f7f7;
  font-weight: 600;
  color: #333;
  border-bottom: 2px solid #e0e0e0;
  border-radius: 6px;
}

.cart-table tbody tr {
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.cart-table tbody tr:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.product-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.product-cell img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.qty-control {
  display: flex;
  align-items: center;
  gap: 6px;
}

.qty-control button {
  width: 32px;
  height: 32px;
  border: 1px solid #ccc;
  background-color: #fafafa;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.2s;
}

.qty-control button:hover {
  background-color: #e0e0e0;
  transform: scale(1.05);
}

.remove-btn {
  background-color: #e74c3c;
  color: white;
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}

.remove-btn:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}


@media (max-width: 1024px) {
  .cart-table th,
  .cart-table td {
    padding: 10px 12px;
  }

  .product-cell img {
    width: 50px;
    height: 50px;
  }

  .qty-control button {
    width: 28px;
    height: 28px;
  }

  .remove-btn {
    padding: 6px 12px;
  }
}

@media (max-width: 768px) {
  .cart-table {
    min-width: 100%;
  }
}
</style>
