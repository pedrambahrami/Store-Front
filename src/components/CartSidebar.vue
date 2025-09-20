<template>
  <div class="sidemenu-content">
    <button class="closeButton sideMenuCls" @click="$emit('close')">
      <i class="far fa-times"></i>
    </button>

    <div class="widget woocommerce widget_shopping_cart">
      <h3 class="widget_title">سبد خرید</h3>

      <div class="widget_shopping_cart_content">
        <ul class="woocommerce-mini-cart cart_list product_list_widget">
          <li
            v-for="(item, index) in cartItems"
            :key="index"
            class="woocommerce-mini-cart-item mini_cart_item"
          >
            <a href="#" class="remove remove_from_cart_button" @click.prevent="removeFromCart(item.id)">
              <i class="far fa-times"></i>
            </a>
            <a href="#">
              <img :src="item.product.image" alt="Cart Image" />
            </a>
            <span class="quantity">
              {{ item.quantity }} ×
              <span class="woocommerce-Price-amount amount">
                <span class="woocommerce-Price-currencySymbol">تومان</span>
                {{ item.product.price }}
              </span>
            </span>
          </li>
        </ul>

        <p class="woocommerce-mini-cart__total total">
          <strong>مجموع فرعی:</strong>
          <span class="woocommerce-Price-amount much">
            <span class="woocommerce-Price-currencySymbol">تومان</span>
            {{ totalPrice }}
          </span>
        </p>

        <p class="woocommerce-mini-cart__buttons buttons">
          <a href="/cart" class="ot-btn wc-forward">مشاهده سبد خرید</a>
          <a href="/checkout" class="ot-btn checkout wc-forward">تسویه حساب</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore';
const cartStore = useCartStore()
onMounted(() => {
  cartStore.getusercart()
})
const cartItems = cartStore.items

function removeItemFromCart(id) {
  return cartStore.removeFromCart(id);
}

const totalPrice = 0
</script>

<style>
.sidemenu-content {
  position: fixed;
  top: 0;
  left: 0; 
  width: 650px;
  max-width: 90%;
  height: 100%;
  background: #fff;
  z-index: 100; 
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  overflow-y: auto;
  direction: rtl;
  border-radius: 20px;
}

.closeButton {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  right: 15px;
  top: 15px;
}

.widget_title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}

.woocommerce-mini-cart {
  list-style: none;
  padding: 0;
  margin: 0;
}

.woocommerce-mini-cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

.woocommerce-mini-cart-item img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-left: 10px;
  border-radius: 8px;
}

.woocommerce-mini-cart-item a {
  flex: 1;
  font-size: 14px;
  color: #333;
  text-decoration: none;
}

.remove_from_cart_button {
  margin-left: 10px;
  color: #d33;
  cursor: pointer;
}

.quantity {
  font-size: 13px;
  color: #666;
}

.woocommerce-mini-cart__total {
  margin-top: 20px;
  font-weight: bold;
  font-size: 15px;
}

.woocommerce-mini-cart__buttons {
  margin-top: 15px;
  display: flex;
  gap: 10px;
}

.ot-btn {
  flex: 1;
  padding: 8px 12px;
  border: none;
  background: #ff6f61;
  color: #fff;
  font-size: 14px;
  text-align: center;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
}

.ot-btn.checkout {
  background: #28a745;
}

.ot-btn:hover {
  opacity: 0.9;
}
</style>
