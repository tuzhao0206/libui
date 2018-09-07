<template>
  <bt-ref-message :show="show" :type="type" :message="message" :close="handleClose" />
</template>
<script>
import Message from './message.vue';
export default {
  components: {
    'bt-ref-message': Message,
  },
  data() {
    return {
      show: false,
      message: '',
      type: 'message',
      duration: 3000,
      close: null,
    };
  },
  computed: {
    handleClose() {
      if (!this.close) {
        return null;
      }
      return () => {
        this.close();
        this.closeMyself();
      };
    },
  },
  mounted() {
    this.timer = setTimeout(this.closeMyself, this.duration);
  },
  destroyed() {
    clearTimeout(this.timer);
    this.$el.parentNode.removeChild(this.$el);
    this.$el.removeEventListener('transitionend', this.$destroy);
  },
  methods: {
    closeMyself() {
      this.show = false;
      this.$el.addEventListener('transitionend', this.$destroy);
    },
  },
};
</script>
