<template>
  <div class="about info-page pt-x4">
    <div class="d-flex justify-content-center align-items-start">
      <main class="fixed-width-text">
        <div class="back-container">
          <router-link to="/" class="back-button">
            <i class="fa fa-arrow-left mr-x1" aria-hidden="true"></i>
            back
          </router-link>
        </div>
        <h1 class="text-center mb-x4">About ask.buzz</h1>
        <p>
          According to his son David Price, Harrison “Buzz” Price was excellent at crunching numbers in his head. Not everyone of course can accomplish such a task, but he was a wizard at it. This is a great gift to have when you’re in the middle of a planning session and you’re putting numbers up on the white board to stimulate and help focus discussion. He could also pause and draw you into the calculus.
        </p>
        <div class="d-flex justify-content-center mt-x5 align-items-start">
          <div class="speech-bubble">
            Sometimes when you go only by the numbers, the project is impossible.  When you inject the art, it becomes possible.
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-start">
          <Buzz medMax />
        </div>
        <p>
          Buzz often said, “It’s all about the numbers” and his passing in 2010 at 89 years of age, he certainly had not changed that perspective. For industry practitioners that worked closely with him, we recall these as “Buzz Moments” when we were able to see the numbers as he saw them in real time.
        </p>
        <p>
          When we first started talking about this web site, this was our goal. We wanted to capture and share these Buzz moments. We wanted a way for industry professionals and others to be able to “Ask Buzz” questions and get his quick feedback just as if he was standing at a white board during a charrette. And we also wanted you to get just a glimpse of his personality. Buzz Price was known for his trademark humor, cutting edge wit and passion. He loved this industry. So, here on Ask.Buzz, you can both ask questions about your project and get a few of what his friends called “Buzzisms” revealed in those speech bubbles. These particular Buzzisms on About.Buzz were compiled from his book Walt’s Revolution By the Numbers and by Bob Rogers of BRC Imagination Arts for David’s book Buzz Stories.
        </p>
        <p>
          If you have others, please email them to us. We’d love to hear ‘em and we can add them to this site.
        </p>
        <p>
          Finally, Ask.Buzz is intended to introduce the legacy of Buzz Price to a new generation of themed entertainment designers and developers. We want them to, in a small way, share our memories of Buzz. While Buzz Price is now gone, his ideas and vision are not.
        </p>
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
.speech-bubble{
  width: 280px;
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
