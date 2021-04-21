<template>
  <ul class="types">
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  @Prop(Number) propA: number | undefined;
  type = '-'; //'-'表示吃出 '+'表示收入  赋值语句自动变成data
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
  mounted(){
    console.log(this.propA);
  }
}


// export default {
//   name: "Types",
//   data() {
//     return {
//       type: '-'//'-'表示吃出 '+'表示收入
//     }
//   },
//   methods: {
//     selectType(type) {
//       if (type !== '-' && type !== '+') {
//         throw new Error('type is unknown')
//       }
//       this.type = type
//     }
//   }
// }
</script>

<style scoped lang="scss">
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 4px;
      background: #333;
    }
  }
}
</style>