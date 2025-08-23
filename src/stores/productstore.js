import { defineStore } from 'pinia'
import { productService } from '@/services/productService'
import { toast } from 'vue3-toastify'

export const useProductStore = defineStore('product', {
  state: () => ({
    allProducts: [],
    dataLoading: false,

    productForm: {
      name: null,
      price: null,
      file: null,
      description: null,
    },
  }),

  actions: {
    async getAllProducts() {
      try {
        this.dataLoading = true
        const response = await productService.get()
        this.allProducts = response.data.data
        toast.success('محصولات با موفقیت بارگذاری شدند!')
      } catch (error) {
        toast.error('خطا در بارگذاری محصولات')
        console.log(error)
      } finally {
        this.dataLoading = false
      }
    },

    async createProduct() {
      try {
        const formData = new FormData()
        formData.append('name', this.productForm.name)
        formData.append('price', this.productForm.price)
        formData.append('description', this.productForm.description)

        formData.append('image', this.productForm.image)

        const response = await productService.create(formData)

        this.allProducts.push(response.data.data)
        toast.success('محصول جدید با موفقیت اضافه شد!')

        this.productForm = {
          name: null,
          price: null,
          file: null,
          description: null,
        }
      } catch (error) {
        toast.error(error.response?.data?.message || 'خطا در افزودن محصول')
        console.log(error)
      } finally {
      }
    },
    async deleteProduct(productId) {
      try {
        await productService.delete(productId)
        this.allProducts = this.allProducts.filter((p) => p.id !== productId)
        toast.success('محصول با موفقیت حذف شد!')
      } catch (error) {
        toast.error(error.response?.data?.message || 'خطا در حذف محصول')
        console.log(error)
      }
    },
    async updateProduct() {
      try {
        const formData = new FormData()
        formData.append('name', this.productForm.name)
        formData.append('price', this.productForm.price)
        formData.append('inventory', this.productForm.inventory)
        formData.append('description', this.productForm.description)
        if (this.productForm.file) formData.append('file', this.productForm.file)

        const response = await productService.update(this.editingProductId, formData)

        const index = this.allProducts.findIndex((p) => p.id === this.editingProductId)
        if (index !== -1) this.allProducts[index] = response.data.data

        toast.success(response.message)
        this.resetForm()
      } catch (error) {
        toast.error(error.response?.data?.message || 'خطا در ویرایش محصول')
        console.log(error)
      }
    },
    startEdit(product) {
      this.productForm = {
        name: product.name,
        price: product.price,
        inventory: product.stock,
        description: product.description,
        file: null,
      }
      this.editingProductId = product.id
    },
  },
})
