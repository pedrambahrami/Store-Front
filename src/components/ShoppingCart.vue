<template>
  <div class="ot-cart-wrapper space-top space-extra-bottom rtl">
    <div class="container">
      <table class="cart_table" v-if="cartStore.items.length > 0">
        <thead>
          <tr>
            <th colspan="3" class="cart-col-image">محصول</th>
            <th class="cart-col-price">قیمت</th>
            <th class="cart-col-quantity">تعداد</th>
            <th class="cart-col-total">جمع</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.items" :key="item.id" class="cart_item">
            <td>
              <button @click="removeItem(item.id)" class="remove">
                <i class="far fa-close"></i>
              </button>
            </td>
            <td>
              <img :src="item.image" width="91" height="91" :alt="item.title" />
            </td>
            <td>{{ item.title }}</td>
            <td>{{ item.price.toLocaleString() }} تومان</td>
            <td>
              <div class="quantity">
                <button @click="decreaseQuantity(item)" class="quantity-minus qty-btn">
                  <i class="far fa-minus"></i>
                </button>
                <input type="number" class="qty-input" v-model.number="item.quantity" min="1" max="99" />
                <button @click="increaseQuantity(item)" class="quantity-plus qty-btn">
                  <i class="far fa-plus"></i>
                </button>
              </div>
            </td>
            <td>{{ (item.price * item.quantity).toLocaleString() }} تومان</td>
          </tr>

          <tr>
            <td colspan="6" class="actions">
              <div class="ot-cart-coupon">
                <input type="text" class="form-control" placeholder="کد کوپن ..." />
                <button type="button" class="ot-btn">اعمال کوپن</button>
              </div>
              <a href="/shop" class="ot-btn">ادامه خرید</a>
            </td>
          </tr>
        </tbody>
      </table>

      <div v-else class="text-center py-10">
        <h3>سبد خرید شما خالی است 😢</h3>
        <a href="/shop" class="ot-btn mt-4">رفتن به فروشگاه</a>
      </div>

      <div v-if="cartStore.items.length > 0" class="row justify-content-end mt-5">
        <div class="col-md-8 col-lg-7 col-xl-6">
          <h2 class="h4 summary-title">مجموع سبد خرید</h2>
          <table class="cart_totals">
            <tbody>
              <tr>
                <td>جمع کل محصولات</td>
                <td>{{ totalPrice.toLocaleString() }} تومان</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="order-total">
                <td>مجموع سفارش</td>
                <td><strong>{{ totalPrice.toLocaleString() }} تومان</strong></td>
              </tr>
            </tfoot>
          </table>
          <div class="wc-proceed-to-checkout mb-30">
            <a href="/checkout" class="ot-btn">ادامه به پرداخت</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cartStore'

const cartStore = useCartStore()

function removeItem(id) {
  cartStore.removeFromCart(id)
}

function increaseQuantity(item) {
  item.quantity++
}

function decreaseQuantity(item) {
  if (item.quantity > 1) {
    item.quantity--
  } else {
    removeItem(item.id)
  }
}

const totalPrice = computed(() =>
  cartStore.items.reduce((sum, p) => sum + p.price * p.quantity, 0)
)
</script>
