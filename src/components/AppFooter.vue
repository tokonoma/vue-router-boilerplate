<template>
  <div class="app-footer">
    <div class="logos-container">
      <div class="d-flex justify-content-center align-items-start">
        <div class="fixed-width-container d-flex justify-content-between align-items-start">
          <div class="container-fluid">
            <div class="row">
              <div class="col-6 col-sm-3 text-center">
                <a href="https://www.creativeprincipals.com/" target="_blank">
                  <img src="~@/assets/creative-vertical.png">
                </a>
              </div>
              <div class="col-6 col-sm-3 text-center">
                <a href="https://www.producers-group.com" target="_blank">
                  <img src="~@/assets/producers-vertical.png">
                </a>
              </div>
              <div class="col-6 col-sm-3 text-center">
                <a href="https://www.backpackcreative.com" target="_blank">
                  <img src="~@/assets/backpack.png">
                </a>
              </div>
              <div class="col-6 col-sm-3 text-center">
                <a href="https://www.linkedin.com/in/ty-granaroli-507362b/" target="_blank">
                  <img src="~@/assets/tg.png">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center align-items-start">
      <div class="fixed-width-container link-container justify-content-between">
        <router-link to="/buzz" class="footer-link">Who Is Buzz Price</router-link>
        <router-link to="/about" class="footer-link">About Ask Buzz</router-link>
        <router-link to="/creators" class="footer-link">The Creators</router-link>
        <router-link to="/disclaimer" class="footer-link">Disclaimer</router-link>
      </div>
    </div>
    <div class="d-flex justify-content-center pb-x2 align-items-start">
      <router-link to="/">
        <img class="footer-logo" src="~@/assets/askbuzz-transparent.png">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
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

.app-footer{
  padding-top: 8px;
  margin-top: 80px;
  background-color: #51779B;
  color: #fff;
  a{
    color: #fff;
    text-decoration: none;
  }
}
.logos-container{
  background: #fff;
  padding: 12px 0px;
  img{
    max-height: 80px;
    max-width: 100%;
  }
}
.link-container{
  padding: 32px 24px 0px;
  display: block;
  .footer-link{
    width: 100%;
    display: block;
    padding-bottom: 24px;
  }
}
.footer-logo{
  width: 48px;
  height: auto;
}

// media queries
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {
  .link-container {
    .footer-link {
      width: auto;
    }
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .link-container {
    display: flex;
    padding: 32px 0px 24px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {
}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {
}
</style>
