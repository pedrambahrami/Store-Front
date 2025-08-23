<script setup>
import { ref } from "vue";

const settings = ref({
  storeName: "بیبی مارت",
  supportEmail: "help24/7@babymart.com",
});

function saveSettings() {
  alert("تنظیمات ذخیره شد!");
}
</script>

<template>
  <div class="settings">
    <h2 class="title">تنظیمات</h2>
    <div class="form-grid">
      <div class="form-group">
        <label>نام فروشگاه</label>
        <input type="text" v-model="settings.storeName" />
      </div>
      <div class="form-group">
        <label>ایمیل پشتیبانی</label>
        <input type="email" v-model="settings.supportEmail" />
      </div>
    </div>
    <button @click="saveSettings" class="save-btn">
      ذخیره تغییرات
    </button>
  </div>
</template>

<style scoped>
.settings {
  font-family: 'Vazir', sans-serif;
  direction: rtl;
  text-align: right;
}

.title {
  font-size: 1.5rem; 
  font-weight: bold;
  margin-bottom: 1rem; 
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 1rem;
}

.form-group label {
  display: block; 
  margin-bottom: 0.5rem; 
}

.form-group input {
  width: 100%; 
  padding: 0.5rem; 
  border: 1px solid #ccc; 
  border-radius: 0.25rem; 
}

.save-btn {
  background-color: #2563eb; 
  color: white; 
  padding: 0.5rem 1rem; 
  border-radius: 0.25rem; 
  border: none;
  cursor: pointer;
  margin-top: 1rem;
}

.save-btn:hover {
  background-color: #1d4ed8; 
}
</style>
