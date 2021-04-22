<template>
  <div>
    {{value}}
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="在这里添加备注" v-model="value">
    </label>
  </div>
</template>

<script lang="ts">
import {Component} from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class Types extends Vue {
  value = '';
}
</script>

<style scoped lang="scss">
.notes {
  font-size: 14px;
  background: #f5f5f5;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;

  .name {
    padding-right: 16px;
  }

  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>