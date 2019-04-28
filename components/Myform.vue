<template>
  <div class="login-form">
    <form @submit.prevent="login">
      <p class="error" v-if="error">{{ error }}</p>
      <p>
        <input type="text" v-model="content" placeholder="投稿" name="content">
      </p>
      <p>
        <input type="text" v-model="name" placeholder="名前" name="name">
      </p>
      <div class="login-btn">
        <button type="submit">投稿</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "~/plugins/firebase.js";
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
      db.collection("contents")
        .add({
          content: this.content,
          insert_timestamp: firestore.Timestamp.now(),
          name: this.name
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
