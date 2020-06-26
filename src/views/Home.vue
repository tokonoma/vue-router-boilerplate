<template>
  <div class="buzz-home">
    <div class="d-flex justify-content-center align-items-start">
      <main class="fixed-width-container">
        <div class="buzz-header">
          <img class="ask-buzz-hero" src="~@/assets/ask-buzz-header.png">
          <router-link to="/reading" class="more-reading-link">
            <img class="more-reading-img" src="~@/assets/bookcircle.png">
          </router-link>
        </div>
        <div>
          <div class="speech-bubble">
            {{ currentQuote }}
          </div>
        </div>
        <div class="d-flex">
          <div class="width-30">
            <Buzz />
          </div>
          <div class="width-70 form-results-container">
            <!--  -->
            <!-- form -->
            <!--  -->
            <div class="main-form" v-if="!showResults">
              <h2>Will your attraction be seasonal?</h2>
              <h3>{{ seasonalValue }}</h3>
              <vue-slider
                v-model="seasonalValue"
                :contained="true"
                :marks="seasonalMarks"
                :data="seasonalData"
                :min="1"
                :max="3"
                :dotSize="20"
                :tooltip="'none'"
                class="mb-x10"
              ></vue-slider>
              <h2>What will be the intended length of stay?</h2>
              <h3>{{ lengthValue }}</h3>
              <vue-slider
                v-model="lengthValue"
                :contained="true"
                :marks="lengthMarks"
                :data="lengthData"
                :min="1"
                :max="3"
                :dotSize="20"
                :tooltip="'none'"
                class="mb-x10"
              ></vue-slider>
              <h2>What will be in your attraction?</h2>
              <h3>{{ themeValue }}</h3>
              <vue-slider
                v-model="themeValue"
                :contained="true"
                :marks="themeMarks"
                :data="themeData"
                :min="1"
                :max="3"
                :dotSize="20"
                :tooltip="'none'"
                class="mb-x10"
              ></vue-slider>
              <h2>How will guests primarily arrive?</h2>
              <h3>{{ transportationValue }}</h3>
              <vue-slider
                v-model="transportationValue"
                :contained="true"
                :marks="transportationMarks"
                :data="transportationData"
                :min="1"
                :max="3"
                :dotSize="20"
                :tooltip="'none'"
                class="mb-x10"
              ></vue-slider>
              <h2>How do you measure things?</h2>
              <h3>{{ measureValue }}</h3>
              <vue-slider
                v-model="measureValue"
                :contained="true"
                :marks="measureMarks"
                :data="measureData"
                :min="1"
                :max="4"
                :dotSize="20"
                :tooltip="'none'"
                class="mb-x10"
              ></vue-slider>
              <label class="h2" for="desired-attendance">
                What is your desired annual attendance?
                <br>
                <span class="result-description">(0 - 50,000,000)</span>
              </label>
              <input
                type="tel"
                @input="formatAttendanceDuringInput()"
                id="desired-attendance"
                name="desired-attendance"
                placeholder="e.g. 3,000,000"
                class="attendance-input"
                v-model="attendanceValue"
                :class="{ 'has-error': formError }"
                autocomplete="off"
              >
              <p class="error-flag" v-if="formError">Please provide a number for desired attendance</p>
              <div class="d-flex justify-content-center mt-x6">
                <button class="buzz-btn" @click="calculateInput()">
                  ask buzz!
                </button>
              </div>
            </div>
            <!--  -->
            <!-- results -->
            <!--  -->
            <div class="main-results" v-else>
              <div class="result-group">
                <div class="d-flex results-header align-items-start">
                  <h2>Desired Attendance</h2>
                  <button class="buzz-link-btn ml-x4 edit-input-button" @click="editInput()">
                    change
                  </button>
                </div>
                <div class="attendance-value">
                  {{ formatNumber(results.desiredAttendance) }}
                </div>
              </div>
              <div class="result-group">
                <h2>Peak Month</h2>
                <div class="result-answer">
                  {{ formatNumber(results.peakMonth) }}
                </div>
                <p class="result-description">Number of guests on the busiest month of the year.</p>
              </div>
              <div class="result-group">
                <h2>Peak Week</h2>
                <div class="result-answer">
                  {{ formatNumber(results.peakWeek) }}
                </div>
                <p class="result-description">Number of guests on the busiest week of the peak month.</p>
              </div>
              <div class="result-group">
                <h2>Peak Day</h2>
                <div class="result-answer">
                  {{ formatNumber(results.peakDay) }}
                </div>
                <p class="result-description">Number of guests on the busiest day of the peak week.</p>
              </div>
              <div class="result-group">
                <h2>Design Day</h2>
                <div class="result-answer">
                  {{ formatNumber(results.designDay) }}
                </div>
                <p class="result-description">Your attraction should be designed for this number of guests.</p>
              </div>
              <div class="result-group">
                <h2>Peak Design Day On-Site</h2>
                <div class="result-answer">
                  {{ formatNumber(results.peakDesignDay) }}
                </div>
                <p class="result-description">Number of guests at the busiest time of the design day.</p>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <!-- more results -->
        <!--  -->
        <div class="more-questions" v-if="showResults">
          <div class="more-questions-header">
            <i class="fas fa-arrow-down mr-x4"></i> More Questions <i class="fas fa-arrow-down ml-x4"></i>
          </div>
          <!-- vertical center with align-items-center -->
          <div class="more-questions-circles">
            <div class="d-flex justify-content-center">
              <div class="speech-bubble">
                Life is too short to work on something doomed to fail.
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <Buzz medMax />
            </div>
            <BuzzCircle
              question="What will be our overall theoretical hourly capacity?"
              :answer="formatNumber(results.hourlyCapacity)"
              units="guests"
              top="20%"
              left="24px"
              dark
            />
            <BuzzCircle
              question="How many seats for F&amp;B will we need?"
              :answer="formatNumber(results.foodSeats)"
              units="seats"
              bottom="20%"
              left="12px"
            />
            <BuzzCircle
              question="How big does our attraction need to be?"
              :answer="formatNumber(results.attractionSize, false, true)"
              :units="measureValue"
              top="22%"
              right="12px"
            />
            <BuzzCircle
              question="How much space will we need for parking?"
              :answer="formatNumber(results.parkingSpace, false, true)"
              :units="measureValue"
              bottom="20%"
              right="24px"
              dark
            />
            <BuzzCircle
              question="What's my rough budget?"
              :answer="'$' + formatNumber(results.estBudget, true, false)"
              :units="null"
              bottom="0px"
              center
              dark
            />
          </div>
          <div class="d-flex justify-content-center mt-x4">
            <button class="buzz-btn start-over" @click="resetApp()">
              start over
            </button>
          </div>
        </div>
      </main>
    </div>
    <BuzzCircle decorative z="-1" top="200px" left="50%" marginLeft="-420px" size="1000px"/>
    <AppFooter />
  </div>
</template>

<script>
import Vue from 'vue'
import VueMask from 'v-mask'
import BuzzCircle from '@/components/BuzzCircle.vue'
import AppFooter from '@/components/AppFooter.vue'
import Buzz from '@/components/Buzz.vue'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'

Vue.use(VueMask)

let markStyle = {
  width: '8px',
  height: '8px',
  display: 'block',
  transform: 'translate(-2px, -2px)'
}

export default {
  name: 'home',
  data () {
    return {
      seasonalValue: 'yes',
      lengthValue: '2 hours',
      themeValue: 'ride-based',
      transportationValue: 'car',
      measureValue: 'acres',
      attendanceValue: null,
      seasonalMarks: {
        'yes': {
          label: 'yes',
          style: markStyle
        },
        'mixed': {
          label: 'mixed',
          style: markStyle
        },
        'no': {
          label: 'no',
          style: markStyle
        }
      },
      seasonalData: [
        'yes',
        'mixed',
        'no'
      ],
      lengthMarks: {
        '2 hours': {
          label: '2 hours',
          style: markStyle
        },
        '5 hours': {
          label: '5 hours',
          style: markStyle
        },
        '7 hours+': {
          label: '7 hours+',
          style: markStyle
        }
      },
      lengthData: [
        '2 hours',
        '5 hours',
        '7 hours+'
      ],
      themeMarks: {
        'ride-based': {
          label: 'ride-based',
          style: markStyle
        },
        'mixed': {
          label: 'mixed',
          style: markStyle
        },
        'story-based': {
          label: 'story-based',
          style: markStyle
        }
      },
      themeData: [
        'ride-based',
        'mixed',
        'story-based'
      ],
      transportationMarks: {
        'car': {
          label: 'car',
          style: markStyle
        },
        'mixed': {
          label: 'mixed',
          style: markStyle
        },
        'public transportation': {
          label: 'public\rtransportation',
          style: markStyle
        }
      },
      transportationData: [
        'car',
        'mixed',
        'public transportation'
      ],
      measureMarks: {
        'acres': {
          label: 'acres',
          style: markStyle
        },
        'square feet': {
          label: 'square feet',
          style: markStyle
        },
        'square meters': {
          label: 'square meters',
          style: markStyle
        },
        'hectares': {
          label: 'hectares',
          style: markStyle
        }
      },
      measureData: [
        'acres',
        'square feet',
        'square meters',
        'hectares'
      ],
      formError: false,
      showResults: false,
      results: {
        desiredAttendance: 0,
        peakMonth: 0,
        peakWeek: 0,
        peakDay: 0,
        designDay: 0,
        peakDesignDay: 0,
        ridesVsExp: 0,
        hourlyCapacity: 0,
        attractionSize: 0,
        totalRideCount: 0,
        parkingSpace: 0,
        foodSeats: 0,
        estBudget: 0
      },
      buzzQuotes: [
        'Let me ask you a few questions first, okay?',
        'Remember, you don’t build the church for Easter Sunday.'
      ],
      currentQuote: ''
    }
  },
  components: {
    VueSlider,
    BuzzCircle,
    AppFooter,
    Buzz
  },
  created () {
    this.currentQuote = this.buzzQuotes[0]
  },
  methods: {
    calculateInput () {
      if (this.attendanceValue) {
        // convert input into number
        this.results.desiredAttendance = this.attendanceValue
        this.results.desiredAttendance = this.results.desiredAttendance.replace(/\D/g, '')
        this.results.desiredAttendance = parseInt(this.results.desiredAttendance)
        // scroll back to top
        this.currentQuote = this.buzzQuotes[1]
        window.scrollTo({ top: 0, behavior: 'smooth' })
        let peakMonthPercent = 0
        switch (this.seasonalValue) {
          case 'yes':
            peakMonthPercent = 0.25
            break
          case 'mixed':
            peakMonthPercent = 0.18
            break
          case 'no':
            peakMonthPercent = 0.14
            break
        }
        this.results.peakMonth = this.results.desiredAttendance * peakMonthPercent
        this.results.peakWeek = this.results.peakMonth / 4.43
        this.results.peakDay = this.results.peakWeek * 0.20
        this.results.designDay = this.results.peakDay * 0.80
        let lengthPercentage = 0
        switch (this.lengthValue) {
          case '2 hours':
            lengthPercentage = 0.35
            break
          case '5 hours':
            lengthPercentage = 0.70
            break
          case '7 hours+':
            lengthPercentage = 0.80
            break
        }
        this.results.peakDesignDay = this.results.designDay * lengthPercentage
        let themeDivider = 0
        let budgetMultipler = 0
        switch (this.themeValue) {
          case 'ride-based':
            themeDivider = 40
            budgetMultipler = 200
            break
          case 'mixed':
            themeDivider = 50
            budgetMultipler = 350
            break
          case 'story-based':
            themeDivider = 75
            budgetMultipler = 500
            break
        }
        this.results.estBudget = this.results.desiredAttendance * budgetMultipler
        this.results.hourlyCapacity = (60 / themeDivider) * this.results.designDay
        this.results.attractionSize = this.results.designDay / 400
        let parkingPercentage = 0
        switch (this.transportationValue) {
          case 'car':
            parkingPercentage = 0.70
            break
          case 'mixed':
            parkingPercentage = 0.50
            break
          case 'public transportation':
            parkingPercentage = 0.30
            break
        }
        this.results.parkingSpace = (this.results.designDay * parkingPercentage) / 3.2 / 120
        this.results.foodSeats = (this.results.designDay * 0.95) / 3 / 2
        // show results
        this.showResults = true
      } else {
        this.formError = true
      }
    },
    editInput () {
      this.showResults = false
      this.currentQuote = this.buzzQuotes[0]
    },
    formatAttendanceDuringInput () {
      if (this.attendanceValue) {
        let attendanceValueDynamicFormat = this.attendanceValue.replace(/\D/g, '')
        attendanceValueDynamicFormat = parseInt(attendanceValueDynamicFormat)
        if (attendanceValueDynamicFormat > 50000000) {
          attendanceValueDynamicFormat = 50000000
        }
        this.attendanceValue = attendanceValueDynamicFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
    },
    formatNumber (x, rounding = true, conversion = false) {
      let formattedValue = x
      if (conversion) {
        switch (this.measureValue) {
          case 'acres':
            rounding = false
            break
          case 'square feet':
            rounding = true
            formattedValue *= 43560
            break
          case 'square meters':
            rounding = true
            formattedValue *= 4046.86
            break
          case 'hectares':
            rounding = false
            formattedValue /= 2.471

            break
        }
      }
      if (rounding) {
        return Math.ceil(formattedValue).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      } else {
        return formattedValue.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
    },
    resetApp () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.seasonalValue = 'yes'
      this.lengthValue = '2 hours'
      this.themeValue = 'ride-based'
      this.transportationValue = 'car'
      this.measureValue = 'acres'
      this.attendanceValue = null
      this.showResults = false
      this.currentQuote = this.buzzQuotes[0]
      this.results = {
        peakMonth: 0,
        peakWeek: 0,
        peakDay: 0,
        designDay: 0,
        peakDesignDay: 0,
        ridesVsExp: 0,
        hourlyCapacity: 0,
        attractionSize: 0,
        totalRideCount: 0,
        parkingSpace: 0,
        foodSeats: 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
.buzz-home{
  position: relative;
  overflow-x: hidden;
  .buzz-header{
    position: relative;
    margin-bottom: 40px;
    img.ask-buzz-hero{
      width: 140px;
      z-index: -10;
      position: relative;
    }
    a.more-reading-link{
      position: absolute;
      right: -12px;
      top: -4px;
      img.more-reading-img{
        width: 200px;
      }
    }
  }
  .speech-bubble{
    width: 160px;
  }
  .width-30{
    width: 30%;
  }
  h2, .h2{
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: #2E4357;
    font-family: 'Roboto', sans-serif;
    display: block;
    margin: 0;
  }
  h3, .h3{
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-transform: uppercase;
    color: #51779B;
    font-family: 'Roboto', sans-serif;
    display: block;
    margin: 0;
    margin-bottom: 8px;
  }
  .form-results-container{
    padding-right: 24px;
    padding-top: 24px;
  }
  .main-form h2, .main-form .h2{
    margin-bottom: 16px;
  }
  .attendance-input{
    width: 100%;
    max-width: 280px;
  }
  p.error-flag{
    padding: 0;
    margin-top: 8px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #e60000;
  }
  .results-header{
    justify-content: flex-start;
    .edit-input-button{
      height: 20px;
    }
  }
  .main-results h2, .main-results .h2{
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 8px;
  }
  .result-group{
    margin-bottom: 48px;
  }
  .result-answer, .attendance-value{
    font-size: 36px;
    line-height: 40px;
    font-weight: 500;
    color: #51779B;
    margin-bottom: 8px;
  }
  .attendance-value{
    color: #2E4357;
  }
  .result-description, p.result-description{
    font-size: 16px;
    font-weight: 400;
    color: #66686A;
    margin: 0;
    max-width: 600px;
  }
  .more-questions-header{
    font-size: 18px;
    color: #51779B;
    font-weight: 500;
    text-align: center;
    margin: 12px 0px 60px;
  }
  .more-questions-circles{
    position: relative;
    height: 520px;
  }

  // media queries
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    .buzz-header{
      margin-bottom: 60px;
      img.ask-buzz-hero{
        width: 220px;
        z-index: -10;
        position: relative;
      }
      a.more-reading-link{
        right: 0px;
        top: -4px;
        img.more-reading-img{
          width: 260px;
        }
      }
    }
    .more-questions-circles{
      height: 660px;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    .form-results-container{
      padding-right: 0px;
      padding-top: 0px;
      position: relative;
      top: -100px;
    }
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
}
</style>
