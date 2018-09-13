<template>
  <div id="app">
    <div v-if="show" class="container">
      <form action="calcMatch"> /* this is produced in the address bar inputs?startDate=2018-09-12&numTeams=4&numLocations=4 */
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
</template>

<script>
import Newsch1 from '../components/newsch1.vue';

export default {
  name: 'Newsch',
  data() {
    return {
      show: true,
      show1: false,
      numTeams: null,
      numLocations: null,
      startDate: '',
      nameLocations: '',
      nameTeams: '',
      nameTeamMembers: '',
      numOfTables: '',
      homeAffinity: '',      
      numWeeks: null,
      numMatches: 0
    }
  },
  components: {
    Newsch1
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
