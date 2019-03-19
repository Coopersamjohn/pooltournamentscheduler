<template>
  <div id="pts">  
    <div v-if="show0">
      <button v-on:click="show0 = false, show1 = true" class="btn btn-default">Let's get started!</button>
    </div>

    <!-- First Page -->    
    <div v-if="show1">
      <label> Select the Start Date for this tournament 
        <start-date v-model="startDate" /> 
      </label>
      <label> How many teams are playing this round? 
        <numbIn v-model="numTeams" /> 
      </label>
      <label> How many locations are hosting this round? 
        <numbIn v-model="numLocs" /> 
      </label>
      <button v-on:click="show1 = false, show2 = true, adding(), makeLocations()" type="submit" class="btn btn-default">Submit</button>
    </div>

    <!-- Second Page -->
    <div v-if="show2">
      <h1> Locations instantiated into data: {{ locations }} </h1>
      <br>
      <p> There are {{ numLocs }} locations hosting games for this tournament. </p>
      <div v-for="loc in locations" :key="loc.locID">
        <label> Host Name {{ loc.locID }} 
          <textIn v-model="loc.name" />
        </label>
        <label> How many teams are hosted by this location?
          <numbIn v-model="loc.numLocTeams" />
        </label>
      </div>
      

      <!-- <p>This tournament starts on {{ startDate.replace(/-/g,"/") }}.</p> 
      <p>Next week: {{ dates }}.</p>
      <h1> There are {{ matperloc() }} matches per location each week. </h1>
      <p>There are {{ numTeams }} teams playing.</p>
      <p> There are {{ matches() }} matches this round. </p>
      <p> There are {{ weeks() }} weeks this round. </p>
      <p> There are {{ matperweek() }} matches per week this round. </p>
       -->
      <button v-on:click="show2 = false, show1 = true"> Go Back </button>
      <button v-on:click="show2 = false, show3 = true, makeTeams()" type="submit" class="btn btn-default">Submit</button>
    </div>

    <!-- Third Page - Make Team Names -->

    <div v-if="show3">
      <div v-for="(loc, a) in locations" :key="`${a}-${loc.locid}`">
        <label> {{ loc.name }}
          <textIn v-for="team in loc.teams" :key="team.teamID" v-model="team.teamname" />
        </label>
      </div>
      <h1> You just made {{ locations }} many teams </h1>
      <date v-for="date in dates" :key="date.id" :date="date" class="date" />
      <button v-on:click="show3 = false, show2 = true"> Go Back </button>
      <button v-on:click="show3 = false, show4 = true"> Submit </button>
      
      <!-- <table class="mobile">
        <tr>
          <th> Date </th>
          <th v-for="date in dates" v-bind:key="date.id" v-bind:date="date">{{ key }}{{ dates.date }}</th>
        </tr>        
      </table> -->
    </div>

    <div class="schedule" v-if="show4">
      <h1> You just made {{ locations }} teams </h1>
      <date v-for="date in dates" :key="date.id" :date="date" class="date" />
      <div v-for="(loc, e) in locations" :key="`${e}-${loc.locid}`">
        <teamname v-for="(team, d) in loc.teams" :key="`${d}-${team.teamID}`" />
      </div>
      <button v-on:click="show4 = false, show3 = true"> Go Back </button>
    </div>

  </div>
</template>

// GO SEE THE SIMPLE TODO LIST ON CODE PEN< SAVED IN YOUR BOOKMARKS //

<script>
import startDate from './startDate.vue';
import date from './date.vue';
import numbIn from './numbIn.vue';
import textIn from './textIn.vue';
import teamname from './teamname.vue';

// for some reason, the variables I use to update the IDs //
// in the locations and dates objects need to go here to work //
let wk = 1
let locd = 1
let teamd = 1

export default {
  name: 'PTS',
  data: function () {
    return {
      startDate: null,
      dates: [
      ],
      numTeams: null,
      numLocs: null,
      show0: true,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      numWeeks: null,
      numMatches: null,
      locations: [
      ],
      teams: [
      ],
      events: [
        {
          eventID: 0,
          eventDate: null,
          eventLoc: '',
          eventMatches: 0,
          eventTeams: [],
          matches: [
            {
              matchID: 0,
              matchTeams: [],
              matchLoc: "",
              matchDate: ""
            }
          ]
        }
      ]
    };
  },
  components: {
    startDate,
    date,
    numbIn,
    textIn,
    teamname
  },
  computed: {
    makeTeams() {
      for (var q = 0; q <= this.numLocs ; q++) {
        for (var s = 0; s < this.locations[q].numLocTeams ; s++) {
          this.locations[q].teams.push(
            {
              teamID: teamd++,
              teamname: "",
              affinity: this.locations[q].name
            }
          );
          console.log("teams created");
        };
      };
      return console.log(this.locations.teams);
    }
  },
  methods: {
    matches() {
      var numMatches = 0;
      for (var i = this.numTeams - 1; i > 0; i--) {
        numMatches += i;
      } 
      return numMatches;
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
      var y = this.matperweek() / this.numLocs;
      return y;
    },
    makeLocations() {
      for (var z = 1; z <= this.numLocs; z++) {
        this.locations.push(
          {
            locID: locd++,
            name: "",
            numLocTeams: 0,
            teams: []
          }
        );
      };
    },
    adding() {
      var minutes = 1000 * 60;
      var hours = minutes * 60;
      var days = hours * 24;
      var years = days * 365;
      // this RegEx expression is used to convert the date into the correct format //
      // otherwise, all your dates you select will be one day behind because //
      // it doesn't use locale time, instead UTC error!!! //
      // these extra lines were how I compressed the code, once I figured out //
      // the error was in the date string format going into the date instantiation object //
      // var localstartdate = this.startDate.replace("-","/");
      // var convdate = new Date(this.startDate.replace("-","/"));
      var startDateMilliSeconds = Date.parse(this.startDate.replace("-","/"));
      var newDateMilliSeconds = 0;
      var wkDate = 0;
      var numwks = this.weeks();
      for (var w = 0; w < numwks; w++) {
        newDateMilliSeconds = startDateMilliSeconds + (w * (7 * days));
        wkDate = new Date(newDateMilliSeconds).toLocaleDateString();
        this.dates.push(
          {
            id: wk++,
            date: wkDate
          }
        );
        wkDate = "";
      };
    }
	}
};
</script>

<style>
#pts {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: auto;
  width: 600px;
  float: center;
}

.date {
  display: inline-flex;
  margin: 5px;
}

.btn {
  margin: 1em;
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
