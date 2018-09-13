<template>
  <div id="app">
    <div class="container">
        <p> what's next? </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newsch2',
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
