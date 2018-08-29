<template>
  <header class="bar top-fixed">
    <slot></slot>
  </header>
</template>
<script>
export default {
  props: {
    title: { type: String },
  },
  watch: {
    title: function(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$store.dispatch({
          type: 'setTitle',
          title: this.title,
        });
      }
    },
  },
  created() {
    this.$store.dispatch({
      type: 'setTitle',
      title: this.title,
    });
  },
};
</script>
