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
$animation-duration: 8s;

.buzz-the-man-the-myth-the-legend{
  position: relative;
  z-index: 10;
  background-size: cover;
  cursor: pointer;
  &.wave{
    height: 235px;
    width: 85px;
    background-image: url('~@/assets/spritesheet-wave.png');
    &.animate-buzz{
      animation: buzzwavesml $animation-duration steps(31) infinite;
    }
  }
  &.thinking{
    height: 230px; // 445 / 85 = 5.235 => 1200 / 5.235 = 229.2
    width: 85px;
    background-image: url('~@/assets/spritesheet-thinking.png');
    &.animate-buzz{
      animation: buzzthinkingsml $animation-duration steps(43) infinite;
    }
  }
  &.doodling{
    height: 205px; // 497 / 85 = 5.847 => 1200 / 5.847 = 205.233
    width: 85px;
    background-image: url('~@/assets/spritesheet-doodle.png');
    &.animate-buzz{
      animation: buzzdoodlingsml $animation-duration steps(43) infinite;
    }
  }
  &.shrug{
    height: 175px; // 581 / 85 = 6.835 => 1200 / 6.835 = 175.567
    width: 85px;
    background-image: url('~@/assets/spritesheet-shrug.png');
    &.animate-buzz{
      animation: buzzshrugsml $animation-duration steps(26) infinite;
    }
  }
  &.tie{
    height: 243px; // 420 / 85 = 4.941 => 1200 / 4.941 = 242.866
    width: 85px;
    background-image: url('~@/assets/spritesheet-tie.png');
    &.animate-buzz{
      animation: buzztiesml $animation-duration steps(34) infinite;
    }
  }
}

// animations
// ~~~ WAVE ~~~ // 13485px
@keyframes buzzwavesml {
  0% { background-position: 0px; }
  38% { background-position: -2641px; }
  100% { background-position: -2641px; }
}
@keyframes buzzwavemed {
  0% { background-position: 0px; }
  38% { background-position: -4214px; }
  100% { background-position: -4214px; }
}
@keyframes buzzwavelrg {
  0% { background-position: 0px; }
  38% { background-position: -5394px; }
  100% { background-position: -5394px; }
}

// ~~~ THINKING ~~~ // 19580px
@keyframes buzzthinkingsml {
  0% { background-position: 0px; }
  38% { background-position: -3667px; }
  100% { background-position: -3667px; }
}
@keyframes buzzthinkingmed {
  0% { background-position: 0px; }
  38% { background-position: -5851px; }
  100% { background-position: -5851px; }
}
@keyframes buzzthinkinglrg {
  0% { background-position: 0px; }
  38% { background-position: -7494px; }
  100% { background-position: -7494px; }
}

// ~~~ DOODLING ~~~ // 21868px
@keyframes buzzdoodlingsml {
  0% { background-position: 0px; }
  38% { background-position: -3650px; }
  100% { background-position: -3650px; }
}
@keyframes buzzdoodlingmed {
  0% { background-position: 0px; }
  38% { background-position: -5840px; }
  100% { background-position: -5840px; }
}
// not needed currently
@keyframes buzzdoodlinglrg {
  0% { background-position: 0px; }
  38% { background-position: -7482px; }
  100% { background-position: -7482px; }
}

// ~~~ SHRUG ~~~ // 15687px
@keyframes buzzshrugsml {
  0% { background-position: 0px; }
  38% { background-position: -2203px; }
  100% { background-position: -2203px; }
}
@keyframes buzzshrugmed {
  0% { background-position: 0px; }
  38% { background-position: -3538px; }
  100% { background-position: -3538px; }
}
// shrug lrg isn't needed since all info pages used medmax

// ~~~ TIE ~~~ // 14700px
@keyframes buzztiesml {
  0% { background-position: 0px; }
  38% { background-position: -2892px; }
  100% { background-position: -2892px; }
}
@keyframes buzztiemed {
  0% { background-position: 0px; }
  38% { background-position: -4617px; }
  100% { background-position: -4617px; }
}
// tie lrg isn't needed

// media queries
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .buzz-the-man-the-myth-the-legend{
    // ~~~ WAVE ~~~ //
    &.wave{
      height: 375px;
      width: 136px;
      &.animate-buzz{
        animation: buzzwavemed $animation-duration steps(31) infinite;
      }
    }
    &.thinking{
      height: 367px; // 445 / 136 = 3.27 => 1200 / 3.27 = 366.97
      width: 136px;
      background-image: url('~@/assets/spritesheet-thinking.png');
      &.animate-buzz{
        animation: buzzthinkingmed $animation-duration steps(43) infinite;
      }
    }
    &.doodling{
      height: 328px; // 497 / 136 = 3.654 => 1200 / 3.654 = 328
      width: 136px;
      background-image: url('~@/assets/spritesheet-doodle.png');
      &.animate-buzz{
        animation: buzzdoodlingmed $animation-duration steps(43) infinite;
      }
    }
    &.shrug{
      height: 281px; // 581 / 136 = 4.272 => 1200 / 4.272 = 280.899
      width: 136px;
      background-image: url('~@/assets/spritesheet-shrug.png');
      &.animate-buzz{
        animation: buzzshrugmed $animation-duration steps(26) infinite;
      }
    }
    &.tie{
      height: 388px; // 420 / 136 = 3.088 => 1200 / 4.941 = 388.601
      width: 136px;
      background-image: url('~@/assets/spritesheet-tie.png');
      &.animate-buzz{
        animation: buzztiemed $animation-duration steps(34) infinite;
      }
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .buzz-the-man-the-myth-the-legend{
    // ~~~ WAVE ~~~ //
    &.wave{
      height: 480px;
      width: 174px;
      &.animate-buzz{
        animation: buzzwavelrg $animation-duration steps(31) infinite;
      }
      &.med-max{
        height: 375px;
        width: 136px;
        &.animate-buzz{
          animation: buzzwavemed $animation-duration steps(31) infinite;
        }
      }
    }
    &.thinking{
      height: 470px; // 445 / 174 = 2.557 => 1200 / 2.557 = 469.299
      width: 174px;
      background-image: url('~@/assets/spritesheet-thinking.png');
      &.animate-buzz{
        animation: buzzthinkinglrg $animation-duration steps(43) infinite;
      }
    }
    &.doodling{
      height: 420px; // 497 / 174= 2.856 => 1200 / 2.856 = 420.168
      width: 174px;
      background-image: url('~@/assets/spritesheet-doodle.png');
      &.animate-buzz{
        animation: buzzdoodlinglrg $animation-duration steps(43) infinite;
      }
      &.med-max{
        height: 328px;
        width: 136px;
        background-image: url('~@/assets/spritesheet-doodle.png');
        &.animate-buzz{
          animation: buzzdoodlingmed $animation-duration steps(43) infinite;
        }
      }
    }
  }
}
</style>
