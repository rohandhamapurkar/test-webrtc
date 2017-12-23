<template>
<md-layout md-align="center">
  <div class="initiator">
    <h1>{{ msg }}</h1>
    <h2>Your peer ID</h2>
    <md-input-container>
        <md-textarea v-model="yourpeerid" disabled></md-textarea>
    </md-input-container>
    <form v-if="this.peerinit" validate @submit.stop.prevent="attemptConnection">
      <md-input-container md-inline>
          <label>Friend's Peer Id</label>
          <md-input required v-model="inputpeerid"></md-input>
        </md-input-container>
      <md-button type="submit" class="md-raised md-primary">Click here submit peer id</md-button>
    </form>
    <form v-if="this.peerinit" validate @submit.stop.prevent="sendData">
      <md-input-container md-inline>
          <label>data</label>
          <md-input required v-model="inputdata"></md-input>
        </md-input-container>
      <md-button type="submit" class="md-raised md-primary">Click here submit peer id</md-button>
    </form>
    
  </div>
</md-layout>
</template>

<script>
import Peer from 'simple-peer'
export default {
  name: 'Initiator',
  data () {
    return {
      msg: 'Welcome Initiator',
      peerinit:false,
      yourpeerid:"",
      inputpeerid:"",
      inputdata:"",
      p : null
    }
  },
  methods: {
    attemptConnection: function(){
      this.p.signal(JSON.parse(this.inputpeerid))
    },
    sendData: function(){
      this.p.send(this.inputdata)
    }
  },
  created() {
    console.log("created")
    let that = this;
    this.p = new Peer({ initiator: true, trickle:false })

    this.p.on('signal', function (data) {
      that.yourpeerid = JSON.stringify(data)
      that.peerinit = true;
    })

    this.p.on('connect', function () {
      console.log('CONNECT')
    })
    
    this.p.on('data', function (data) {
      console.log('data: ' + data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.initiator {
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
