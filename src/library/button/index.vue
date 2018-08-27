<template>
  <button class="bt-button" :disabled="idisabled" @click="$emit('click', $event)">
    <template v-if="align === 'left'">
      <i class="bt-icon loading" v-if="loading">&#xe644;</i>
      <i class="bt-icon" v-else-if="icon" v-html="icon"></i>
    </template>
    <span v-if="$slots.default"><slot /></span>
    <template v-if="align === 'right'">
      <i class="bt-icon loading" v-if="loading">&#xe644;</i>
      <i class="bt-icon" v-else-if="icon" v-html="icon"></i>
    </template>
  </button>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    // icon的对其方式
    align: {
      type: String,
      default: 'left',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    idisabled() {
      return this.loading || this.disabled;
    },
  },
};
</script>
