<template>
  <div class="contents">
    <p>aaa</p>
    <div v-for="content in contents" v-bind:key="content.content">
      {{content.content}}
      {{content.id}}
      <button
        v-on:click="addcount(content)"
      >応援する{{content.counter}}</button>
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
