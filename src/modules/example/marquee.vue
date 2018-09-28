<template>
  <div>

    <bt-space space="25px" style="width: 300px;border:1px solid #ccc;padding:10px;">
      <small>:普通使用</small>       
      <bt-marquee>修改的话不行，也用过deleteRules可以删除规则，但是insertRule却是undefined</bt-marquee><br>
      <small>:鼠标悬浮滚动</small>       
      <bt-marquee :hover="true">修改的话不行，也用过deleteRules可以删除规则，但是insertRule却是undefined</bt-marquee><br>
      <small>带标签</small>
      <bt-marquee html="<a style='color: red;font-size:18px'>修改的话不行，也用goudeleteRules可以删除规则修改的话不行，也用过ded但1</a>"></bt-marquee><br>
      <small>:内容较少，不滚动</small>       
      <bt-marquee >内容较少，不滚动</bt-marquee><br>
    </bt-space>

  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less" style="text/less">
</style>
