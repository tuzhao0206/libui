<template>
  <section>
    <bt-space space="25px">
      <bt-button class="bt-primary" @click="openMessage('message1')">一般提醒</bt-button>
      <bt-button class="bt-success" @click="openMessage('message2')">成功提示</bt-button>
      <bt-button class="bt-warning" @click="openMessage('message3')">失败提示</bt-button>
      <bt-button class="bt-driving" @click="openMessage('message4')">警告提示</bt-button>
    </bt-space>

    <bt-space space="25px">
      <bt-button class="bt-primary" @click="$message('一般提醒')">一般提醒</bt-button>
      <bt-button class="bt-success" @click="$message({message:'成功提示', type: 'success'})">成功提示</bt-button>
      <bt-button class="bt-warning" @click="$message({message:'失败提示', type: 'failure'})">失败提示</bt-button>
      <bt-button class="bt-driving" @click="$message({message:'警告提示', type: 'warning', close: clickClose})">警告提示</bt-button>
    </bt-space>

    <bt-message :show="type==='message1'" message="一般提醒" :close="this.closeMessage" />
    <bt-message :show="type==='message2'" type="success" message="成功提示" :close="this.closeMessage" />
    <bt-message :show="type==='message3'" type="failure" message="失败提示" :close="this.closeMessage" />
    <bt-message :show="type==='message4'" type="warning" message="警告提示" :close="this.closeMessage" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      type: null,
    };
  },
  methods: {
    openMessage(type) {
      this.type = type;
    },
    closeMessage() {
      this.type = null;
      console.log('CLICK CLOSE');
    },
    clickClose() {
      console.log('CLICK CLOSE');
    },
  },
};
</script>
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
