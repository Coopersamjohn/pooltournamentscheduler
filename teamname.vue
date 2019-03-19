<template>
  <div class="container">
    <p> {{ teams.teamname }} </p>
  </div>
</template>

<script>
export default {
  name: 'teamname',
  props: {
    teamname: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
