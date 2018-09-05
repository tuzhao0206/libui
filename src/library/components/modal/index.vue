<template>
  <transition name="bt-widget">
    <bt-masklayer v-if="show" @click="dismiss">
      <div class="bt-modal">
        <slot>
          <h3 class="bt-title" v-if="title" v-html="title" />
          <div class="bt-content" v-html="message" />
          <footer class="bt-footer" v-if="buttons.length > 0">
            <bt-button v-for="(item, idx) in buttons" :key="idx" v-bind="item" @click="item.onClick(item)" v-html="item.text" />
          </footer>
        </slot>
      </div>
    </bt-masklayer>
  </transition>
</template>

<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    title: { type: String },
    message: { type: String },
    dismiss: { type: Function, default: n => n },
    buttons: { type: Array, default: () => [] },
  },
  watch: {
    buttons() {
      console.log(this.buttons);
    },
  },
  methods: {
    // 过滤button的配置项
    refactorButton(params) {
      const values = {};
      Object.keys(params).forEach(key => {
        if (key !== 'onClick' && key !== 'text') {
          values[key] = params[key];
        }
      });
      return values;
    },
  },
};
</script>
