<template>
  <div class="disclaimer info-page pt-x4">
    <div class="d-flex justify-content-center">
      <main class="fixed-width-text">
        <div class="back-container">
          <router-link to="/" class="back-button">
            <i class="fa fa-arrow-left mr-x1" aria-hidden="true"></i>
            back
          </router-link>
        </div>
        <h1 class="text-center mb-x4">Roller Coaster Math Disclaimer</h1>
        <p>
          The Roller Coaster Math helping designers and developers figure out design day numbers is not secret. In fact, Buzz Price published the formulas in his book <span class="italic">Walt’s Revolution By the Numbers</span>. Different versions of these formulas can be found on numerous blogs, posts and articles online.
        </p>
        <div class="d-flex justify-content-center mt-x5 align-items-start">
          <div class="speech-bubble">
            Knowing the right answer and convincing the client are two different things.
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-start">
          <Buzz medMax />
        </div>
        <p>
          There are, no doubt, hundreds of consultants who have this math plugged into Excel or Google Sheets. While Roller Coaster Math will continue to be tweaked, the principles and philosophies were all invented and pioneered by Buzz Price. And so, Ask.Buzz democratizes Roller Coaster Math by creating a web site that allows the themed entertainment industry to quickly crunch numbers as if they were working with Buzz during a charrette. Even though he loved charrettes, Buzz also knew there were limitations. In fact, in his book, he wrote:
        </p>
        <div class="quote mb-x4">
          <p>
            &#x201C;One limitation of the charrette process is that it is the ultimate version of &#x2018;quick and dirty&#x2019; consulting. One day of concentrated psychoanalysis of a project is not going to produce a finished masterplan.&#x201D;
          </p>
        </div>
        <p>
          The same is true for this web site.
        </p>
        <p>
          Ask.Buzz is not intended to replace feasibility consultants and experts. This isn’t complete or comprehensive. It doesn’t currently include museum or educational attractions. Our intent was to build a tool that we’d all want to use during charrettes and in the early stages of a project as the concepts are being envisioned. Our goal was to honor the man who invented the feasibility industry by sharing his knowledge with a new generation.
        </p>
        <p>
          While Ask.Buzz can help you as a quick reference, please talk to a real professional.
        </p>
        <p>
          Finally, as this is a work in progress, the math may be tweaked from time-to-time, but at the launch, here are the formulas we used:
        </p>
        <div class="mb-x4 mt-x4">
          <h2 class="mb-x1">
            Peak Month
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              Desired Attendance x % Peak Month
            </div>
            <div class="pl-x2">
              <ul class="reset">
                <li class="fontweight-medium mb-x1">
                  Flat (no): 14%&#x9;
                </li>
                <li class="fontweight-medium mb-x1">
                  Moderate (mixed): 18%
                </li>
                <li class="fontweight-medium mb-x1">
                  Peaky (yes): 25%
                </li>
              </ul>
            </div>
          </div>
          <h2 class="mb-x1">
            Peak Week Attendance
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              Peak Month Attendance / 4.43
            </div>
          </div>
          <h2 class="mb-x1">
            Peak Day Attendance
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              Peak Month Attendance / 4.43 x .20
            </div>
          </div>
          <h2 class="mb-x1">
            Design Day Attendance
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              Peak Day Attendance x .80
            </div>
          </div>
          <h2 class="mb-x1">
            Peak On-Site
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              Design Day Attendance x Peak-On-Site Length of Stay %
            </div>
            <div class="pl-x2">
              <ul class="reset">
                <li class="fontweight-medium mb-x1">
                  2 Hours: 35%
                </li>
                <li class="fontweight-medium mb-x1">
                  5 Hours: 70%
                </li>
                <li class="fontweight-medium mb-x1">
                  7 Hours +: 80%
                </li>
              </ul>
            </div>
          </div>
          <h2 class="mb-x1">
            Entertainment/Engagement Units Per Hour
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              60 / Attraction Type Wait Times
            </div>
            <div class="pl-x2">
              <ul class="reset">
                <li class="fontweight-medium mb-x1">
                  Ride: 30 minutes
                </li>
                <li class="fontweight-medium mb-x1">
                  Mixed: 45 minutes
                </li>
                <li class="fontweight-medium mb-x1">
                  Story-Driven: 60 minutes
                </li>
              </ul>
            </div>
          </div>
          <h2 class="mb-x1">
            Hourly Capacity
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              Design Day Attendance x Entertainment Units / Hour
            </div>
          </div>
          <h2 class="mb-x1">
            Attraction Size
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              Design Day Attendance / 400 Acres
            </div>
          </div>
          <h2 class="mb-x1">
            Parking Area Requirement
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
              Design Day Attendance / 3.2 / 120 * % of Guests Arriving by Car
            </div>
            <div class="pl-x2">
              <ul class="reset">
                <li class="fontweight-medium mb-x1">
                  Low Car: 30%
                </li>
                <li class="fontweight-medium mb-x1">
                  Mixed: 50%
                </li>
                <li class="fontweight-medium mb-x1">
                  Car heavy: 70%
                </li>
              </ul>
            </div>
          </div>
          <h2 class="mb-x1">
            Food &amp; Beverage (Seats)
          </h2>
          <div class="mb-x4">
            <div class="italic mb-x1">
               Design Day Attendance x 95% / 3 / 2
            </div>
            <div class="pl-x2">
              <ul class="reset">
                <li class="fontweight-medium mb-x1">
                  3 is for 3 hours peak
                <li class="fontweight-medium mb-x1">
                  2 is for 2 table turns
                </li>
              </ul>
            </div>
          </div>
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
