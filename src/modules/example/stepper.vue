<template>
  <div class="section">
    <p class="title">基础用法</p>
    <bt-stepper
      :min="1"
      :max="90"
      :step="1"
      :disabled="false"
      @change="ajax()"
      :enableZero = "false"
      v-model="productCount">
    </bt-stepper>
    <p class="title">禁用状态</p>
    <bt-stepper
      :min="1"
      :max="10"
      :step="1"
      :disabled="true"
      @change="ajax()"
      :enableZero = "false"
      v-model="productCountDis">
    </bt-stepper>
    <p class="title">更广泛的支持</p>
    <bt-stepper
      :min="-10"
      :max="90"
      :step="1"
      :disabled="false"
      @change="ajax()"
      :enableZero = "true"
      v-model="productCountZero">
    </bt-stepper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productCount: 1,
      productCountDis: 1,
      productCountZero: 0,
    };
  },
  methods: {
    ajax() {},
  },
};
</script>
<style lang="less" scoped>
div.section {
  margin: 25px;
}
p.title {
  padding-top: 40px;
  padding-bottom: 15px;
}
p.title:first-of-type {
  padding-top: 20px;
}
</style>
