<template>
  <section>
    <bt-stepper
      :min="1"
      :max="10"
      :step="1"
      :disabled="false"
      @change="ajax()"
      :enableZero = "false"
      v-model="productCount">
    </bt-stepper>
  </section>
</template>
<script>
export default {
  data() {
    return {
      productCount: 0,
    };
  },
  methods: {
    ajax() {
      console.log(1);
    },
  },
};
</script>
