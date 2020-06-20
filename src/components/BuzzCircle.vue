<template>
  <div
    class="buzz-circle"
    :class="{ dark: dark }"
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
      <div class="text-box no-select" :style="{fontSize: answerSize}" v-if="showAnswer">
        {{ answer }}
        <div class="answer-units">
          {{ units }}
        </div>
      </div>
      <div class="text-box no-select" :style="{fontSize: questionSize}" v-else>
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
      default: '200px'
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
      default: '20px'
    },
    questionSize: {
      type: String,
      default: '16px'
    },
    dark: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: 'auto'
    },
    bottom: {
      type: String,
      default: 'auto'
    },
    left: {
      type: String,
      default: 'auto'
    },
    right: {
      type: String,
      default: 'auto'
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
      default: '0'
    },
    marginRight: {
      type: String,
      default: '0'
    },
    units: {
      type: String,
      default: 'units'
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
  .text-box{
    text-align: center;
    color: #51779B;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    padding:12px;
    .answer-units{
      font-size: 18px;
      font-weight: 500;
    }
  }
  &.dark{
    background-color: #51779B;
    .text-box{
      color: #fff;
    }
  }
}
</style>
