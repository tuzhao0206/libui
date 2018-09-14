<template>
  <div id="">
    <div class="bt-checkbox" 
      :class="[{
          'is-checked': value === myActiveValue,
          'is-disabled': isDisabled,
          'is-block': isVertical,
          'button': myShape === 'button'
        }, mySize]"
    >

      <span class="bt-checkbox_input" >
        <i class="bt-checkbox_icon circle" v-if="myShape === 'circle'"></i>
        <i class="bt-checkbox_icon bt-icon checkbox " v-if="myShape === 'checkbox'"><b>&#xe620;</b></i>
      </span>

      <span class="bt-checkbox__label" >
        <slot></slot>
        <!-- 没有插槽，使用value属性 -->
        <template v-if="!$slots.default">{{value}}</template>
      </span>

    </div>
  </div>
</template>

<script>
import findParent from '../../mixins/find-parent';

export default {
  mixins: [findParent],

  components: {},

  props: {
    value: {}, // 每个复选按钮的值
    activeValue: {}, // 选中的值
    disabled: {
      type: Boolean,
    },
    shape: {
      type: String,
      default: 'circle', // checkbox、circle、button
    },
    vertical: {
      type: Boolean,
      default: false, // 垂直
    },
    size: {
      type: String,
      default: 'default', // xs,sm,md,lg,【lg，暂未开发】，对shape=button有效
    },
  },
  data() {
    return {};
  },

  computed: {
    myActiveValue: {
      get() {
        return this.parent ? this.parent.activeValue.indexOf(this.value) !== -1 : this.value;
      },
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

  methods: {},
};
</script>

<style scoped lang="less" style="text/less">
</style>
