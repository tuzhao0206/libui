<template>
  <section>
    <bt-space space="80px 25px">
      <bt-page :total="200" :page="page" :size="10" @change="next" />
    </bt-space>
    <bt-space space="80px 25px" class="text-center">
      <bt-page :total="200" :page="page" :size="10" @change="next" />
    </bt-space>
    <bt-space space="80px 25px" class="text-right">
      <bt-page :total="200" :page="page" :size="10" @change="next" />
    </bt-space>
  </section>
</template>
<script>
export default {
  data() {
    return { page: 1 };
  },
  methods: {
    next(page) {
      this.page = page;
      console.log(page);
    },
  },
};
</script>
<style lang="less" scoped>
</style>
