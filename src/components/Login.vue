<template>
<md-layout md-align="center">
  <div class="login">
    <h1>{{ msg }}</h1>
    <form validate @submit.stop.prevent="attemptLogin">
      <md-input-container md-inline>
          <label>Your Username</label>
          <md-input required v-model="username"></md-input>
        </md-input-container>
      <md-button type="submit" class="md-raised md-primary">Click to proceed</md-button>
    </form>
    
  </div>
</md-layout>
</template>

<script>
import Peer from 'simple-peer'
import router from '@/router'
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welcome to test WebRTC',
      username:""
    }
  },
  methods: {
    attemptLogin: function(){
      if(this.username === "rohan"){
        router.replace('/initiator');
      } else{
        router.replace('/otherpeer');
      }
    }
  },
  created() {
    console.log("created") 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  margin-top: 80px;
  margin: 20px;
  width: 40%;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
