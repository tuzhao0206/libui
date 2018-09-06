<template>
  <section>
    <bt-space space="25px">
      <bt-button class="bt-warning" @click="openModal('modal1')">标准调用</bt-button>
      <bt-button class="bt-driving" @click="openModal('modal2')">没有标题</bt-button>
      <bt-button class="bt-primary" @click="openModal('modal3')">点击空白</bt-button>
      <bt-button class="bt-success" @click="configModal">配置弹窗</bt-button>
    </bt-space>

    <bt-modal :show="type==='modal1'">
      <h3 class="bt-title">提示标题</h3>
      <div class="bt-content">这是一段信息</div>
      <footer class="bt-footer">
        <bt-button class="bt-default" @click="hideModal">取消</bt-button>
        <bt-button class="bt-warning" :loading="loading" @click="mockRequest">删除</bt-button>
      </footer>
    </bt-modal>

    <bt-modal :show="type==='modal2'">
      <div class="bt-content">
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
      </div>
      <footer class="bt-footer">
        <bt-button class="bt-primary" @click="hideModal">确定</bt-button>
      </footer>
    </bt-modal>

    <bt-modal :show="type==='modal3'" :dismiss="hideModal">
      <h3 class="bt-title">提示标题</h3>
      <div class="bt-content">
        <p>这是一段信息</p>
        <p>这是一段信息</p>
        <p>这是一段信息</p>
      </div>
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
