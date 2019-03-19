<template>
  <div>
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on="inputListeners"
        type="number"
        class="Input"
      >
  </div>
</template>

<script>
export default {
  name: 'numbIn',
  props: ['label', 'value'],
  computed: {
    inputListeners: function () {
      var vm = this;
      return Object.assign({}, this.$listeners,{input: function (event) {vm.$emit('input', event.target.value);}});
    }
  }
}
</script>

<style scoped>

</style>
