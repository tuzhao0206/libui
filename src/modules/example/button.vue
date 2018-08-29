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
        <bt-button class="bt-default">默认按钮</bt-button>
        <bt-button class="bt-primary">主要按钮</bt-button>
        <bt-button class="bt-success">成功按钮</bt-button>
        <bt-button class="bt-warning">危险按钮</bt-button>
        <bt-button class="bt-driving">警告按钮</bt-button>
        <bt-button class="bt-guiding">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-default" disabled>默认按钮</bt-button>
        <bt-button class="bt-primary" disabled>主要按钮</bt-button>
        <bt-button class="bt-success" disabled>成功按钮</bt-button>
        <bt-button class="bt-warning" disabled>危险按钮</bt-button>
        <bt-button class="bt-driving" disabled>警告按钮</bt-button>
        <bt-button class="bt-guiding" disabled>引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-plain-default">框体按钮</bt-button>
        <bt-button class="bt-plain-primary">主要按钮</bt-button>
        <bt-button class="bt-plain-success">成功按钮</bt-button>
        <bt-button class="bt-plain-warning">危险按钮</bt-button>
        <bt-button class="bt-plain-driving">警告按钮</bt-button>
        <bt-button class="bt-plain-guiding">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-plain-default" disabled>框体按钮</bt-button>
        <bt-button class="bt-plain-primary" disabled>主要按钮</bt-button>
        <bt-button class="bt-plain-success" disabled>成功按钮</bt-button>
        <bt-button class="bt-plain-warning" disabled>危险按钮</bt-button>
        <bt-button class="bt-plain-driving" disabled>警告按钮</bt-button>
        <bt-button class="bt-plain-guiding" disabled>引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-default bt-round">默认按钮</bt-button>
        <bt-button class="bt-primary bt-round">主要按钮</bt-button>
        <bt-button class="bt-success bt-round">成功按钮</bt-button>
        <bt-button class="bt-warning bt-round">危险按钮</bt-button>
        <bt-button class="bt-driving bt-round">警告按钮</bt-button>
        <bt-button class="bt-guiding bt-round">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-plain-default bt-round">框体按钮</bt-button>
        <bt-button class="bt-plain-primary bt-round">主要按钮</bt-button>
        <bt-button class="bt-plain-success bt-round">成功按钮</bt-button>
        <bt-button class="bt-plain-warning bt-round">危险按钮</bt-button>
        <bt-button class="bt-plain-driving bt-round">警告按钮</bt-button>
        <bt-button class="bt-plain-guiding bt-round">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px 18px">
        <bt-button class="bt-default" :loading="true">提交中</bt-button>
        <bt-button class="bt-primary" :loading="true">提交中</bt-button>
        <bt-button class="bt-success" :loading="true">处理中</bt-button>
        <bt-button class="bt-warning" :loading="true">请稍后</bt-button>
        <bt-button class="bt-driving" :loading="true">请等待</bt-button>
        <bt-button class="bt-guiding" :loading="true">请等待</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-default bt-circle" icon="&#xe60a;" />
        <bt-button class="bt-primary bt-circle" icon="&#xe60d;" />
        <bt-button class="bt-success bt-circle" icon="&#xe627;" />
        <bt-button class="bt-warning bt-circle" icon="&#xe629;" />
        <bt-button class="bt-driving bt-circle" icon="&#xe61f;" />
        <bt-button class="bt-guiding bt-circle" icon="&#xe620;" />
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-default" icon="&#xe60a;" />
        <bt-button class="bt-primary" icon="&#xe60d;" />
        <bt-button class="bt-success" icon="&#xe627;" />
        <bt-button class="bt-warning" icon="&#xe629;" />
        <bt-button class="bt-driving" icon="&#xe61f;" />
        <bt-button class="bt-guiding" icon="&#xe620;" />
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-default" icon="&#xe60a;">框体按钮</bt-button>
        <bt-button class="bt-primary" icon="&#xe60d;">主要按钮</bt-button>
        <bt-button class="bt-success" icon="&#xe627;">成功按钮</bt-button>
        <bt-button class="bt-warning" icon="&#xe629;">危险按钮</bt-button>
        <bt-button class="bt-driving" icon="&#xe61f;">警告按钮</bt-button>
        <bt-button class="bt-guiding" icon="&#xe620;">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-default" icon="&#xe60a;" align="right">框体按钮</bt-button>
        <bt-button class="bt-primary" icon="&#xe60d;" align="right">主要按钮</bt-button>
        <bt-button class="bt-success" icon="&#xe627;" align="right">成功按钮</bt-button>
        <bt-button class="bt-warning" icon="&#xe629;" align="right">危险按钮</bt-button>
        <bt-button class="bt-driving" icon="&#xe61f;" align="right">警告按钮</bt-button>
        <bt-button class="bt-guiding" icon="&#xe620;" align="right">引导按钮</bt-button>
      </bt-space>

      <bt-space space="25px">
        <bt-button-group>
          <bt-button class="bt-primary" icon="&#xe60d;" />
          <bt-button class="bt-success" icon="&#xe627;" />
          <bt-button class="bt-warning" icon="&#xe629;" />
          <bt-button class="bt-driving" icon="&#xe61f;" />
          <bt-button class="bt-guiding" icon="&#xe620;" />
        </bt-button-group>
      </bt-space>

      <bt-space space="25px">
        <bt-button-group>
          <bt-button class="bt-primary" icon="&#xe60e;">上一页</bt-button>
          <bt-button class="bt-primary" icon="&#xe61a;" align="right">下一页</bt-button>
        </bt-button-group>
      </bt-space>

      <bt-space space="25px">
        <bt-button-group class="compact">
          <bt-button class="bt-primary">按钮组合</bt-button>
          <bt-button class="bt-success">按钮组合</bt-button>
          <bt-button class="bt-warning">按钮组合</bt-button>
        </bt-button-group>
      </bt-space>

      <bt-space space="25px">
        <bt-button-group class="compact">
          <bt-button class="bt-plain-primary">按钮组合</bt-button>
          <bt-button class="bt-plain-success">按钮组合</bt-button>
          <bt-button class="bt-plain-warning">按钮组合</bt-button>
        </bt-button-group>
      </bt-space>

      <bt-space space="25px">
        <bt-button class="bt-literal">文本按钮</bt-button>
        <bt-button class="bt-literal">文本按钮</bt-button>
        <bt-button class="bt-literal">文本按钮</bt-button>
      </bt-space>

    </ex-content>
  </ex-view>
</template>
<script>
export default {
  methods: {
    handleClick(e) {},
  },
};
</script>
<style lang="less" scoped>
.bt-button {
  margin: 5px;
}
@media (max-width: 600px) {
  .bt-space {
    text-align: center;
  }
}
</style>
