<template>
<div
  class="buzz-the-man-the-myth-the-legend"
  :class="{ 'med-max': medMax, 'animate-buzz': animateBuzz }"
  @click="moveItBuzz()"
>
</div>
</template>

<script>
export default {
  data () {
    return {
      animateBuzz: true
    }
  },
  components: {
  },
  props: {
    medMax: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    moveItBuzz () {
      this.animateBuzz = false
      this.$nextTick(() => {
        // next tick apparently isn't enough to let the browser respond to binding change
        setTimeout(() => {
          this.animateBuzz = true
        }, 500)
      })
    }
  }
}
</script>

<style scoped lang="scss">

.buzz-the-man-the-myth-the-legend{
  position: relative;
  z-index: 10;
  width: 100%;
  //original size: 435 x 1200
  //2.5 = 174 x 480 => 5220
  //3.2 = 136 x 375 => 4078.125
  //7.1 = 61 x 169 => 1838
  height: 235px;
  max-width: 85px;
  background-image: url('~@/assets/spritesheet.png');
  background-size: cover;
  &.animate-buzz{
    animation: buzzwave 12s steps(30);
  }
}
// animations
//original width: 13050
@keyframes buzzwave {
  0% { background-position: 0px; }
  20% { background-position: -2558px; }
  100% { background-position: -2558px; }
}

// media queries
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .buzz-header{
    img.ask-buzz-hero{
      width: 280px;
      z-index: -10;
      position: relative;
    }
  }
  .buzz-the-man-the-myth-the-legend{
    height: 375px;
    max-width: 136px;
    cursor: pointer;
  }
  @keyframes buzzwave {
    0% { background-position: 0px; }
    20% { background-position: -4078px; }
    100% { background-position: -4078px; }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .buzz-the-man-the-myth-the-legend{
    height: 480px;
    max-width: 174px;
    &.med-max{
      height: 375px;
      max-width: 136px;
      &.animate-buzz{
        animation: buzzwavemed 12s steps(30);
      }
    }
  }
  @keyframes buzzwave {
    0% { background-position: 0px; }
    20% { background-position: -5220px; }
    100% { background-position: -5220px; }
  }

  @keyframes buzzwavemed {
    0% { background-position: 0px; }
    20% { background-position: -4078px; }
    100% { background-position: -4078px; }
  }
}
</style>
