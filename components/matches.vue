<template>
  <div id="app">
    <div v-if="show" class="container">
      <form action="calcMatch">
        <div class="form-group">
          <p> There are {{ numMatches }} matches this round. </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'matches',
  data() {
    return {
      numMatches: null
    }
  },
  methods: {
    calcMatch: function() {
      for (var i in inputs.numTeams - 1) {
        let match, i;
        console.log (numMatches);
        return numMatches;
      }
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
