<template>
  <div :class="['bt-switch', {'disabled': disabled, 'active': value}]" @click="onClick">
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit('beforeChange', !this.value);
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
