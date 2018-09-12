<template>
  <div class="section">
    <bt-stepper
      :min="1"
      :max="10"
      :step="2"
      :disabled="false"
      @change="ajax()"
      :enableZero = "false"
      v-model="productCount">
    </bt-stepper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productCount: 1,
    };
  },
  methods: {
    ajax() {},
  },
};
</script>
<style lang="less" scoped>
div.section {
  margin: 60px;
}
</style>
