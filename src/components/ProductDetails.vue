<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'

const route = useRoute()
const cart = useCartStore()

const products = [
  {
    id: 1,
    title: 'عروسک خرسی',
    image: '/img/product/post-card1-9.png',
    price: 390000,
    description: 'عروسکی نرم و بزرگ برای کودکان بالای ۳ سال.',
  },
  {
    id: 2,
    title: 'ماشین کنترلی',
    image: '/img/product2.jpg',
    price: 490000,
    description: 'ماشین کنترل از راه دور با باتری قابل شارژ.',
  },
  {
    id: 3,
    title: 'لگو آموزشی',
    image: '/img/product3.jpg',
    price: 250000,
    description: 'قطعات لگو برای تقویت مهارت ساخت و خلاقیت.',
  },
]

const product = ref(null)

const loadProduct = (id) => {
  const productId = parseInt(id)
  product.value = products.find((p) => p.id === productId)
}

loadProduct(route.params.id)

watch(
  () => route.params.id,
  (newId) => {
    loadProduct(newId)
  },
)

const addToCart = () => {
  if (product.value) {
    cart.addToCart(product.value)
    console.log('✅ به سبد خرید اضافه شد:', cart.items)
  }
}
</script>
