<template>
  <div class="container my-10">
    <div v-if="cartStore.items.length === 0" class="text-center text-gray-500">
      سبد خرید شما خالی است 😢
    </div>

    <div v-else class="overflow-x-auto">
      <table class="w-full border">
        <thead>
          <tr class="bg-gray-100 text-right">
            <th class="p-3">محصول</th>
            <th class="p-3">قیمت</th>
            <th class="p-3">تعداد</th>
            <th class="p-3">جمع کل</th>
            <th class="p-3">حذف</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in cartStore.items"
            :key="item.id"
            class="border-b"
          >
            <!-- Image + Name -->
            <td class="p-3 flex items-center gap-2">
              <img :src="item.product.image" alt="product" class="w-16 h-16 object-cover rounded" />
              <span>{{ item.product.name }}</span>
            </td>

            <!-- Price -->
            <td class="p-3">{{ formatPrice(item.price) }}</td>

            <!-- Qty Control -->
            <td class="p-3">
              <div class="flex items-center gap-2">
                <button @click="decreaseQty(item)" class="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>{{ item.quantity }}</span>
                <button @click="increaseQty(item)" class="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
            </td>

            <!-- Total Price per Item -->
            <td class="p-3">{{ formatPrice(item.price * item.quantity) }}</td>

            <!-- Remove -->
            <td class="p-3">
              <button
                @click="cartStore.removeFromCart(item.id)"
                class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
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

function increaseQty(item) {
  // TODO: Send API request to update qty in backend
  item.quantity++
}

function decreaseQty(item) {
  if (item.quantity > 1) {
    item.quantity--
    // TODO: Send API request to update qty in backend
  }
}
</script>
