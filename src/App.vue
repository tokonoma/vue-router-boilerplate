<template>
  <div id="buzz-app">
    <router-view/>
  </div>
</template>

<style lang="scss">
@import '@/styles/utilities.scss';
@import '@/styles/bs-grid';

button{
  cursor: pointer;
}
button.app-btn, a.app-btn{
  display: inline-block;
  text-decoration: none;
  padding: 20px 32px;
  background-color: blue;
  border: none;
  color: #fff;
  border-radius: 2px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  &.start-over{
    background-color: #EB1939;
  }
}
button.link-btn{
  text-decoration: underline;
  color:blue;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  font-size: 16px;
  line-height: 20px;
  display: inline-block;
}
input[type=text],
input[type=tel],
input[type=number],
input[type=email] {
  padding: 12px;
  border: solid 1px #333;
  border-radius: 2px;
  font-size: 18px;
  background-color: #fff;
  &::placeholder{
    color: #888;
  }
  &.has-error{
    border-color: red;
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
