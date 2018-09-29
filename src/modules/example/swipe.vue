<template>
  <section>
    <bt-swipe style="padding-top:37.5%" :list="listA" />

    <div class="bt-divider">分割线</div>
    
    <bt-swipe style="padding-top:30%" :list="listB" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      listA: [
        '//i1.mifile.cn/a4/xmad_15375484702231_Zobxf.jpg',
        '//i1.mifile.cn/a4/xmad_15379642985922_MjXIl.jpg',
        '//i1.mifile.cn/a4/xmad_15381034335167_kyPQs.jpg',
        '//i1.mifile.cn/a4/xmad_15381012113444_GNrio.jpg',
      ],

      listB: [
        {
          src: '//img1.qdingnet.com/d1eddbc02a7f79d6bd7c10373ca514c1.jpg',
          onClick: () => (location.href = 'https://www.baidu.com'),
        },
        {
          src: '//img1.qdingnet.com/9ed0a211a26ee3bc5c11320ef672a132.jpg',
          onClick: () => (location.href = 'https://www.baidu.com'),
        },
        {
          src: '//img1.qdingnet.com/f9189c6eb1d500bf8201325c0952f12a.jpg',
          onClick: () => (location.href = 'https://www.baidu.com'),
        },
        {
          src: '//img1.qdingnet.com/8f4bc4e27f7fdf5676db7498a087b809.jpg',
          onClick: () => (location.href = 'https://www.baidu.com'),
        },
        {
          src: '//img1.qdingnet.com/4dc07abb5bb1eed9243a161d807a0df9.jpg',
          onClick: () => (location.href = 'https://www.baidu.com'),
        },
      ],
    };
  },
};
</script>
