<script setup>
import { ref, onMounted, computed } from "vue";
import { useCategoryStore } from "@/stores/categoryStore";

const store = useCategoryStore();

const newCategory = ref("");
const newImage = ref(null);
const previewImage = ref(null);

const selectedLevel1 = ref(null);
const selectedLevel2 = ref(null);
const selectedLevel3 = ref(null);

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    newImage.value = file;
    previewImage.value = URL.createObjectURL(file);
  }
};

const level2Options = computed(() => {
  if (!selectedLevel1.value) return [];
  const parent = store.nested_categories.find(c => c.id === selectedLevel1.value);
  return parent ? parent.children : [];
});

const level3Options = computed(() => {
  if (!selectedLevel2.value) return [];
  const parent = level2Options.value.find(c => c.id === selectedLevel2.value);
  return parent ? parent.children : [];
});

const parentId = computed(() => {
  return selectedLevel3.value || selectedLevel2.value || selectedLevel1.value || null;
});

const addCategory = async () => {
  if (!newCategory.value.trim()) return;

  await store.addCategory({
    name: newCategory.value,
    parent_id: parentId.value,
    image: newImage.value,
  });

  newCategory.value = "";
  newImage.value = null;
  previewImage.value = null;
  selectedLevel1.value = null;
  selectedLevel2.value = null;
  selectedLevel3.value = null;

  await store.fetchCategories();
};

onMounted(async () => {
  store.loading = true;
  await store.fetchCategories();
  store.loading = false;
  console.log(store.categories);
});
</script>

<template>
  <div class="loading" v-if="store.loading">
    <p>
      دسته بندی ها در حال بارگذاری هستند...
    </p>
    <i class="fa fa-loader"></i>
  </div>
  <div class="categories" v-else>
    <h2 class="title">📂 دسته‌بندی‌ها</h2>

    <div class="add-section">
      <input
        type="text"
        v-model="newCategory"
        placeholder="نام دسته‌بندی جدید"
        class="input-text"
      />

      <select v-model="selectedLevel1" class="input-text">
        <option :value="''">دسته‌بندی اصلی</option>
        <option
          v-for="cat in store.nested_categories"
          :key="cat.id"
          :value="cat.id"
        >
          {{ cat.name }}
        </option>
      </select>

      <select v-if="level2Options.length" v-model="selectedLevel2" class="input-text">
        <option :value="null">انتخاب زیر‌دسته</option>
        <option
          v-for="cat in level2Options"
          :key="cat.id"
          :value="cat.id"
        >
          {{ cat.name }}
        </option>
      </select>

      <select v-if="level3Options.length" v-model="selectedLevel3" class="input-text">
        <option :value="null">انتخاب زیر‌زیر‌دسته</option>
        <option
          v-for="cat in level3Options"
          :key="cat.id"
          :value="cat.id"
        >
          {{ cat.name }}
        </option>
      </select>

      <input
        type="file"
        accept="image/*"
        @change="handleImageUpload"
        class="file-input"
      />

      <div v-if="previewImage" class="preview">
        <img :src="previewImage" alt="پیش‌نمایش" />
      </div>

      <button class="add-btn" @click="addCategory">➕ افزودن دسته‌بندی</button>
    </div>

    <ul class="category-list">
      <li
        v-for="category in store.categories"
        :key="category.id"
        class="category-item"
      >
        <span class="category-name">{{ category.name }}</span>
        <img
          v-if="category.image"
          :src="category.image"
          alt="عکس"
          class="category-image"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.categories {
  font-family: var(--title-font);
  direction: rtl;
  text-align: right;
  width: 60%; 
  margin: 0; 
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin: auto;
}

.title {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #1f2937;
}

.add-section {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.input-text {
  padding: 0.6rem 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s;
}
.input-text:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.file-input {
  font-size: 18px;
  border-radius: 10px;
  margin: 0 auto; 
  display: block; 
}

.add-btn {
  background-color: #2563eb;
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s;
}
.add-btn:hover {
  background-color: #1d4ed8;
  transform: translateY(-1px);
}
.add-btn:active {
  transform: translateY(0);
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-item {
  padding: 0.6rem 0.8rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.category-name {
  font-size: 0.95rem;
  color: #374151;
}

.category-image {
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 0.375rem;
  border: 1px solid #e5e7eb;
}

.preview img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
}

.loading {
  text-align: center;
  font-size: 1rem;
  color: #6b7280;
  margin: 1rem 0;
}
</style>
