<template>
  <div id="">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BtCheckboxGroup',
  components: {},

  props: {
    value: Array,
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
    max: Number,
  },

  watch: {
    value(val) {
      this.$emit('change', val);
    },
  },

  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less" style="text/less">
</style>
