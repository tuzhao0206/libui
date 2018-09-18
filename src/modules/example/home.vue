<template>
  <section>
    <div class="list">
      <router-link v-for='(data,index) in homeObj' :key="index" class="item" :to="$prelang(data.link)">
        <div class="text">{{data.name}}</div>
        <i class="bt-icon">&#xe61a;</i>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      homeObj: [
        {
          link: 'example/button',
          name: '按钮',
        },
        {
          link: 'example/page',
          name: '翻页',
        },
        {
          link: 'example/modal',
          name: '弹窗',
        },
        {
          link: 'example/message',
          name: '提示',
        },
        {
          link: 'example/stepper',
          name: '步进器',
        },
        {
          link: 'example/imgLazyload',
          name: '图片懒加载',
        },
        {
          link: 'example/radio',
          name: '单选框',
        },
        {
          link: 'example/checkbox',
          name: '复选框',
        },
        {
          link: 'example/switch',
          name: 'switch开关',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.list {
  display: block;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 16px;
  > .item {
    display: block;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    overflow: hidden;
    min-height: 50px;
    padding: 15px;
    border-top: 1px solid #f2f2f2;
    &:last-child {
      border-bottom: 1px solid #f2f2f2;
    }
    > .text {
      flex: 1;
    }
    > .bt-icon:first-child {
      margin-right: 5px;
      color: #999;
    }
    > .bt-icon:last-child {
      margin-left: 5px;
      color: #999;
    }
  }
}
</style>
