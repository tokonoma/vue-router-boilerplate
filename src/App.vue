<template>
  <div id="buzz-app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/utilities.scss';
@import '@/styles/bs-grid';

body{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  margin: 0;
}
.fixed-width-container{
  max-width: 720px;
  width: 100%;
}
.fixed-width-text{
  max-width: 600px;
  width: 100%;
}
button{
  cursor: pointer;
}
button.buzz-btn, a.buzz-btn{
  display: inline-block;
  text-decoration: none;
  padding: 20px 32px;
  background-color: #51779B;
  border: none;
  box-shadow: 0 8px 16px 0 rgba(81,119,155,0.4);
  color: #fff;
  border-radius: 40px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
  &.start-over{
    background-color: #EB1939;
  }
}
button.buzz-link-btn{
  text-decoration: underline;
  color:#51779B;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
}
#buzz-app{
  .vue-slider-dot-handle{
    background-color: #51779B;
  }
  .vue-slider-rail{
    background-color: #DEE6ED;
  }
  .vue-slider-process{
    background-color: #51779B;
  }
  .vue-slider-mark-step, .vue-slider-mark-step-active{
    background-color: #51779B;
  }
  .vue-slider-dot-handle::after{
    background-color: rgba(#51779B, 0.38)
  }
  .vue-slider-mark-label, .vue-slider-mark-label-active{
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    color: #51779B;
    font-family: 'Roboto', sans-serif;
  }
  .vue-slider-ltr .vue-slider-mark-label{
    margin-top: 16px;
    text-align: center;
  }
  .vue-slider-mark:first-of-type .vue-slider-mark-label{
    left: -8px;
    -webkit-transform: none;
    transform: none;
    text-align: left;
  }
  .vue-slider-mark:last-of-type .vue-slider-mark-label{
    left: auto;
    right: -8px;
    -webkit-transform: none;
    transform: none;
    text-align: right;
  }
}
input[type=text],
input[type=tel],
input[type=number],
input[type=email] {
  // height: 48px;
  padding: 12px;
  border: solid 1px #51779B;
  border-radius: 2px;
  font-size: 18px;
  font-weight: 300;
  color: #51779B;
  background-color: #fff;
  &::placeholder{
    color: #CAC7C7
  }
  &.has-error{
    border-color: #e60000;
  }
}
.speech-bubble {
  position: relative;
  background: #51779B;
  border-radius: 8px;
  padding: 16px;
  max-width: 100%;
  min-height: 80px;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  top: -12px;
  left: 24px;
}
.speech-bubble:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 0;
  border: 16px solid transparent;
  border-top-color: #51779B;
  border-bottom: 0;
  border-left: 0;
  margin-left: -16px;
  margin-bottom: -16px;
}
//info-pages
.back-container{
  margin-bottom: 40px;
}
a.back-button{
  text-decoration: none;
  color: #3872B0;
  font-size: 16px;
  font-weight: 500;
}
.info-page{
  padding: 0px 24px;
  h1{
    font-size: 24px;
    text-align: center;
    font-weight: 500;
    color: #3872B0;
  }
  p{
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
    margin-bottom: 24px;
    &:last-of-type{
      margin-bottom: 12px;
    }
  }
  .quote{
    border-left: solid 4px #51779B;
    padding-left: 12px;
  }
  .quote-byline{
    text-align: right;
    a {
      color: #15C;
    }
  }
  img.info-img{
    width: 100%;
    height: auto;
  }
  h2{
    font-size: 18px;
    font-weight: 500;
    color: #3872B0;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
}
ul.reset,
ul.reset li,
ul.reset ul li {
  margin:0;
  padding: 0;
  text-indent: 0;
  list-style-type: none;
}
// media queries -at and up-
// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
  .info-page{
    padding: 0px 0px;
  }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {}

// media queries -at and down-
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
  #buzz-app{
    .vue-slider-mark-label{
      display: none;
    }
    .vue-slider-mark:first-of-type .vue-slider-mark-label{
      display: block;
    }
    .vue-slider-mark:last-of-type .vue-slider-mark-label{
      display: block;
    }
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  #buzz-app{
    .vue-slider-mark-label{
      white-space: normal;
    }
  }
}

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) {}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) {}
</style>
