<template>
  <div class="disclaimer pt-x4">
    <div class="d-flex justify-content-center info-page">
      <main class="fixed-width-text">
        <div class="back-container">
          <router-link to="/" class="back-button">
            <i class="fa fa-arrow-left mr-x1" aria-hidden="true"></i>
            back
          </router-link>
        </div>
        <h1 class="text-center mb-x4">Roller Coaster Math Disclaimer*</h1>
        <p>
          There’s a reason why we have an asterisk on this page! As Buzz Price wrote in his Book <span class="italic">Walt’s Revolution! By The Numbers</span>...
        </p>
        <div class="quote mb-x4">
          <p>
            We have worked hard to assemble imperfect data, that myriad influences above and beyond force majeure work against the concept predictability, and therefore our best efforts in certain cases do not correspond to the reality of life on this planet.
          </p>
        </div>
        <p>
          In other words, this web site is simply a tool for the people who design attractions. It is NOT intended to be the basis for any investment decisions because the math here leaves out so many variables that a feasibility expert would consider. Things such as location, market size, available public transportation, demographics, competition and the list could go on and on.
        </p>
        <p>
          You can crunch the numbers for a ride-based seasonal attraction with a desired attendance of 1 million where guests will stay 5 hours and arrive primarily by car, but that doesn’t mean if you place the park 150 miles west of Bakersfield, California your peak week will be 56,434.
        </p>
        <p>
          While Ask.Buzz can help you as a quick reference to get some numbers that are in the ballpark, please talk to a real professional because they can tell you whether you should build that ballpark in the first place!
        </p>
        <p>
          In the end, this “Roller Coaster Math” helping designers and planners figure out design day numbers is not secret. Buzz Price published the formulas in his book <span class="italic">Walt’s Revolution! By the Numbers</span>. Different versions of these formulas can be found on numerous blogs, posts and articles online.
        </p>
        <p>
          There are, no doubt, hundreds of consultants who have this math plugged into Excel or Google Sheets. While Roller Coaster Math will continue to be tweaked, the principles and philosophies were all invented and pioneered by Buzz Price. And so, Ask.Buzz democratizes Roller Coaster Math by creating a web site that allows the themed entertainment industry to quickly crunch numbers as if they were working with Buzz during a charrette. In fact, we hope this tool may be useful in convincing some clients that they should reach out to feasibility experts.
        </p>
        <p>
          However, there is a reason why this site was developed by those who create and produce attractions. Our intent was to build a tool that we’d all want to use during charrettes and in the early stages of a project as the concepts are being envisioned. Our goal was to honor the man who invented the feasibility industry by sharing his knowledge with a new generation.
        </p>
        <p>
          Again, it’s worth saying one more time: Ask.Buzz is not intended to replace feasibility consultants and experts.
        </p>
        <p>
          Finally, as this is a work in progress, the math may be tweaked from time-to-time, but at the launch, here are the formulas we used:
        </p>
        <!-- formulas -->
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
                  Ride: 40 minutes
                </li>
                <li class="fontweight-medium mb-x1">
                  Mixed: 50 minutes
                </li>
                <li class="fontweight-medium mb-x1">
                  Story-Driven: 75 minutes
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
              <br>
              (not including parking and back of house)
            </div>
          </div>
          <h2 class="mb-x1">
            Rough Budget
          </h2>
          <div class="mb-x4 pl-x2">
            <ul class="reset">
              <li class="fontweight-medium mb-x1">
                Ride Park: $200 per person on desired attendance
              </li>
              <li class="fontweight-medium mb-x1">
                Mixed Park: $350 per person on desired attendance
              </li>
              <li class="fontweight-medium mb-x1">
                Story Park: $500 per person on desired attendance
              </li>
            </ul>
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
        <div class="d-flex justify-content-center mt-x5 align-items-start mb-x2">
          <div class="speech-bubble">
            Knowing the right answer and convincing the client are two different things.
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-start">
          <Buzz buzzType="shrug" medMax />
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
  &:after {
    margin-left: 16px;
  }
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
