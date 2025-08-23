<template>
  <div>
    <Hero />
    <FeatureList />
    <PopularProductSection />
    <CategorySlider />
    <PopularSection />
    <PromoBanner />
    <AgeCategorySlider />
    <TopRankedProducts />
    <TopSellingProducts />
    <SingleProductHighlight/>
    <Newsletter />
    <BrandSlider/>
  </div>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import FeatureList from '@/components/FeatureList.vue'
import PopularProductSection from '@/components/PopularProductSection.vue'

import CategorySlider from '@/components/CategorySlider.vue'
import Newsletter from '@/components/Newsletter.vue'
import PopularSection from '@/components/PopularSection.vue'
import PromoBanner from '@/components/PromoBanner.vue'
import AgeCategorySlider from '@/components/AgeCategorySlider.vue'
import TopRankedProducts from '@/components/TopRankedProducts.vue'
import TopSellingProducts from '@/components/TopSellingProducts.vue'
import SingleProductHighlight from '@/components/SingleProductHighlight.vue'
import BrandSlider from '@/components/BrandSlider.vue'
</script>
