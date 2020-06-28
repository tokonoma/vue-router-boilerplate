<template>
  <div class="creators pt-x4">
    <div class="d-flex justify-content-center align-items-start info-page">
      <main class="fixed-width-text">
        <div class="back-container">
          <router-link to="/" class="back-button">
            <i class="fa fa-arrow-left mr-x1" aria-hidden="true"></i>
            back
          </router-link>
        </div>
        <h1 class="text-center mb-x4">The Creators</h1>
        <p>
          The idea for this web site was born while watching a teenager play Roller Coaster Tycoon. “What kind of roller coaster math,” we asked ourselves, “goes into creating a game like this? And wouldn’t be cool if we could reveal that math?” This initial spark led to the idea of creating an app where anyone could ask and answer a few questions about their attraction project and immediately get to the design day.
        </p>
        <p>
          We brainstormed and developed this idea over a breakfast in the Mall of the Emirates, while eating chicken in Doha and over a long afternoon brainstorm in Los Angeles.
        </p>
        <div class="d-flex justify-content-center align-items-start">
          <img class="mb-x4 info-img" src="~@/assets/creators1.jpg">
        </div>
        <div class="d-flex justify-content-center align-items-start">
          <img class="mb-x4 info-img" src="~@/assets/creators2.jpg">
        </div>
        <p>
          However, all of us behind this project were busy working on other projects. As the saying goes, “The problem with working on projects in your spare time is that you never have any spare time!”
        </p>
        <p>
          Then COVID-19 hit, we decided to convert the app concept into a web site and get it launched before the original Disneyland reopened. Please feel free to email any of us:
        </p>
        <div class="mb-x4 mt-x4">
          <h2>
            Creative Director
          </h2>
          <p><a href="mailto:gthatcher@creativeprincipals.com">Geoff Thatcher</a>, Founder &amp; Chief Creative Officer, Creative Principals</p>
        </div>
        <div class="mb-x4">
          <h2>
            Brand Consultant
          </h2>
          <p><a href="mailto:dprice@PriceLeisureGroup.com">David A. Price</a>, AIA, President and Founder, Price Leisure GroupPrice Leisure Group</p>
        </div>
        <div class="mb-x4">
          <h2>
            Strategy Consultant
          </h2>
          <p><a href="mailto:tyfor@aol.com">Ty Granaroli</a>, Senior Vice President, Paramount Pictures</p>
        </div>
        <div class="mb-x4">
          <h2>
            Creative Consultant
          </h2>
          <p><a href="mailto:bob.chambers@producers-group.com">Bob Chambers</a>, Executive Producer &amp; Co-CEO, The Producers Group</p>
        </div>
        <div class="mb-x4">
          <h2>
            Business Consultant
          </h2>
          <p><a href="mailto:vlad@backpackcreative.com">Vlad Perelman</a>, Managing Director, Backpack Creative</p>
        </div>
        <div class="mb-x4">
          <h2>
            Designer &amp; Illustrator
          </h2>
          <p><a href="mailto:zthatcher@creativeprincipals.com">Zoe Thatcher</a>, Designer &amp; Illustrator, Creative Principals</p>
        </div>
        <div class="">
          <p><a href="mailto:gthatcher@creativeprincipals.com,dprice@PriceLeisureGroup.com,tyfor@aol.com,bob.chambers@producers-group.com,vlad@backpackcreative.com,zthatcher@creativeprincipals.com">Email All</a></p>
        </div>
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'

export default {
  data () {
    return {
    }
  },
  components: {
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
