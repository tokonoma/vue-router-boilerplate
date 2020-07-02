<template>
  <div class="home">
    <MyComponent />
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
import MyComponent from '@/components/MyComponent.vue'

export default {
  name: 'home',
  data () {
    return {
      hello: 'world'
    }
  },
  components: {
    MyComponent
  },
  created () {},
  methods: {
    myFunction () {
      console.log('function called')
    },
    mySecondFunction () {
      console.log('my second function called')
    }
  }
}
</script>

<style scoped lang="scss">
// Media Queries
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
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
