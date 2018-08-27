<template>
  <ex-view>
    <ex-header title="翻页示范">
      <ex-menu class="text-gray" @click="$router.back()">
        <i class="bt-icon">&#xe60e;</i>
      </ex-menu>
      <ex-title />
    </ex-header>
    <ex-content>
      <bt-space space="80px 25px">
        <bt-page :total="200" :page="page" :size="10" @change="next" />
      </bt-space>
      <bt-space space="80px 25px" class="text-center">
        <bt-page :total="200" :page="page" :size="10" @change="next" />
      </bt-space>
      <bt-space space="80px 25px" class="text-right">
        <bt-page :total="200" :page="page" :size="10" @change="next" />
      </bt-space>
    </ex-content>
  </ex-view>
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
