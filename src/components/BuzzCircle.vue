<template>
  <div
    class="buzz-circle"
    :class="{ dark: dark, center: center }"
    :style="{
      top: top,
      bottom: bottom,
      left: left,
      right: right,
      width: size,
      height: size,
      zIndex: z,
      marginRight: marginRight,
      marginLeft: marginLeft
    }"
    @click="toggleAnswer()"
  >
    <template v-if="!decorative">
      <div class="text-box no-select answer" :style="{fontSize: answerSize}" v-if="showAnswer">
        {{ answer }}
        <div class="answer-units" v-if="units">
          {{ units }}
        </div>
      </div>
      <div class="text-box no-select question" :style="{fontSize: questionSize}" v-else>
        {{ question }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showAnswer: false
    }
  },
  components: {
    // nothing
  },
  props: {
    size: {
      type: String,
      default: ''
    },
    question: {
      type: String,
      default: 'Question'
    },
    answer: {
      type: String,
      default: 'Answer'
    },
    answerSize: {
      type: String,
      default: ''
    },
    questionSize: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: ''
    },
    bottom: {
      type: String,
      default: ''
    },
    left: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    z: {
      type: String,
      default: 'auto'
    },
    decorative: {
      type: Boolean,
      default: false
    },
    marginLeft: {
      type: String,
      default: ''
    },
    marginRight: {
      type: String,
      default: ''
    },
    units: {
      type: String,
      default: 'units'
    },
    center: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  created () {},
  mounted () {},
  computed: {},
  methods: {
    toggleAnswer () {
      this.showAnswer = !this.showAnswer
    }
  }
}
</script>

<style scoped lang="scss">
.buzz-circle{
  position: absolute;
  background-color: #C5D6EA;
  border-radius: 50%;
  display: flex;
  align-items: center;
  cursor: pointer;
  // mobile
  height: 120px;
  width: 120px;
  .text-box{
    text-align: center;
    color: #51779B;
    font-weight: 500;
    width: 100%;
    padding:12px;
    &.question{
      font-size: 14px;
    }
    &.answer{
      font-size: 12px;
    }
    .answer-units{
      font-size: 12px;
      font-weight: 500;
    }
  }
  &.dark{
    background-color: #51779B;
    .text-box{
      color: #fff;
    }
  }
  &.center{
    margin-left: -60px;
    left: 50%;
  }
}

// media queries
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .buzz-circle{
    height: 180px;
    width: 180px;
    .text-box{
      text-align: center;
      color: #51779B;
      font-weight: 500;
      width: 100%;
      padding:12px;
      &.question{
        font-size: 16px;
      }
      &.answer{
        font-size: 20px;
      }
      .answer-units{
        font-size: 16px;
        font-weight: 500;
      }
    }
    &.center{
      margin-left: -90px;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}

</style>
