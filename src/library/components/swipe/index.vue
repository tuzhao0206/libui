<template>
  <div class="swipe">
    <div class="roller" ref="roller" :style="style">
      <div class="slider" v-for="(item, idx) in list" :key="idx" :style="getOffset(idx)" @click="onClick(idx)">
        <div class="frame"><img :src="source(item)" /></div>
      </div>
    </div>
    <ul class="decorators" v-if="decorators">
      <li class="item" v-for="(item, idx) in list" :key="idx" :class="{active: idx == index}" @click="slide.go(idx)" />
    </ul>
    <div class="controls" v-if="!touch">
      <a class="prev" @click="slide.prev()"><i class="bt-icon">&#xe60e;</i></a>
      <a class="next" @click="slide.next()"><i class="bt-icon">&#xe61a;</i></a>
    </div>
  </div>
</template>
<script>
import Env from '../../utils/env';
import Emitter from '../../utils/emitter';
class Slide extends Emitter {
  constructor(params) {
    super();
    this.index = 0;
    this.TIMER = 4000;
    this.roller = params.roller;
    this.autoplay = params.autoplay;
    this.width = this.roller.offsetWidth;
    this.frames = params.roller.children;
    if (this.autoplay) {
      this.timer = setInterval(this.timerTask, this.TIMER);
      this.roller.addEventListener(
        'mouseenter',
        () => {
          clearTimeout(this.timer);
        },
        Env.passive(false)
      );
      this.roller.addEventListener(
        'mouseleave',
        () => {
          this.timer = setInterval(this.timerTask, this.TIMER);
        },
        Env.passive(false)
      );
    }

    // 添加移动端事件

    if (Env.supportTouch) {
      this.roller.addEventListener('touchstart', this.touchstart, Env.passive(false));
      this.roller.addEventListener('touchmove', this.touchmove, Env.passive(false));
      this.roller.addEventListener('touchend', this.touchend, Env.passive(false));
    }
  }

  // 释放绑定
  release() {
    clearInterval(this.timer);
    if (Env.supportTouch) {
      this.roller.removeEventListener('touchstart', this.touchstart, Env.passive(false));
      this.roller.removeEventListener('touchmove', this.touchmove, Env.passive(false));
      this.roller.removeEventListener('touchend', this.touchend, Env.passive(false));
    }
  }

  // 抛出事件
  animate(offset, transition = '300ms') {
    const transform = `translate3d(${offset}%, 0px, 0px)`;
    this.emit('next', { index: this.index, transform, transition });
  }

  // 自动播放
  timerTask = () => {
    this.index += 1;
    if (this.index >= this.frames.length) {
      this.index = 0;
    }
    this.animate(-this.index * 100);
  };

  // 拖拽开始
  touchstart = e => {
    // 暂停轮播
    clearInterval(this.timer);
    this.x1 = e.touches[0].pageX;
    this.x2 = e.touches[0].pageX;
  };

  // 拖拽过程
  touchmove = e => {
    e.preventDefault();
    this.x2 = e.touches[0].pageX;
    this.animate(((this.x2 - this.x1) / this.width) * 100 - this.index * 100, 0);
  };

  // 拖拽结束
  touchend = e => {
    let direction = this.x1 - this.x2 > 0 ? 1 : -1;
    let threshold = Math.abs(this.x1 - this.x2) > this.width / 5;

    if (threshold) {
      this.index = this.index + direction;
      if (this.index < 0) {
        this.index = 0;
      } else if (this.index >= this.frames.length) {
        this.index = this.frames.length - 1;
      }
    }
    this.animate(-this.index * 100);
    // 重启轮播
    if (this.autoplay) {
      this.timer = setInterval(this.timerTask, this.TIMER);
    }
  };

  // 定位跳转
  go(index) {
    this.index = index;
    this.animate(-this.index * 100);

    // 重新计时
    clearTimeout(this.timer);
    if (this.autoplay) {
      this.timer = setInterval(this.timerTask, this.TIMER);
    }
  }

  prev() {
    const index = this.index - 1;
    this.go(index >= 0 ? index : this.frames.length - 1);
  }

  next() {
    const index = this.index + 1;
    this.go(index >= this.frames.length ? 0 : index);
  }
}

export default {
  props: {
    list: { type: Array, default: () => [] },
    autoplay: { type: Boolean, default: true },
    decorators: { type: Boolean, default: true },
  },
  data() {
    return {
      index: 0,
      touch: Env.supportTouch,
      style: { transform: 'translate3d(0%, 0px, 0px)', transition: '0ms' },
    };
  },
  mounted() {
    if (this.list.length > 1) {
      this.start();
    }
  },
  destoryed() {
    if (this.slide) {
      this.slide.release();
    }
  },
  methods: {
    start() {
      this.slide = new Slide({
        autoplay: this.autoplay,
        roller: this.$refs.roller,
      }).on('next', e => {
        this.index = e.index;
        this.style = { transform: e.transform, transition: e.transition };
      });
    },
    source(item) {
      return typeof item === 'string' ? item : item.src;
    },
    getOffset(index) {
      return { transform: `translate3d(${index * 100}%, 0px, 0px)` };
    },
    onClick(index) {
      const item = this.list[index];
      if (item.onClick) {
        item.onClick(item, index);
      }
    },
  },
};
</script>
