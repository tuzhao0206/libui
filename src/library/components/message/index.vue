<template>
  <transition name="bt-widget">
    <div class="bt-message" v-if="show">
      <i class="bt-icon" :class="type" v-if="icon" v-html="icon" />
      <div class="text" v-html="message"></div>
      <i class="bt-icon close" v-if="close" @click="close">&#xe61f;</i>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    show: { type: Boolean, default: false },
    type: { type: String, default: 'message' },
    message: { type: String },
    close: { type: Function },
  },
  computed: {
    icon() {
      const ICONS = {
        success: '&#xe620;',
        failure: '&#xe61f;',
        warning: '&#xe610;',
        message: '&#xe615;',
      };
      return ICONS[this.type] || null;
    },
  },
};
</script>
