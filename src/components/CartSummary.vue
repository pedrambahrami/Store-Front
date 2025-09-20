<template>
  <div class="cart-summary-container">
    <div class="cart-summary-wrapper">

      <!-- Coupon Code -->
      <div class="coupon-box container rtl ">
        <h3>کد تخفیف</h3>
        <div class="coupon-input-wrapper">
          <input v-model="coupon" type="text" placeholder="کد تخفیف را وارد کنید" />
          <button @click="applyCoupon">اعمال</button>
        </div>
      </div>

      <!-- Summary -->
      <div class="summary-box  container rtl">
        <h3>جمع سبد خرید</h3>

        <div class="summary-item">
          <span>جمع کل محصولات</span>
          <span>{{ formatPrice(subtotal) }}</span>
        </div>

        <div class="summary-item total">
          <span>مبلغ نهایی</span>
          <span>{{ formatPrice(total) }}</span>
        </div>

        <button class="checkout-btn">ادامه جهت پرداخت</button>
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

<style scoped>
.cart-summary-container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 15px;
}

.cart-summary-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media(min-width: 1024px) {
  .cart-summary-wrapper {
    flex-direction: row;
    gap: 30px;
  }
}

/* Coupon Box */
.coupon-box, .summary-box {
  flex: 1;
  border: 1px solid #ddd;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  transition: box-shadow 0.3s ease;
}

.coupon-box:hover, .summary-box:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.coupon-box h3, .summary-box h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
}

.coupon-input-wrapper {
  display: flex;
  gap: 10px;
}

.coupon-input-wrapper input {
  flex: 1;
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
}

.coupon-input-wrapper input:focus {
  outline: none;
  border-color: #28a745;
  box-shadow: 0 0 3px rgba(40,167,69,0.5);
}

.coupon-input-wrapper button {
  padding: 10px 20px;
  background-color: #28a745;
  border: none;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s;
}

.coupon-input-wrapper button:hover {
  background-color: #218838;
}

/* Summary Box */
.summary-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 16px;
  color: #555;
}

.summary-item.total {
  border-top: 1px solid #eee;
  padding-top: 12px;
  font-weight: bold;
  font-size: 18px;
  color: #000;
}

.checkout-btn {
  margin-top: 20px;
  width: 100%;
  padding: 12px 0;
  background-color: #28a745;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: #218838;
}
</style>
