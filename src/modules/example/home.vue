<template>
  <ex-view>
    <ex-header title="简单示范">
      <ex-menu class="text-gray" @click="$router.back()">
        <i class="bt-icon">&#xe60e;</i>
      </ex-menu>
      <ex-title />
    </ex-header>
    <ex-content>
      <div class="list compact overlap">
        <router-link class="item" :to="$prelang('example/button')">
          <div class="text">按钮</div>
          <i class="bt-icon">&#xe61a;</i>
        </router-link>
        <router-link class="item" :to="$prelang('example/page')">
          <div class="text">翻页</div>
          <i class="bt-icon">&#xe61a;</i>
        </router-link>
      </div>
    </ex-content>
  </ex-view>
</template>
