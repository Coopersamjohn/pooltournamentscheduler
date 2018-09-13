<template>
  <div id="app">
    <img src="./assets/logo1.png">
    <p>{{ msg }}</p>
    <div v-if="show0">
      <button v-on:click="show = true, show0 = false, show1 = true" class="btn btn-default">Let's get started!</button>
    </div>
    <div v-if="show" class="mobile">
      <div class="container">
        <form>
          <div class="form-group">
            <label for="startDate">Start Date for this round</label>
            <input v-model="startDate" type="date" class="form-control" id="startDate" name="startDate">
          </div>
          <div class="form-group">
            <label for="numTeams">Number of Teams for this round</label>
            <input v-model.number="numTeams" type="number" class="form-control" id="numTeams" placeholder="How many teams?" name="numTeams">
            <p> There are {{ numTeams }} teams this round. </p>
            <p> There are {{ matches() }} matches this round. </p>
            <p> There are {{ weeks() }} weeks this round. </p>
            <p> There are {{ matperweek() }} matches per week this round. </p>
          </div>
          <div class="form-group">
            <label for="numLocations">Number of Locations for this round</label>
            <input v-model.number="numLocations" type="number" class="form-control" id="numLocations" placeholder="How many locations?" name="numLocations">
            <p> There are {{ matperloc() }} matches per location per week this round. </p>
          </div>
        </form>
      </div>
    </div>
    <div v-if="show1">
      <button v-on:click="show = false, show1 = false, show2 = true, show3 = true" type="submit" class="btn btn-default">Submit</button>
    </div>
    <div v-if="show2" class="mobile">
      <div class="container">
        <form>
          <div v-for="(locs, index) in numLocations" class="form-group">
            <label for="nameLocation">Location Name {{ index + 1 }}</label>
            <input type="string" class="form-control" id="nameLocation" placeholder="Location Name?" name="nameLocation">
            <p> {{ nameLocation }} </p>
          </div>
          <div class="form-group">
            <label for="numTables">Number of Tables</label>
            <input v-model.number="numTables" type="number" class="form-control" id="numTables" placeholder="How many tables?" name="numTables">
            <p> {{ numTables }} </p>
          </div>
          <div class="form-group">
            <label for="nameTeams">Team Name #1</label>
            <input v-model="nameTeams" type="string" class="form-control" id="nameTeams" placeholder="Team Name?" name="nameTeams">
          <p> {{ nameTeams }} </p>
          </div>
          <div class="form-group">
            <label for="nameTeamMembers">Team Member Name #1</label>
            <input v-model="nameTeamMembers" type="string" class="form-control" id="nameTeamMembers" placeholder="Team Member Name?" name="nameTeamMembers">
          <p> {{ nameTeamMembers }} </p>
          </div>
        </form>
      </div>
    </div>
    <div v-if="show3">
      <button v-on:click="show2 = false, show3 = false, show4 = true" type="submit" class="btn btn-default">Submit</button>
    </div>
    <div v-if="show4" class="container">
      <p> {{ matches() }} </p>
      <table class="mobile">
        <tr>
          <th> Date </th>
          <th v-model="numLocations" v-for="locs in numLocations"> 
            {{ nameLocation }} 
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return {
      msg: 'printable, weekly schedule the easy way',
      show0: true,
      show: false,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      numTeams: '',
      numLocations: '',
      startDate: '',
      nameLocation: {
        locName: '',
        locName1: '',
        locName2: '',
        locName3: ''
      },
      nameTeams: '',
      nameTeamMembers: '',
      numOfTables: '',
      homeAffinity: '',      
      numWeeks: '',
      numMatches: 0
    };
  },
  methods: {
    matches() {
      var numMatches = 0;
      for (var i = this.numTeams - 1; i > 0; i--) {
        numMatches += i
      } 
      return numMatches
    },
    weeks() {
      var numWeeks = this.numTeams - 1;
      return numWeeks;
    },
    matperweek() {
      var x = this.matches() / this.weeks();
      return x;
    },
    matperloc() {
      var y = this.matperweek() / this.numLocations;
      return y;
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mobile {
  margin: auto;
  width: 600px;
  float: center;
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
