<template>
  <svg class="icon" @click="$emit('click',$event)">
    <use :xlink:href="'#'+name"/>
  </svg>
</template>

<script lang="ts">

try {
  // eslint-disable-next-line no-undef
  let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  importAll(require.context('../assets/icons', true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  props: ['name'],
  name: 'icon'
};
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  ovflow: hidden;
}
</style>