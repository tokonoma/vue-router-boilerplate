<template>
  <div class="reading info-page pt-x4">
    <div class="d-flex justify-content-center">
      <main class="fixed-width-text">
        <div class="back-container">
          <router-link to="/" class="back-button">
            <i class="fa fa-arrow-left mr-x1" aria-hidden="true"></i>
            back
          </router-link>
        </div>
        <div class="d-flex justify-content-center align-items-start">
          <img class="mb-x1 info-img" src="~@/assets/wr.jpg">
        </div>
        <h2 class="mb-x3 text-center italic">
          Walt’s Revolution By the Numbers
        </h2>
        <div class="d-flex justify-content-center mb-x3 align-items-start">
          <a href="https://www.amazon.com/Walts-Revolution-Harrison-Buzz-Price/dp/1893951065" target="_blank" class="buzz-btn">
            buy on amazon
          </a>
        </div>
        <p class="mb-x12">
          As one Amazon reviewer put it, "<span class="italic">Walt's Revolution! By The Numbers</span> is the story of Harrison Alan Price and the companies he worked for and started. Buzz writes about six "waves" of development sparked by Disneyland. <span class="italic">Walt's Revolution!</span> has pages of numbers, but this book is more a text on creative mind set than a manual on statistical analysis. <span class="italic">Walt's Revolution!</span> is both history and "how to"&mdash;yet I didn't find it boring to read. This is also and insider's look at the nuts and bolts of the entertainment industry."
        </p>
        <div class="d-flex justify-content-center align-items-start">
          <img class="mb-x1 info-img" src="~@/assets/bs.jpg">
        </div>
        <h2 class="mb-x3 text-center italic">
          Buzz Stories at Thirty Thousand Feet
        </h2>
        <div class="d-flex justify-content-center mb-x3 align-items-start">
          <a href="https://www.amazon.com/Buzz-Stories-Thirty-Thousand-Feet/dp/0996750436/ref=sr_1_1?dchild=1&keywords=buzz+stories+by+David+price&qid=1591191406&s=books&sr=1-1" target="_blank" class="buzz-btn">
            buy on amazon
          </a>
        </div>
        <p class="mb-x6">
          Harrison “Buzz” Price was a true Disney Legend and his son David Price has now written the ultimate professional and personal tribute to his father and mentor. Part memoir, part consulting primer and part love story, <span class="italic">Buzz Stories at Thirty Thousand Feet</span> contains stories written by those with whom he shared his intelligence, humor, passion and wit. It brings you closer to understanding the birth of an industry and a life lived "The Buzz Way".
        </p>
        <div class="d-flex justify-content-center mt-x5 align-items-start">
          <div class="speech-bubble">
            That's all she wrote...
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <Buzz medMax />
        </div>
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import Buzz from '@/components/Buzz.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Buzz,
    AppFooter
  },
  props: {},
  watch: {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
  }
}
</script>

<style scoped lang="scss">
.reading.info-page h2{
  font-size:24px;
}
// media queries
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {}

// media queries -at and down-
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {}
</style>
