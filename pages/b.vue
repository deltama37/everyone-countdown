<template>
  <div class="form">
    <div class="top">
      <img src="~assets/top.png">
    </div>
    <div class="countup">
      <img src="~assets/bg_count.png">
      <div class="year">
        <p class="big">30</p>
        <p class="small">年</p>
        <p class="big">365</p>
        <p class="small">日</p>
      </div>
      <div class="time">
        <p class="big-big">01</p>
        <p class="medium">時</p>
        <p class="big-big">23</p>
        <p class="medium">分</p>
        <p class="big-big">45</p>
        <p class="medium">秒</p>
        <p class="medium">67</p>
      </div>
    </div>
    <div class="areas">
      <img src="~assets/bg_area.png">
      <img class="center" src="~assets/bg_area.png">
      <img src="~assets/bg_area.png">
      <div v-for="(content, index) in contents">
        <div class="content">
          <template v-if="(index - 1) % 3 === 0">
            <div class="content-left">
              <p class="main">{{content.content}}</p>
              <p class="name">{{content.name}}</p>
            </div>
          </template>
          <template v-if="(index - 1) % 3 === 1">
          <div class="content-center">
            <p class="main">{{content.content}}</p>
            <p class="name">{{content.name}}</p>
          </div>
          </template>
          <template v-if="(index - 1) % 3 === 2">
            <div class="content-right">
              <p class="main">{{content.content}}</p>
              <p class="name">{{content.name}}</p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="count">
      <p>11</p>
      <p class="center">11</p>
      <p>11</p>
    </div>
    <div class="hold-on">
      <img src="~assets/icon.png">
      <img class="center" src="~assets/icon.png">
      <img src="~assets/icon.png">
    </div>
    <div class="button">
      <img src="~assets/btn_black.png">
    </div>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import moment from "moment";
export default {
  name: "contentslist",
  data() {
    return {
      contents: [],
      counter: 0
    };
  },
  mounted() {
    const db = firebase.firestore();
    db.collection("contents")
      .get()
      .then(snap => {
        const array = [];
        snap.forEach(doc => {
          var docdata = doc.data();
          docdata["id"] = doc.id;
          array.push(docdata);
        });
        this.contents = array;
      });
  },
  methods: {
    addcount(content) {
      const db = firebase.firestore();
      var docRef = db.collection("contents").doc(content.id);
      db.collection("contents")
        .doc(content.id)
        .get()
        .then(doc => {
          this.counter = doc.data().counter;
          docRef.update({
            counter: this.counter + 1
          });
          content.counter = this.counter + 1;
        });
    }
  }
};
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
    position: relative
    padding-bottom: 100vh
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
