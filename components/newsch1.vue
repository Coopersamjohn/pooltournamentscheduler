<template>
  <div id="app">
    <div class="container">
      <form action="inputs1">
        <div class="form-group">
          <label for="nameLocations">Location Name #1</label>
          <input v-model="nameLocations" type="string" class="form-control" id="nameLocations" placeholder="Location Name?" name="nameLocations">
        <p> {{ nameLocations }} </p>
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
</template>

<script>
export default {
  name: 'Newsch1',
  data() {
    return {
      nameLocations: '',
      nameTeams: '',
      nameTeamMembers: '',
      numTables: '',
      homeAffinity: '',      
      numWeeks: '',
      numMatches: ''
    }
  },
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
