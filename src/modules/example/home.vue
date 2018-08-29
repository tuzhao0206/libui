<template>
  <section>
    <div class="list">
      <router-link class="item" :to="$prelang('example/button')">
        <div class="text">按钮</div>
        <i class="bt-icon">&#xe61a;</i>
      </router-link>
      <router-link class="item" :to="$prelang('example/page')">
        <div class="text">翻页</div>
        <i class="bt-icon">&#xe61a;</i>
      </router-link>
    </div>
  </section>
</template>
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
