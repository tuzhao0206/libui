<template>
  <div id="">

    <section>
      <bt-space space="25px">
        <small>一个复选框，switch开关</small><br>
        <bt-checkbox v-model="value1">tongyi</bt-checkbox><br>
        <bt-checkbox v-model="value1" shape="rectangle">tongyi</bt-checkbox>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>disabled</small><br>
        <bt-checkbox v-model="value1" disabled>tongyi</bt-checkbox>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>:beforeChange(obj),参数为一个对象，obj={label: 0, toBe: false}</small>
        <bt-checkbox-group v-model="value2" shape="circle" :beforeChange="beforeChange" size="xs">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
        <bt-checkbox-group v-model="value2" :beforeChange="beforeChange" size="xs">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
        <bt-checkbox-group v-model="value2" shape="rectangle" :beforeChange="beforeChange" size="xs">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
        <bt-checkbox-group v-model="value2" shape="button" :beforeChange="beforeChange" size="xs">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>@change 配合 v-model使用</small>
        <bt-checkbox-group v-model="value3" :max="2" shape="checkbox" @change="change">
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
      value3: [1, 2],
    };
  },

  computed: {},

  mounted() {},

  methods: {
    beforeChange({ label, toBe }) {
      console.log(label, toBe);
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
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
