<template>
  <div class="container my-10">
    <div class="flex flex-col lg:flex-row gap-6">
      
      <!-- Coupon Code -->
      <div class="flex-1 border p-4 rounded">
        <h3 class="text-xl font-semibold mb-3">کد تخفیف</h3>
        <div class="flex gap-2">
          <input
            v-model="coupon"
            type="text"
            class="border rounded p-2 flex-1"
            placeholder="کد تخفیف را وارد کنید"
          />
          <button @click="applyCoupon" class="bg-gray-800 text-white px-4 py-2 rounded">
            اعمال
          </button>
        </div>
      </div>

      <!-- Summary -->
      <div class="flex-1 border p-4 rounded">
        <h3 class="text-xl font-semibold mb-3">جمع سبد خرید</h3>

        <div class="flex justify-between mb-2">
          <span>جمع کل محصولات</span>
          <span>{{ formatPrice(subtotal) }}</span>
        </div>

        <div class="flex justify-between font-bold text-lg border-t pt-2">
          <span>مبلغ نهایی</span>
          <span>{{ formatPrice(total) }}</span>
        </div>

        <button
          class="mt-4 w-full bg-green-600 text-white py-3 rounded text-lg hover:bg-green-700 transition"
        >
          ادامه جهت پرداخت
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()
const coupon = ref('')
const discount = ref(0)

const subtotal = computed(() =>
  cartStore.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const total = computed(() => subtotal.value - discount.value)

function applyCoupon() {
  if (coupon.value === 'DISCOUNT50') {
    discount.value = subtotal.value * 0.5
    alert('کد تخفیف اعمال شد ✅')
  } else {
    discount.value = 0
    alert('کد تخفیف معتبر نیست ❌')
  }
}

function formatPrice(value) {
  return new Intl.NumberFormat('fa-IR').format(value) + ' تومان'
}
</script>
