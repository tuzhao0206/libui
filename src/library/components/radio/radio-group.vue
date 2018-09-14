<template>
  <div class="bt-radio-group">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'BtRadioGroup',

  components: {},

  props: {
    value: {},
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
      default: 'sm', // xs,sm,md,lg
    },
  },

  data() {
    return {};
  },

  watch: {
    value(value) {
      this.$emit('change', value);
    },
  },
  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less" style="text/less">
</style>
