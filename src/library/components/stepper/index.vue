<template>
  <div class="stepper" :class="{'small': small}">
    <button
      :class="{disable: currentValue == min || disabled}"
      @click="decrease()">
      <i class="bt-icon">&#xe62d;</i>
    </button>

    <input
      v-if="!disabled"
      @input="onInput"
      type="number"
      @blur='onBlur'
      :value="currentValue"/>

    <input
      v-if="disabled"
      disabled="disabled"
      type="number"
      @input="onInput"
      :value="currentValue"/>

    <button
      :class="{disable: currentValue == max || disabled}"
      @click="increase()">
      <i class="bt-icon">&#xe62c;</i>
    </button>
  </div>
</template>
<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      default: null,
    },
    min: {
      type: Number,
      default: null,
    },
    max: {
      type: Number,
      default: null,
    },
    step: {
      type: Number,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    enableZero: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentValue: this.value,
      oldValue: 0,
    };
  },
  computed: {
    currentLang: function() {
      return this.$store.state.locale;
    },
  },
  watch: {
    value: function(val) {
      this.currentValue = val;
    },
  },
  methods: {
    decrease() {
      if (!this.disabled) {
        this.currentValue = Number(this.currentValue) - this.step;
        if (this.currentValue < this.min) this.currentValue = this.min;
        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      }
      this.oldValue = this.currentValue;
    },
    increase() {
      if (!this.disabled) {
        this.currentValue = Number(this.currentValue) + this.step;
        if (this.currentValue > this.max) this.currentValue = this.max;
        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      }
      this.oldValue = this.currentValue;
    },
    onInput(e) {
      this.currentValue = Number(e.target.value);
      this.$emit('input', Number(e.target.value));
      if (this.currentValue !== '') {
        if (this.currentValue !== 0 && !this.enableZero) {
          this.$emit('change', this.currentValue);
        } else if (this.enableZero) {
          this.$emit('change', this.currentValue);
        }
      }
      if (this.currentValue > this.max) {
        this.currentValue = this.max;
        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      }
      if (this.currentValue < this.min) {
        this.currentValue = this.min;
        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      }
    },
    onBlur(e) {
      this.currentValue = Number(e.target.value);
      if ((this.currentValue == 0 && this.enableZero == false) || this.currentValue === '') {
        if (this.currentLang == 'zh') {
          this.$message({
            message: '请输入合适的数字。',
          });
        } else {
          this.$message({
            message: 'Please input digit.',
          });
        }
        this.currentValue = this.oldValue;
        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      }
      this.oldValue = this.currentValue;
    },
  },
};
</script>
<style scoped lang="less" type="text/less">
* {
  outline: none;
}
.stepper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  input {
    width: 38px;
    height: 28px;
    text-align: center;

    border: 1px solid #eee;
    border-width: 1px 0;

    box-sizing: content-box;
    -webkit-appearance: none;

    width: 33px;
    height: 26px;
    padding: 1px;
    border: 1px solid #eee;
    border-width: 1px 0;
    border-radius: 0;
    box-sizing: content-box;
    color: #666;
    font-size: 14px;
    vertical-align: middle;
    text-align: center;
    -webkit-appearance: none;
  }
  button {
    width: 32px;
    height: 30px;
    border: 1px solid #eee;

    background-color: #fff;
    color: #666666;

    width: 40px;
    height: 30px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #eee;
    position: relative;
    padding: 5px;
    vertical-align: middle;

    font-size: 18px;
    &.disable {
      background-color: #f1f1f1;
    }
  }
}
.stepper.small {
  input {
    width: 30px;
    height: 20px;

    font-size: 13px;
  }
  button {
    width: 26px;
    height: 24px;

    font-size: 13px;
  }
}

input[type='number'] {
  -moz-appearance: textfield;
}
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
  margin: 0;
}
</style>
