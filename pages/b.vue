<template lang="pug">
.form  
  .top
    img(src="~assets/top.png")
  .countup
    img(src="~assets/bg_count.png")
    .year
      p.big 30
      p.small 年
      p.big 365
      p.small 日
    .time
      p.big-big 01
      p.medium 時
      p.big-big 23
      p.medium 分
      p.big-big 45
      p.medium 秒
      p.medium 67  
  .areas
    img(src="~assets/bg_area.png")
    img.center(src="~assets/bg_area.png")
    img(src="~assets/bg_area.png")
    .content
      .content-left
        p.main あああああああああああああああああ
        p.name みすみ
      .content-center
        p.main あああああああああああああああああ
        p.name みすみ
      .content-right
        p.main いいいいいいいいいいいいいいいいい
        p.name みすみ
  .hold-on
    img(src="~assets/icon.png")
    img.center(src="~assets/icon.png") 
    img(src="~assets/icon.png")
  .count
    p 11
    p.center 11
    p 11 
  .button
    img(src="~assets/btn_black.png")    
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
    & img
      width: 750px
  & .countup
    margin-top: -100px
    margin-bottoom: 17px
    position: relative
    & img
      width: 750px   
  & .year
    display: flex 
    justify-content: center
    position: absolute
    flex-derection: row
    vertical-align: baseline
    top: 30%
    left: 30%
    bottom: 0
    color: white
    font-family: vdl-logojrblack, sans-serif
  & .time
    display: flex 
    justify-content: center
    position: absolute
    top: 50%
    left: 15%
    color: white
    font-family: vdl-logojrblack, sans-serif
  & .big
    font-size: 60px
  & .small
    font-size: 42px
  & .big-big
    font-size: 76px  
  & .medium
    font-size: 46px
  & .areas
    display: flex
    justify-content: center  
    position: relative  
    & img
      width: 210px
      height: 850px
    & .center
      margin-right: 17px  
      margin-left: 17px  
  & .content
    display: flex 
    justify-content: center
  & .content-left  
    position: absolute
    top: 10%
    left: 8%
    writing-mode: vertical-rl
    // width: 180px
  & .content-center 
    position: absolute
    top: 10%
    left: 38%  
    writing-mode: vertical-rl
  & .content-right
    position: absolute
    top: 10%
    left: 67%  
    writing-mode: vertical-rl
  & .main
    font-size: 50px
    // height: 180px
    text-align: left
    height: 600px
  & .name
    font-size: 20px  
    height: 600px
    text-align: right    
  & .count
    display: flex
    justify-content: center
    margin-top: -200px 
    position: relative   
    & p
      font-size: 50px
      font-style: oblique
      text-shadow: 4px
    & .center
      margin-right: 180px
      margin-left: 180px
  & .hold-on
    display: flex
    justify-content: center  
    margin-top: -70px 
    position: relative
    & img
      width: 210px
      height: 130px
    & .center  
      margin-right: 17px
      margin-left: 17px  
  & .button
    position: fixed
    bottom: 20px
    left: 25px
    right: 25px
    padding-bottom: 100px
    & img
      width: 700px         
</style>
