<template lang="pug">
  .form
    .top
      img(src="~assets/text.png")
    .background
      .content-background
        img(src="~assets/text_BG.png")
        .content
          textarea
      .name
        img(src="~assets/name.png")
      .name-form
        input(type="text")
    .button
      img(src="~assets/btn_yellow.png")
    .back
      img(src="~assets/back.png")
</template>

<script>
export default {
}
</script>

<style lang="sass" scoped>
.form
  background-image: url(~assets/BG_dot.jpg)
  background-repeat: repeat
  text-align: center
  min-width: 750px
  & .top
    padding-top: 50px
    padding-bottom: 30px
    & img
      width: 525px
  & .background
    width: 670px
    display: inline-block
    height: 580px
    background-color: #b5b5b5
  & .content-background
    margin-top: 50px
    position: relative
    & img
      width: 600px
  & .content
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
    margin: 0
    padding: 0
    & textarea
      width: 510px
      height: 150px
      border: none
      font-size: 50px
      box-shadow: none
      outline: 0
      text-align: left
      font-family: 'Noto Sans Japanese', sans-serif
      font-weight: bold
      font-style: oblique
  & .name
    margin-top: 60px
    margin-bottom: 10px
    & img
      width: 100px
  & .name-form
    & input
      width: 630px
      height: 100px
      border: none
      font-size: 42px
      box-shadow: none
      outline: 0
      text-align: center
      font-family: 'Noto Sans Japanese', sans-serif
  & .button
    padding-top: 30px
    padding-bottom: 60px
    & img
      width: 600px
  & .back
    padding-bottom: 50px
    & img
      width: 200px
</style>
