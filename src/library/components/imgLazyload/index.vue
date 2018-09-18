<template>
  <div
    :style="{'width': `${width}px`, 'height': `${height}px`}"
    class="imgContainer"
    ref="imgContainer">
    <img
      :style="{'maxWidth': `${width}px`, 'maxHeight': `${height}px`}"
      :src="loadingSrc">
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
    loadingSrc: {
      type: String,
      default: '',
    },
    errorSrc: {
      type: String,
      default: '',
    },
  },
  data: function() {
    return {
      imgError: false,
    };
  },
  mounted() {
    let scrollHeightEnd = window.scrollY + window.innerHeight;

    if (this.$refs.imgContainer.offsetTop < scrollHeightEnd) {
      this.$refs.imgContainer.querySelector('img').src = this.imgSrc;
    }

    if (this.$refs.imgContainer.querySelector('img').src !== this.imgSrc) {
      window.addEventListener('scroll', this.handleScroll);
    }

    let that = this;
    document.addEventListener(
      'error',
      function(e) {
        if (!that.imgError) {
          if (e.target.nodeName == 'IMG') {
            e.target.src = that.errorSrc;
            that.imgError = true;
          }
        }
      },
      true
    );
  },
  methods: {
    handleScroll() {
      let scrollHeightEnd = window.scrollY + window.innerHeight;
      if (this.$refs.imgContainer.offsetTop <= scrollHeightEnd) {
        // 调试用
        console.log('load:', this.index);
        this.$refs.imgContainer.querySelector('img').src = this.imgSrc;
        // 赋值完成后，取消事件绑定
        // 去除裂图带来的诡异问题
        window.removeEventListener('scroll', this.handleScroll);
      }
    },
  },
};
</script>
<style lang="less" scoped>
div.imgContainer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
