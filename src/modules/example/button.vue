<template>
  <section>
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
      <bt-button class="bt-default" round>默认按钮</bt-button>
      <bt-button class="bt-primary" round>主要按钮</bt-button>
      <bt-button class="bt-success" round>成功按钮</bt-button>
      <bt-button class="bt-warning" round>危险按钮</bt-button>
      <bt-button class="bt-driving" round>警告按钮</bt-button>
      <bt-button class="bt-guiding" round>引导按钮</bt-button>
    </bt-space>

    <bt-space space="25px">
      <bt-button class="bt-plain-default" round>框体按钮</bt-button>
      <bt-button class="bt-plain-primary" round>主要按钮</bt-button>
      <bt-button class="bt-plain-success" round>成功按钮</bt-button>
      <bt-button class="bt-plain-warning" round>危险按钮</bt-button>
      <bt-button class="bt-plain-driving" round>警告按钮</bt-button>
      <bt-button class="bt-plain-guiding" round>引导按钮</bt-button>
    </bt-space>

    <bt-space space="25px 18px">
      <bt-button class="bt-default" loading>提交中</bt-button>
      <bt-button class="bt-primary" loading>提交中</bt-button>
      <bt-button class="bt-success" loading>处理中</bt-button>
      <bt-button class="bt-warning" loading>请稍后</bt-button>
      <bt-button class="bt-driving" loading>请等待</bt-button>
      <bt-button class="bt-guiding" loading>请等待</bt-button>
    </bt-space>

    <bt-space space="25px">
      <bt-button class="bt-default" circle icon="&#xe60a;" />
      <bt-button class="bt-primary" circle icon="&#xe60d;" />
      <bt-button class="bt-success" circle icon="&#xe627;" />
      <bt-button class="bt-warning" circle icon="&#xe629;" />
      <bt-button class="bt-driving" circle icon="&#xe61f;" />
      <bt-button class="bt-guiding" circle icon="&#xe620;" />
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
      <bt-button class="bt-default" icon="&#xe60a;" place="right">框体按钮</bt-button>
      <bt-button class="bt-primary" icon="&#xe60d;" place="right">主要按钮</bt-button>
      <bt-button class="bt-success" icon="&#xe627;" place="right">成功按钮</bt-button>
      <bt-button class="bt-warning" icon="&#xe629;" place="right">危险按钮</bt-button>
      <bt-button class="bt-driving" icon="&#xe61f;" place="right">警告按钮</bt-button>
      <bt-button class="bt-guiding" icon="&#xe620;" place="right">引导按钮</bt-button>
    </bt-space>

    <bt-space space="25px">
      <bt-button-group>
        <bt-button class="bt-primary" icon="&#xe60e;">上一页</bt-button>
        <bt-button class="bt-primary" icon="&#xe61a;" place="right">下一页</bt-button>
      </bt-button-group>
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
      <bt-button-group class="bt-compact">
        <bt-button class="bt-primary">按钮组合</bt-button>
        <bt-button class="bt-success">按钮组合</bt-button>
        <bt-button class="bt-warning">按钮组合</bt-button>
      </bt-button-group>
    </bt-space>

    <bt-space space="25px">
      <bt-button-group class="bt-compact">
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

    <bt-space space="25px">
      <bt-button class="bt-plain-primary" size="xs">特小按钮</bt-button>
      <bt-button class="bt-plain-success" size="xs">特小按钮</bt-button>
      <bt-button class="bt-plain-warning" size="xs">特小按钮</bt-button>
    </bt-space>

    <bt-space space="25px">
      <bt-button class="bt-plain-primary" size="sm">小型按钮</bt-button>
      <bt-button class="bt-plain-success" size="sm">小型按钮</bt-button>
      <bt-button class="bt-plain-warning" size="sm">小型按钮</bt-button>
    </bt-space>

    <bt-space space="25px">
      <bt-button class="bt-primary" size="md">中等按钮</bt-button>
      <bt-button class="bt-success" size="md">中等按钮</bt-button>
      <bt-button class="bt-warning" size="md">中等按钮</bt-button>
    </bt-space>
  </section>
</template>
<style lang="less" scoped>
.bt-space {
  .bt-button {
    margin: 5px;
  }
}
// 手机预览居中
@media (max-width: 600px) {
  .bt-space {
    text-align: center;
  }
}
</style>
