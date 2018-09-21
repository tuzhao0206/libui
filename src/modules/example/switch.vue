<template>
  <div>
    <bt-space space="25px">
      <small>:beforeChange</small>       
      <bt-switch v-model="value" :beforeChange="beforeChange"></bt-switch>
      <small>@change</small>
      <bt-switch v-model="value" @change="change"></bt-switch>
      <small>disabled</small>
      <bt-switch v-model="value" @change="change" disabled></bt-switch>
      <small>loading + :beforeChange</small>
      <bt-switch v-model="value" :beforeChange="beforeChange1" :loading="loading"></bt-switch>
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
      loading: false,
    };
  },

  computed: {},

  mounted() {},

  methods: {
    beforeChange(val) {
      let res = confirm('确认修改？');
      if (res) {
        return true;
      } else {
        return false;
      }
    },
    change(val) {
      console.log(val);
    },
    beforeChange1(val) {
      this.loading = true;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.loading = false;
          resolve(true);
        }, 2000);
      });
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
