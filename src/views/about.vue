<template>
    <div>
    <AboutSection />
  </div>
    <div class="breadcumb-wrapper background-image" style="background-image: url(/img/bg/breadcrumb-bg.png);">
            <div class="container">
                <div class="breadcumb-content">
                    <h1 class="breadcumb-title" data-cue="slideInUp" data-show="true" style="animation-name: slideInUp; animation-duration: 900ms; animation-timing-function: ease; animation-delay: 0ms; animation-direction: normal; animation-fill-mode: both;">درباره</h1>
                    <ul class="breadcumb-menu">
                        <li data-cue="slideInUp" data-delay="100" data-show="true" style="animation-name: slideInUp; animation-duration: 900ms; animation-timing-function: ease; animation-delay: 100ms; animation-direction: normal; animation-fill-mode: both;"><a href="index.html">صفحه اصلی</a></li>
                        <li data-cue="slideInUp" data-delay="100" data-show="true" style="animation-name: slideInUp; animation-duration: 900ms; animation-timing-function: ease; animation-delay: 370ms; animation-direction: normal; animation-fill-mode: both;">درباره</li>
                    </ul>
                </div>
            </div>
        </div>
</template>
<script>
import AboutSection from '@/components/AboutSection.vue';

export default {
  components: {
    AboutSection
  }
}
</script>

<style></style>