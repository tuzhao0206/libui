<template>
  <div id="">

    <section>
      <bt-space space="25px">
        <bt-checkbox v-model="value1">tongyi</bt-checkbox>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <bt-checkbox-group v-model="value2" shape="button">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <bt-checkbox-group v-model="value2" shape="checkbox">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
      </bt-space>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      value1: true,
      value2: [1, 2],
    };
  },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style scoped lang="less" style="text/less">
</style>
