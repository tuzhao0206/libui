<template>
  <div class="bt-page">
    <ul>
      <li :class="prevClass" @click="prev"><i class="bt-icon">&#xe60e;</i></li>

      <li v-if="page !== 1" @click="goto(1)">1</li>
      <li v-if="page - 4 > 1" class="jump"><i class="bt-icon">&#xe60c;</i></li>
      <li v-if="page - 3 > 1" @click="goto(page - 3)">{{page - 3}}</li>
      <li v-if="page - 2 > 1" @click="goto(page - 2)">{{page - 2}}</li>
      <li v-if="page - 1 > 1" @click="goto(page - 1)">{{page - 1}}</li>
      <li class="active">{{page}}</li>
      <li v-if="page + 1 < maxp" @click="goto(page + 1)">{{page + 1}}</li>
      <li v-if="page + 2 < maxp" @click="goto(page + 2)">{{page + 2}}</li>
      <li v-if="page + 3 < maxp" @click="goto(page + 3)">{{page + 3}}</li>
      <li v-if="page + 4 < maxp" class="jump"><i class="bt-icon">&#xe60f;</i></li>
      <li v-if="page !== maxp" @click="goto(maxp)">{{maxp}}</li>

      <li :class="nextClass" @click="next"><i class="bt-icon">&#xe61a;</i></li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    page: {
      type: Number,
      default: 1,
    },
    size: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      ipage: this.page,
    };
  },
  computed: {
    // 最大页码数量
    maxp() {
      return Math.max(0, Math.ceil(this.total / this.size));
    },
    prevClass() {
      return {
        disabled: this.page === 1,
      };
    },
    nextClass() {
      return {
        disabled: this.page === this.maxp,
      };
    },
  },
  watch: {
    page(newVal) {
      this.ipage = newVal;
    },
    total(newVal) {
      let max = Math.ceil(newVal / this.size);
      if (max > 0 && max < this.page) {
        this.goto(max);
      }
    },
  },
  methods: {
    prev() {
      if (this.page > 1) {
        this.goto(this.page - 1);
      }
    },
    next() {
      if (this.page < this.maxp) {
        this.goto(this.page + 1);
      }
    },
    goto(page) {
      if (this.page !== page) {
        this.ipage = page;
        this.$emit('change', page);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import '../../less/base/fn.less';
.bt-page {
  ul {
    display: inline-block;
  }
  li {
    display: inline-block;
    vertical-align: middle;
    list-style: none;
    text-align: center;
    border: 1px solid #dcdee2;
    background-color: #fff;
    user-select: none;
    cursor: pointer;
    font-family: Arial;
    font-size: 12px;
    height: 32px;
    min-width: 32px;
    line-height: 30px;
    margin-right: 8px;
    border-radius: 4px;

    &:hover {
      color: @blue;
      border-color: @blue;
    }
    &.active {
      color: @white;
      border-color: @blue;
      background-color: @blue;
    }
    &.jump {
      color: #ccc;
      border-color: transparent;
      &:after {
        content: '\2022\2022\2022';
        display: block;
        letter-spacing: 1px;
        color: #ccc;
        text-align: center;
        -webkit-font-smoothing: antialiased;
      }
      .bt-icon {
        color: @blue;
        font-size: 10px;
        display: none;
      }
      &:hover {
        &:after {
          content: none;
        }
        .bt-icon {
          display: block;
        }
      }
    }
    &.disabled {
      cursor: not-allowed;
      color: #ccc;
      border-color: #dcdee2;
    }
  }
}
</style>
