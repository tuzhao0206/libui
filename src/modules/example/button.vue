<template>
  <ex-view>
    <ex-header title="按钮示范">
      <ex-menu class="text-gray" @click="$router.back()">
        <i class="bt-icon">&#xe60e;</i>
      </ex-menu>
      <ex-title />
    </ex-header>
    <ex-content>
      <bt-space space="25px">
        <bt-button class="default">默认按钮</bt-button>
        <bt-button class="primary">主要按钮</bt-button>
        <bt-button class="success">成功按钮</bt-button>
        <bt-button class="warning">危险按钮</bt-button>
        <bt-button class="driving">警告按钮</bt-button>
        <bt-button class="guiding">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="default" icon="&#xe60a;">框体按钮</bt-button>
        <bt-button class="primary" icon="&#xe60d;">主要按钮</bt-button>
        <bt-button class="success" icon="&#xe627;">成功按钮</bt-button>
        <bt-button class="warning" icon="&#xe629;">危险按钮</bt-button>
        <bt-button class="driving" icon="&#xe61f;">警告按钮</bt-button>
        <bt-button class="guiding" icon="&#xe620;">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="default" icon="&#xe60a;" align="right" @click="handleClick">框体按钮</bt-button>
        <bt-button class="primary" icon="&#xe60d;" align="right">主要按钮</bt-button>
        <bt-button class="success" icon="&#xe627;" align="right">成功按钮</bt-button>
        <bt-button class="warning" icon="&#xe629;" align="right">危险按钮</bt-button>
        <bt-button class="driving" icon="&#xe61f;" align="right">警告按钮</bt-button>
        <bt-button class="guiding" icon="&#xe620;" align="right">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="default" disabled>默认按钮</bt-button>
        <bt-button class="primary" disabled>主要按钮</bt-button>
        <bt-button class="success" disabled>成功按钮</bt-button>
        <bt-button class="warning" disabled>危险按钮</bt-button>
        <bt-button class="driving" disabled>警告按钮</bt-button>
        <bt-button class="guiding" disabled>引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="plain-default">框体按钮</bt-button>
        <bt-button class="plain-primary">主要按钮</bt-button>
        <bt-button class="plain-success">成功按钮</bt-button>
        <bt-button class="plain-warning">危险按钮</bt-button>
        <bt-button class="plain-driving">警告按钮</bt-button>
        <bt-button class="plain-guiding">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="plain-default" disabled>框体按钮</bt-button>
        <bt-button class="plain-primary" disabled>主要按钮</bt-button>
        <bt-button class="plain-success" disabled>成功按钮</bt-button>
        <bt-button class="plain-warning" disabled>危险按钮</bt-button>
        <bt-button class="plain-driving" disabled>警告按钮</bt-button>
        <bt-button class="plain-guiding" disabled>引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="default round">默认按钮</bt-button>
        <bt-button class="primary round">主要按钮</bt-button>
        <bt-button class="success round">成功按钮</bt-button>
        <bt-button class="warning round">危险按钮</bt-button>
        <bt-button class="driving round">警告按钮</bt-button>
        <bt-button class="guiding round">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="plain-default round">框体按钮</bt-button>
        <bt-button class="plain-primary round">主要按钮</bt-button>
        <bt-button class="plain-success round">成功按钮</bt-button>
        <bt-button class="plain-warning round">危险按钮</bt-button>
        <bt-button class="plain-driving round">警告按钮</bt-button>
        <bt-button class="plain-guiding round">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="default" icon="&#xe60a;"></bt-button>
        <bt-button class="primary" icon="&#xe60d;"></bt-button>
        <bt-button class="success" icon="&#xe627;"></bt-button>
        <bt-button class="warning" icon="&#xe629;"></bt-button>
        <bt-button class="driving" icon="&#xe61f;"></bt-button>
        <bt-button class="guiding" icon="&#xe620;"></bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="default circle" icon="&#xe60a;"></bt-button>
        <bt-button class="primary circle" icon="&#xe60d;"></bt-button>
        <bt-button class="success circle" icon="&#xe627;"></bt-button>
        <bt-button class="warning circle" icon="&#xe629;"></bt-button>
        <bt-button class="driving circle" icon="&#xe61f;"></bt-button>
        <bt-button class="guiding circle" icon="&#xe620;"></bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="primary" :loading="true">提交中</bt-button>
        <bt-button class="success" :loading="true">处理中</bt-button>
        <bt-button class="warning" :loading="true">请稍后</bt-button>
        <bt-button class="driving" :loading="true">请等待</bt-button>
      </bt-space>

    </ex-content>
  </ex-view>
</template>
<script>
export default {
  methods: {
    handleClick(e) {
      console.log(e.srcElement);
      console.log(e.target.innerText);
    },
  },
};
</script>
<style lang="less" scoped>
.bt-button {
  margin: 5px;
}
</style>
