<!--代码逻辑和样式库-->
<script src="./hot-point.component.js"></script>
<style src="./hot-point.scss" scoped lang="scss"></style>

<template>
  <div class="hot-container page-w" v-if="bigImgData && list">
    <div class="big-title">
      <div class="title">热点聚焦</div>
      <div class="short-line"></div>
    </div>
    <el-row :gutter="20" type="flex">
      <el-col :span="12">
        <div class="detail-container left-detail-container hot-point" @click="goNews(bigImgData.id)">
          <span class="img" :style="`background-image: url(${bigImgData.img});`" />
          <div class="description">{{ bigImgData.title }}</div>
        </div>
      </el-col>
      <el-col :span="12">
        <el-col
          :span="12"
          v-for="(item,i) in list"
          :key="i"
        >
          <div
            class="detail-container"
            :class="`hot-point-${i+1}`"
            @click="goNews(item.id)"
          >
            <span class="img" :style="`background-image: url(${item.img});`" />
            <div class="description">{{ item.title }}</div>
          </div>
        </el-col>
      </el-col>
    </el-row>
    <!--<div class="com-button"><a class="btn-more">查看更多</a></div>-->
  </div>
</template>
