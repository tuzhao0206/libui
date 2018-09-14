<template>
  <div class="bt-checkbox" @click="onClick"
    :class="[{
        'is-checked': currentValue,
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
</template>

<script>
import findParent from '../../mixins/find-parent';

export default {
  mixins: [findParent],

  components: {},

  props: {
    label: {}, // 每个复选按钮的值
    value: {}, // 选中的值,一个或多个
    disabled: {
      type: Boolean,
    },
    shape: {
      type: String,
      default: 'checkbox', // checkbox、circle、button
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
    // currentValue: true||false 当前的选中状态;
    // this.parent.value是数组
    currentValue: {
      get() {
        return this.parent ? this.parent.value.indexOf(this.label) !== -1 : this.value;
      },
      set(val) {
        // 当改变myValue的值时自动触发
        if (this.parent) {
          const parentValue = this.parent.value.slice();
          if (val) {
            // 想选中
            if (this.parent.max && parentValue > this.parent.max) {
              // 超出max
              return;
            }
            if (parentValue.indexOf(this.label) === -1) {
              // 没有选中过
              parentValue.push(this.label);
              this.parent.$emit('input', parentValue);
            }
          } else {
            // 取消选中
            const index = parentValue.indexOf(this.label);
            if (index !== -1) {
              parentValue.splice(index, 1);
              this.parent.$emit('input', parentValue);
            }
          }
        } else {
          this.$emit('input', val);
        }
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

  watch: {
    value(val) {
      this.$emit('change', val);
    },
  },

  created() {
    this.findParent('BtCheckboxGroup');
  },

  methods: {
    onClick() {
      if (this.isDisabled) {
        return;
      }
      (this.parent || this).$emit('beforeChange', this.label);
      this.currentValue = !this.currentValue;
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
