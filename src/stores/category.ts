import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface CategoryItem {
  id: string
  name: string
  picture: string
  children: CategoryItem[] | null
  goods?: any
}

export const useCategoryStore = defineStore('category', () => {
  const category = ref<CategoryItem[]>([])
  
 

  return { category}
})
