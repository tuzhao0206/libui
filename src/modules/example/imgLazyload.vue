<template>
  <div class="section">
    <p class="title">图片懒加载</p>
    <table border="1">
      <tr>
        <td>key</td>
        <td>description</td>
      </tr>
      <tr>
        <td>width</td>
        <td>图片长度</td>
      </tr>
      <tr>
        <td>height</td>
        <td>图片高度</td>
      </tr>
      <tr>
        <td>size</td>
        <td>图片后缀带参，如果传0则不做处理</td>
      </tr>
      <tr>
        <td>imgSrc</td>
        <td>图片原始地址</td>
      </tr>
      <tr>
        <td>loadingSrc</td>
        <td>加载图片地址</td>
      </tr>
      <tr>
        <td>errorSrc</td>
        <td>错误图片地址</td>
      </tr>
      <tr>
        <td>index</td>
        <td>图片的index，调试用参数</td>
      </tr>
    </table>
    <br>
    <ul>
      <li>如果图片裂了，可能是由于errorImg链接无法加载导致的</li>
      <li>新增imgsrc data是为了防止出现"vue Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: imgSrc" 错误</li>
      <li>遗留问题：error的话会跳出所有的index，而且图片渲染有错误</li>
    </ul>
    <div class="product" v-for="(product, index) in productObj" :key="index">
      <bt-img-lazyload
        :index="index"
        :width="550"
        :height="550"
        :size="540"
        :imgSrc="product.img"
        loadingSrc="https://shop-static-beta.bitmain.com/common/bt-pic-default.png"
        errorSrc="https://shop-static-beta.bitmain.com/common/bt-pic-default.png">
      </bt-img-lazyload>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      productObj: [
        {
          img: 'https://file.bitmain.com/test.xi/test/2018/08/27/15/4898c810-bd51-4181-a9f3-a5471fad60a7.png',
        },
        {
          img:
            'https://file.bitmain.com/shop-image-storage/product/2018/06/21/22/reupload/7f671719-af64-4e64-a606-a086285b6109.jpg',
        },
        {
          img:
            'https://file2.bitmain.com/shop-image-storage/product/2018/07/31/21/e787d43a-fd82-4488-9027-ee726a6d97a4.png',
        },
        {
          img: 'https://file.bitmain.com/test.xi/test/2018/08/27/15/56f0d85f-9ae2-4f6f-90e0-a5bf9fd8af98.png',
        },
        {
          img: 'https://file.bitmain.com/test.xi/test/2018/06/26/16/6222f8f2-a7cf-4bb9-8807-fc1d096f7d8f.png',
        },
        {
          img: 'https://file.bitmain.com/test.xi/test/2018/08/27/15/56f0d85f-9ae2-1234f6f-90e0-a5bf9fd8af98.png',
        },
        {
          img: 'https://file.bitmain.com/test.xi/test/2018/08/27/15/56f0d85f-9ae2-1234f6f-90e0-a5bf9fd8af98.png',
        },
        {
          img: 'https://file.bitmain.com/test.xi/test/2018/08/27/15/56f0d85f-9ae2-1234f6f-90e0-a5bf9fd8af98.png',
        },
        {
          img: 'https://file.bitmain.com/test.xi/test/2018/08/27/15/56f0d85f-9ae2-1234f6f-90e0-a5bf9fd8af98.png',
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
div.section {
  margin: 25px;
}
p.title {
  padding-top: 40px;
  padding-bottom: 15px;
}
p.title:first-of-type {
  padding-top: 20px;
}
</style>
