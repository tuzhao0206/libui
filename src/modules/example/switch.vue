<template>
  <div>
    <bt-space space="25px">
      <small>@beforeChange</small>       
      <bt-switch :value="value" @beforeChange="beforeChange"></bt-switch>
      <small>@change</small>
      <bt-switch v-model="value" @change="change"></bt-switch>
      <small>disabled</small>
      <bt-switch v-model="value" @change="change" disabled></bt-switch>
    </bt-space>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      value: true,
    };
  },

  computed: {},

  mounted() {},

  methods: {
    beforeChange(val) {
      let res = confirm('确认修改？');
      if (res) {
        this.value = val;
      }
    },
    change(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
