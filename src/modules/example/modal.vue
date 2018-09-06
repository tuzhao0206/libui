<template>
  <section>
    <bt-space space="25px">
      <bt-button class="bt-warning" @click="openModal('modal1')">标准调用</bt-button>
      <bt-button class="bt-driving" @click="openModal('modal2')">没有标题</bt-button>
      <bt-button class="bt-primary" @click="openModal('modal3')">点击空白</bt-button>
      <bt-button class="bt-plain-warning" @click="openModal('modal4')">关闭按钮</bt-button>
      <bt-button class="bt-plain-success" @click="configModal">配置弹窗</bt-button>
    </bt-space>

    <bt-modal :show="type==='modal1'">
      <h3 class="bt-title">提示标题</h3>
      <div class="bt-content">这是一个模态的对话框，点击空白并不会关闭</div>
      <footer class="bt-footer">
        <bt-button class="bt-default" @click="hideModal">取消</bt-button>
        <bt-button class="bt-warning" :loading="loading" @click="mockRequest">删除</bt-button>
      </footer>
    </bt-modal>

    <bt-modal :show="type==='modal2'">
      <div class="bt-content">
        <div class="bt-content">
          <p>没有标题的对话框；</p>
          <p>这是一个模态的对话框，点击空白并不会关闭</p>
        </div>
      </div>
      <footer class="bt-footer">
        <bt-button class="bt-primary" @click="hideModal">确定</bt-button>
      </footer>
    </bt-modal>

    <bt-modal :show="type==='modal3'" :dismiss="hideModal">
      <h3 class="bt-title">提示标题</h3>
      <div class="bt-content">
        <p>没有底部交互按钮的对话框；</p>
        <p>这是一个非模态的对话框，点击空白会自动关闭</p>
      </div>
    </bt-modal>

    <bt-modal :show="type==='modal4'" :close="hideModal" :dismiss="hideModal">
      <h3 class="bt-title">关闭按钮</h3>
      <div class="bt-content">
        <p>不推荐使用关闭按钮，而是使用点击取消按钮或空白来关闭；</p>
        <p class="text-driving">移动端的交互也培养了取消按钮关闭弹窗的习惯；</p>
        <p>因为关闭按钮和取消按钮有点重叠，而点击空白关闭也已经是一个约定俗成的方案</p>
      </div>
      <footer class="bt-footer">
        <bt-button class="bt-default" @click="hideModal">取消</bt-button>
        <bt-button class="bt-warning" :loading="loading" @click="mockRequest">删除</bt-button>
      </footer>
    </bt-modal>

    <bt-modal v-bind="modal" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      type: false,
      modal: {},
      loading: false,
    };
  },
  methods: {
    openModal(type) {
      this.type = type;
    },
    hideModal() {
      this.type = null;
      this.loading = false;
    },
    mockRequest() {
      this.loading = true;
      setTimeout(this.hideModal, 1500);
    },
    configModal() {
      this.modal = {
        show: true,
        title: '配置弹窗',
        message: '弹窗也可以通过配置参数来设置。<br />有时，在程序内部希望通过代码配置调用时会很方便。',
        dismiss: () => {
          this.modal.show = false;
        },
        close: () => {
          this.modal.show = false;
        },
        buttons: [
          {
            text: '取消',
            class: 'bt-default',
            onClick: () => {
              this.modal.show = false;
            },
          },
          {
            text: '删除',
            icon: '&#xe629;',
            class: 'bt-warning',
            loading: false,
            onClick: button => {
              button.loading = true;
              // 如果初始设置不包含loading,这里就需要通过$set赋值 不然双向绑定不会生效
              // this.$set(button, 'loading', true);
              setTimeout(() => {
                this.modal.show = false;
              }, 1500);
            },
          },
        ],
      };
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
