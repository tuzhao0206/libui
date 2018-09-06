<template>
  <transition name="bt-widget">
    <div class="bt-message" v-if="show" v-html="fragment()"></div>
  </transition>
</template>
<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    message: { type: String },
    type: { type: String, default: 'message' },
  },
  methods: {
    fragment() {
      let icon = '';
      if (this.type === 'success') {
        icon = '<i class="bt-icon success">&#xe620;</i>';
      } else if (this.type === 'failure') {
        icon = '<i class="bt-icon failure">&#xe61f;</i>';
      } else if (this.type === 'warning') {
        icon = '<i class="bt-icon warning">&#xe610;</i>';
      } else if (this.type === 'message') {
        icon = '<i class="bt-icon message">&#xe615;</i>';
      }
      return icon + `<div class="text">${this.message}</div>`;
    },
  },
};
</script>
