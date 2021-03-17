<!--代码逻辑和样式库-->
<script src="./banner.component.js"></script>
<style src="./banner.scss" scoped lang="scss"></style>

<template>
  <div class="banner-container" v-if="list.length > 0">
    <el-carousel trigger="click">
      <el-carousel-item v-for="(item, i) in list" :key="i">
        <div class="carousel-item-container">
          <div class="bg_banner" :style="`background: url(${item.photo}) no-repeat; background-size: contain;`"></div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
