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
    size: {
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
      imgsrc: this.imgSrc,
    };
  },
  mounted() {
    this.handleSize();

    let scrollHeightEnd = window.scrollY + window.innerHeight;

    if (this.$refs.imgContainer.offsetTop < scrollHeightEnd) {
      this.$refs.imgContainer.querySelector('img').src = this.imgsrc;
    }

    if (this.$refs.imgContainer.querySelector('img').src !== this.imgsrc) {
      window.addEventListener('scroll', this.handleScroll);
    }

    // 错误处理
    let that = this;
    window.addEventListener(
      'error',
      function(e) {
        if (!that.imgError) {
          if (e.target.nodeName == 'IMG') {
            e.target.src = that.errorSrc;
            // 如果加参数true的话，会跳出所有的index
            console.log('errorSrc:', that.index);
            that.imgError = true;
          }
        }
      },
      true
    );
  },
  methods: {
    handleSize() {
      if (this.size > 0) {
        let src = this.imgsrc;
        let mySizes = this.size;
        let n = src.lastIndexOf('/');
        let start = src.substr(0, n);
        let format = 'jpg';
        if (
          src.substr(n).split('.')[1] &&
          new RegExp(/^png|jpeg$/).test(
            src
              .substr(n)
              .split('.')[1]
              .toLowerCase()
          )
        ) {
          format = src.substr(n).split('.')[1];
        }
        let end = `${src.substr(n).split('.')[0]}_${mySizes}.${format}`;
        src = start + end;

        this.imgsrc = src;
      }
    },
    handleScroll() {
      let scrollHeightEnd = window.scrollY + window.innerHeight;
      if (this.$refs.imgContainer.offsetTop <= scrollHeightEnd) {
        this.$refs.imgContainer.querySelector('img').src = this.imgsrc;
        // 赋值完成后，取消事件绑定
        // 去除裂图带来的诡异问题
        window.removeEventListener('scroll', this.handleScroll);
        // 调试用
        console.log('load:', this.index);
        console.log('src:', this.$refs.imgContainer.querySelector('img').src);
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
