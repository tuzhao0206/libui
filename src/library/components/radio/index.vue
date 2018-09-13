/** 
* 针对业务的特殊需求，点击单选框，可能会有弹层的出现，
* 当点击弹层里的“取消”按钮时，要取消选中状态（前一个状态是啥就是啥），
* 然而目前大部分ui框架皆为‘点击后直接赋值’，当点击弹窗里的“取消”按钮，无法恢复之前的状态。
* 所以此处改为，点击之后做回调，由父组件在回调函数里控制activeValue。
*/
<template>

  <label class="bt-radio"  @click="setActiveValue"
    :class="[{
        'is-checked': value === myActiveValue,
        'is-disabled': isDisabled,
        'is-block': isVertical,
        'button': myShape === 'button'
      }, mySize]"
  >

    <span class="bt-radio_input" >
      <i class="bt-radio_icon circle" v-if="myShape === 'circle'"></i>
      <i class="bt-radio_icon bt-icon checkbox " v-if="myShape === 'checkbox'"><b>&#xe620;</b></i>
      <!-- label标签里嵌表单元素，会导致点击babel会促发表单元素 -->
      <!-- <input 
        type="radio"
        :value="value"
        class="bt-radio__original"
      > -->
    </span>

    <span class="bt-radio__label" >
      <slot></slot>
      <!-- 没有插槽，使用value属性 -->
      <template v-if="!$slots.default">{{value}}</template>
    </span>

  </label>
</template>

<script>
import findParent from '../../mixins/find-parent';
export default {
  name: 'BtRadio',

  mixins: [findParent],

  components: {},

  props: {
    value: {},
    activeValue: {},
    disabled: {
      type: Boolean,
    },
    shape: {
      type: String,
      default: 'circle', // checkbox、circle
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default', // xs,sm,md,lg,【lg，暂未开发】
    },
  },

  data() {
    return {};
  },

  computed: {
    myActiveValue() {
      return this.parent ? this.parent.activeValue : this.activeValue;
    },
    isVertical() {
      return this.parent ? this.parent.vertical : this.vertical;
    },
    isDisabled() {
      return this.parent ? this.parent.disabled || this.disabled : this.disabled;
    },
    myShape() {
      return this.parent ? this.parent.shape : this.shape;
    },
    mySize() {
      return this.parent ? this.parent.size : this.size;
    },
  },

  created() {
    this.findParent('BtRadioGroup');
  },

  mounted() {},

  methods: {
    setActiveValue() {
      if (this.isDisabled) {
        return;
      }
      if (this.parent) {
        this.parent.$emit('setActive', this.value);
      } else {
        this.$emit('setActive', this.value);
      }
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
