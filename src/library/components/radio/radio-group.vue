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
      default: 'sm', // xs,sm,md,lg
    },
  },
  data() {
    return {};
  },

  computed: {},
  watch: {},
  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less" style="text/less">
</style>
