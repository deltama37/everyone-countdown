<template>
  <div class="form">
    <form @submit.prevent="login">
      <div class="top">
        <img src="~assets/text.png">
      </div>
      <div class="background">
        <div class="content-background">
          <img src="~assets/text_BG.png">
          <div class="content">
            <textarea v-model="content" placeholder="投稿" name="content" />
          </div>
        </div>
        <div class="name">
          <img src="~assets/name.png">
        </div>
        <div class="name-form">
          <input type="text" v-model="name" placeholder="名前" name="name">
        </div>
      </div>
      <div class="button">
        <button type="submit">
          <img src="~assets/btn_yellow.png">
        </button>
      </div>
      <div class="back">
        <img src="~assets/back.png">
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "@/plugins/firebase.js";
import moment from "moment";
export default {
  name: "myform",
  data() {
    return {
      error: null,
      content: "",
      name: ""
    };
  },
  methods: {
    login() {
      const db = firebase.firestore();
      db.collection("contents")
        .add({
          content: this.content,
          name: this.name,
          created_at: moment().unix(),
          counter: 0
        })
        .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
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
    padding-bottom: 100vh
    & img
      width: 200px
</style>
