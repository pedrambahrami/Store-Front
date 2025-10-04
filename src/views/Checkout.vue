<template>
  <div class="container space rtl">
    <h2 class="text-center mb-4">تسویه حساب</h2>

    <div class="row">
      <div class="col-md-6">
        <h4>اطلاعات شما</h4>
        <form @submit.prevent="submitOrder">
          <div class="form-group mb-3">
            <label>نام کامل</label>
            <input v-model="form.name" type="text" class="form-control" required />
          </div>
          <div class="form-group mb-3">
            <label>ایمیل</label>
            <input v-model="form.email" type="email" class="form-control" required />
          </div>
          <div class="form-group mb-3">
            <label>شماره تماس</label>
            <input v-model="form.phone" type="tel" class="form-control" required />
          </div>
          <div class="form-group mb-3">
            <label>آدرس</label>
            <textarea v-model="form.address" class="form-control" required></textarea>
          </div>
          <button class="ot-btn" type="submit">ثبت سفارش</button>
        </form>
      </div>

      <div class="col-md-6">
        <h4>سفارش شما</h4>
        <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between" v-for="item in cart.items" :key="item.id">
            <span>{{ item.title }} × {{ item.quantity }}</span>
            <strong>{{ item.price * item.quantity }} تومان</strong>
          </li>
        </ul>
        <p class="text-end"><strong>مبلغ کل: {{ cart.totalPrice }} تومان</strong></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cart = useCartStore()

const form = ref({
  name: '',
  email: '',
  phone: '',
  address: ''
})

const submitOrder = () => {
  if (cart.items.length === 0) {
    alert('سبد خرید شما خالی است!')
    return
  }

  console.log('🛍 اطلاعات سفارش:', form.value)
  console.log('🧾 سبد خرید:', cart.items)

  alert('✅ سفارش با موفقیت ثبت شد!')

  cart.clearCart()
  form.value = { name: '', email: '', phone: '', address: '' }
}
</script>
