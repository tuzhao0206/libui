<template>
  <div id="">

    <bt-space space="25px">
      <h4>单选框</h4>
    </bt-space>
    <section>
      <bt-space space="25px">
        <bt-radio :value="activeValue1" :label="1" @setActive="setActive1">这是1</bt-radio>
        <bt-radio :value="activeValue1" :label="2" @setActive="setActive1">这是2</bt-radio>
        <bt-radio :value="activeValue1" :label="3" @setActive="setActive1">这是3</bt-radio>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <bt-radio :value="activeValue4" :label="1" >这是1</bt-radio>
        <bt-radio :value="activeValue4" :label="2" disabled>这是2</bt-radio>
        <bt-radio :value="activeValue4" :label="3" >这是3</bt-radio>
      </bt-space>
    </section>

    <bt-space space="25px">
      <h4>单选框组</h4>
    </bt-space>

    <section>
      <bt-space space="25px">
        <small>shape="circle"</small>
        <bt-radio-group :value="activeValue2" @setActive="setActive2" shape="circle">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>shape="checkbox"</small>
        <bt-radio-group :value="activeValue2" @setActive="setActive2" shape="checkbox">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section >
      <bt-space space="25px">
        <small>vertical垂直摆列</small>
        <bt-radio-group :value="activeValue3" disabled shape="checkbox" vertical>
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
        <bt-radio-group :value="activeValue5"  @setActive="setActive5" shape="button" size="xs">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>sm 小按钮</small>
        <bt-radio-group :value="activeValue6" @setActive="setActive6" shape="button" size="sm">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" disabled>这是2(disabled+checked)</bt-radio>
          <bt-radio :label="3" disabled>这是3(disabled)</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>md 中等按钮</small>
        <bt-radio-group :value="activeValue7"  @setActive="setActive7" shape="button" size="md">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <small>默认按钮</small>
        <bt-radio-group :value="activeValue8"  @setActive="setActive8" shape="button">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <bt-space space="25px">
      <h4>使用v-model</h4>
    </bt-space>
    <section>
      <bt-space space="25px">
        <bt-radio-group v-model="activeValue9">
          <bt-radio :label="1" >这是1</bt-radio>
          <bt-radio :label="2" >这是2</bt-radio>
          <bt-radio :label="3" >这是3</bt-radio>
        </bt-radio-group>
      </bt-space>
    </section>

    <section>
      <bt-space space="25px">
        <bt-radio-group v-model="activeValue9" shape="button">
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
      this.activeValue1 = vaule;
    },
    setActive2(vaule) {
      console.log('activeValue2', vaule);
      this.activeValue2 = vaule;
    },
    setActive5(vaule) {
      console.log('activeValue5', vaule);
      this.activeValue5 = vaule;
    },
    setActive6(vaule) {
      console.log('activeValue6', vaule);
      this.activeValue6 = vaule;
    },
    setActive7(vaule) {
      console.log('activeValue7', vaule);
      this.activeValue7 = vaule;
    },
    setActive8(vaule) {
      console.log('activeValue7', vaule);
      this.activeValue8 = vaule;
    },
  },
};
</script>

<style scoped lang="less" style="text/less">
</style>
