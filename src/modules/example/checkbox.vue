<template>
  <div id="">

    <section>
      <bt-space space="25px">
        <small>一个复选框，switch开关</small><br>
        <bt-checkbox v-model="value1">tongyi</bt-checkbox>
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
        <small>@beforeChange 配合 :value使用</small>
        <bt-checkbox-group :value="value2" shape="circle" @beforeChange="doBeforeChange" size="xs">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
        <bt-checkbox-group :value="value2" @beforeChange="doBeforeChange" size="xs">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
        <bt-checkbox-group :value="value2" shape="rectangle" @beforeChange="doBeforeChange" size="xs">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
        <bt-checkbox-group :value="value2" shape="button" @beforeChange="doBeforeChange" size="xs">
          <bt-checkbox :label="0">苹果</bt-checkbox>
          <bt-checkbox :label="1">橘子</bt-checkbox>
          <bt-checkbox :label="2">香蕉</bt-checkbox>
        </bt-checkbox-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>@change 配合 v-model使用</small>
        <bt-checkbox-group v-model="value3" :max="2" shape="checkbox" @change="doChange">
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
    doBeforeChange({ label, toBe }) {
      console.log(label, toBe);
      let res = confirm('确认修改？');
      if (res) {
        if (toBe) {
          this.value2.push(label);
        } else {
          const index = this.value2.indexOf(label);
          if (index !== -1) {
            this.value2.splice(index, 1);
          }
        }
      }
    },
    doChange(val) {
      console.log(val);
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
