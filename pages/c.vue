<template>
  <div class="form">
    <div class="content">
      <img src="~assets/end.png"> 
    </div>
    <div class="back">
      <img src="~assets/back.png">
    </div>
  </div>
</template>

<script>

</script>

<style lang="sass" scoped>
.form
  background-image: url(~assets/BG_dot.jpg)
  background-repeat: repeat
  text-align: center
  min-width: 750px
  & .content
    padding-top: 50px
    padding-bottom: 110px
    display: inline-block
    & img
      width: 680px
  & .back
    padding-bottom: 100vh
    display: inline-block
    & img
      width: 200px
</style>
