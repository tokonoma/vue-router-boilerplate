<template>
<div
  class="buzz-the-man-the-myth-the-legend"
  :class="[medMax ? 'med-max' : '', animateBuzz ? 'animate-buzz' : '', buzzClass]"
  @click="buzzWasClicked()"
>
</div>
</template>

<script>
export default {
  data () {
    return {
      animateBuzz: true,
      buzzClass: ''
    }
  },
  components: {
  },
  props: {
    medMax: {
      type: Boolean,
      default: false
    },
    buzzType: {
      type: String,
      default: 'wave'
    }
  },
  watch: {
    buzzType: function (newType, oldType) {
      this.buzzClass = newType
    }
  },
  created () {
    this.buzzClass = this.buzzType
  },
  mounted () {},
  computed: {},
  methods: {
    buzzWasClicked () {
      this.$emit('buzzClicked')
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
  background-size: cover;
  cursor: pointer;
  &.wave{
    height: 235px;
    max-width: 85px;
    background-image: url('~@/assets/spritesheet.png');
    &.animate-buzz{
      animation: buzzwavesml 12s steps(30) infinite;
    }
  }
}

// animations
//original width: 13050
// Wave animations
@keyframes buzzwavesml {
  0% { background-position: 0px; }
  20% { background-position: -2558px; }
  100% { background-position: -2558px; }
}
@keyframes buzzwavemed {
  0% { background-position: 0px; }
  20% { background-position: -4078px; }
  100% { background-position: -4078px; }
}
@keyframes buzzwavelrg {
  0% { background-position: 0px; }
  20% { background-position: -5220px; }
  100% { background-position: -5220px; }
}

// media queries
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .buzz-the-man-the-myth-the-legend{
    &.wave{
      height: 375px;
      max-width: 136px;
      &.animate-buzz{
        animation: buzzwavemed 12s steps(30) infinite;
      }
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .buzz-the-man-the-myth-the-legend{
    &.wave{
      height: 480px;
      max-width: 174px;
      &.animate-buzz{
        animation: buzzwavelrg 12s steps(30) infinite;
      }
      &.med-max{
        height: 375px;
        max-width: 136px;
        &.animate-buzz{
          animation: buzzwavemed 12s steps(30) infinite;
        }
      }
    }
  }
}
</style>
