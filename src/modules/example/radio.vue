<template>
  <div>

    <bt-space space="25px">
      <h4>单选框</h4>
    </bt-space>
    <section>
      <bt-space space="25px">
        <small>:beforeChange返回false，阻断change事件, 必须return true 才可继续触发change</small><br>
        <bt-radio v-model="activeValue1" :label="1" :beforeChange="setActive1">这是1</bt-radio>
        <bt-radio v-model="activeValue1" :label="2" :beforeChange="setActive1">这是2</bt-radio>
        <bt-radio v-model="activeValue1" :label="3" :beforeChange="setActive1">这是3</bt-radio>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>disabled</small><br>
        <bt-radio v-model="activeValue1" :label="1" disabled>这是1</bt-radio>
        <bt-radio v-model="activeValue1" :label="2" disabled>这是2</bt-radio>
        <bt-radio v-model="activeValue1" :label="3" disabled>这是3</bt-radio>
      </bt-space>
    </section>

    <bt-space space="25px">
      <h4>单选框组</h4>
    </bt-space>

    <section>
      <bt-space space="25px">
        <small>shape="circle", :beforeChange返回true</small>
        <bt-radio-group v-model="activeValue2" :beforeChange="setActive2" shape="circle">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>shape="checkbox"，@change事件</small>
        <bt-radio-group v-model="activeValue2" @change="setActive2" shape="checkbox">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section >
      <bt-space space="25px">
        <small>vertical垂直摆列</small>
        <bt-radio-group v-model="activeValue3" disabled shape="checkbox" vertical>
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <bt-space space="25px">
      <h4>按钮样式组</h4>
    </bt-space>
    <section>
      <bt-space space="25px">
        <small>xs 特小按钮</small>
        <bt-radio-group v-model="activeValue5" shape="button" size="xs">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>sm 小按钮</small>
        <bt-radio-group v-model="activeValue6"  shape="button" size="sm">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" disabled>这是2(disabled+checked)</bt-radio>
          <bt-radio :label="3" disabled>这是3(disabled)</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>md 中等按钮</small>
        <bt-radio-group v-model="activeValue7"   shape="button" size="md">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>默认按钮</small>
        <bt-radio-group v-model="activeValue8"  shape="button" >
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
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
      activeValue1: 1,
      activeValue2: 2,
      activeValue3: 2,
      activeValue4: 2,
      activeValue5: 2,
      activeValue6: 2,
      activeValue7: 2,
      activeValue8: 2,
      activeValue9: 1,
    };
  },

  computed: {},

  mounted() {},

  methods: {
    setActive1(vaule) {
      console.log('activeValue1', vaule);
      return false;
    },
    setActive2(vaule) {
      console.log('activeValue2', vaule);
      return true;
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
