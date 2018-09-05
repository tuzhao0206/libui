<template>
  <section>
    <bt-space space="80px 25px" class="text-center">
      <bt-page :total="total" @change="turnPage" />
    </bt-space>
  </section>
</template>
<script>
export default {
  data() {
    return {
      total: 111,
      size: 10,
    };
  },
  methods: {
    turnPage(page) {
      // setTimeout(() => {
      //   this.total = Math.floor(100 * Math.random());
      // }, 300);
    },
  },
};
</script>
<style lang="less" scoped>
</style>
