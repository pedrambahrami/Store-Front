<template>
  <div class="products">
    <h2 class="title">مدیریت محصولات</h2>
    <div class="products-label">
      <label class="product-label"> نام محصول:</label>
      <input class="input-label" type="text" v-model="productStore.productForm.name" />
      <label class="product-label">قیمت محصول:</label>
      <input class="input-label" type="number" v-model="productStore.productForm.price" />
      <label class="product-label">موجودی: </label>
      <input class="input-label" type="number" v-model="productStore.productForm.inventory" />
      <label class="product-label">توضیحات درباره محصول: </label>
      <input class="input-label" type="text" v-model="productStore.productForm.description" />
      <label class="product-label">عکس محصول:</label>
      <input class="input-label" type="file" accept="image/*" @change="onFileChange" />
    </div>

    <div class="add-product-form" @keypress.enter="saveProduct">
      <div v-for="field in fields" :key="field.key">
        <input
          v-model="productForm[field.key]"
          :placeholder="field.label"
          :type="field.type"
          :disabled="productStore.loading"
        />
      </div>

      <button
        class="add-btn"
        @click="
          productStore.editingProductId
            ? productStore.updateProduct()
            : productStore.createProduct()
        "
      >
        {{ productStore.editingProductId ? 'ویرایش محصول' : 'افزودن محصول جدید' }}
      </button>

      <button v-if="editingProductId" @click="resetForm" class="cancel-btn">انصراف</button>
    </div>

    <table class="products-table">
      <thead>
        <tr>
          <th>نام محصول</th>
          <th>قیمت</th>
          <th>موجودی</th>
          <th>عکس محصول</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.allProducts" :key="product.id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <img
              v-if="product.image"
              :src="product.image"
              :alt="product.name"
              style="width: 60px; height: 60px; object-fit: cover; border-radius: 6px"
            />
            <span v-else>بدون تصویر</span>
          </td>
          <td>
            <button @click="productStore.startEdit(product)" class="edit-product">ویرایش</button>

            <button @click="productStore.deleteProduct(product.id)" class="delete-product">
              حذف
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { useProductStore } from '@/stores/productstore'
import { onMounted } from 'vue'
const productStore = useProductStore()
// هندل دکمه
onMounted(() => {
  productStore.getAllProducts()
})
const onFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    productStore.productForm.image = file
    
  }
}

</script>
<style scoped>
.products {
  direction: rtl;
  text-align: right;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  font-family: 'Vazirmatn', sans-serif;
}

.title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1.5rem;
}

/* فرم افزودن محصول */
.add-product-form {
  font-family: var(--title-font);
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}
.add-product-form input {
  padding: 0.6rem 0.8rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  flex: 1;
  min-width: 200px;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}
.add-product-form input:focus {
  border-color: #2563eb;
  outline: none;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}
.add-btn {
  font-family: var(--title-font);
  background-color: #2563eb;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}
.add-btn:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}
.cancel-btn {
  font-family: var(--title-font);
  background-color: #6b7280;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}
.cancel-btn:hover {
  background-color: #4b5563;
}

/* جدول محصولات */
.products-table {
  font-family: var(--title-font);
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.products-table thead tr {
  background-color: #f1f5f9;
}
.products-table th,
.products-table td {
  padding: 0.85rem 1rem;
  font-size: 0.95rem;
}
.products-table th {
  color: #475569;
  font-weight: 600;
}
.products-table tbody tr {
  border-bottom: 1px solid #e2e8f0;
  transition: background 0.2s ease;
}
.products-table tbody tr:hover {
  background-color: #f8fafc;
}

/* دکمه‌های ویرایش و حذف */
.edit-product,
.delete-product {
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.edit-product {
  font-family: var(--title-font);
  background-color: #2563eb;
  color: white;
}
.edit-product:hover {
  background-color: #1d4ed8;
}
.delete-product {
  font-family: var(--title-font);
  background-color: #dc2626;
  color: white;
  margin-right: 0.4rem;
}
.delete-product:hover {
  background-color: #b91c1c;
}

/* فیلدهای بالای فرم (label + input) */
.products-label {
  width: 100%;
  display: flex;
  flex-direction: column; /* لیبل‌ها و ورودی‌ها زیر هم */
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.product-label {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.input-label {
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  padding: 0.5rem 0.7rem;
  font-size: 0.9rem;
}
.input-label:focus {
  border-color: #2563eb;
  outline: none;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.15);
}
</style>
