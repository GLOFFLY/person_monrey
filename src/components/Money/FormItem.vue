<template>
  <div>
    <label class="formItem">
      <span class="name">{{this.fieldName}}</span>
      <input type="text" :placeholder="placeholder"
             :value="value" @input="onValueChanged($event.target.value)">
    </label>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Watch} from 'vue-property-decorator';
import Vue from 'vue';

@Component
export default class FormItem extends Vue {
  @Prop({default:''}) readonly value!:string;

  @Prop({required:true}) fieldName!: string;
  @Prop() placeholder?: string;

  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style scoped lang="scss">
.formItem {
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
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
  }
}
</style>