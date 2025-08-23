<template>
  <section class="space">
    <div class="container rtl">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-6">
          <div class="title-area text-center">
            <h2 class="sec-title" >آخرین اخبار و مقالات ما</h2>
            <p class="sec-text" >لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
          </div>
        </div>
      </div>

      <div class="row gy-4 justify-content-center">
        <div
          class="col-xxl-3 col-xl-4 col-md-6"
          v-for="(post, index) in posts"
          :key="index"
        >
          <div
            class="blog-card style2"
            :style="{ animationDelay: `${index * 270}ms` }"
            data-cue="slideInUp"
          >
            <div class="blog-img">
              <img :src="post.image" alt="blog image" />
              <span class="blog-tag">{{ post.tag }}</span>
            </div>
            <div class="blog-content">
              <div class="blog-meta">
                <a :href="post.link"><i class="far fa-calendar-days"></i> {{ post.date }}</a>
                <a :href="post.link"><i class="far fa-user"></i> {{ post.author }}</a>
              </div>
              <h3 class="box-title">
                <a :href="post.link">{{ post.title }}</a>
              </h3>
              <a :href="post.link" class="link-btn">
                بیشتر بخوانید <i class="fas fa-arrow-left"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// const sectionTitle = 'آخرین اخبار و مقالات ما'
// const sectionSubtitle = 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'

const posts = [
  {
    image: '/img/blog/blog_1_1.png',
    tag: 'فعالیت ها',
    date: '16 فوریه 2024',
    author: 'بیبی مارت',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    link: 'blog-details.html',
  },
  {
    image: '/img/blog/blog_1_2.png',
    tag: 'فعالیت‌ها',
    date: '10 مارس 2024',
    author: 'بیبی مارت',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    link: 'blog-details.html',
  },
  {
    image: '/img/blog/blog_1_3.png',
    tag: 'فعالیت ها',
    date: '17 ژوئن 2024',
    author: 'بیبی مارت',
    title: 'بازار کوچک: انتخاب های بازیگوش برای روزهای لذت بخش کودکان.',
    link: 'blog-details.html',
  },
  {
    image: '/img/blog/blog_1_4.png',
    tag: 'فعالیت ها',
    date: '15 ژوئیه 2024',
    author: 'بیبی مارت',
    title: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ',
    link: 'blog-details.html',
  },
]
</script>

<style scoped>
.blog-card {
  animation-duration: 900ms;
  animation-fill-mode: both;
  animation-name: slideInUp;
  animation-timing-function: ease;
}
</style>
