<!--代码逻辑和样式库-->
<script src="./article-news.component.js"></script>
<style src="./article-news.scss" scoped lang="scss"></style>

<template>
  <div class="article-container">
    <div class="big-title">
      <div class="title">旗舰活动</div>
    </div>
    <el-row :gutter="30" type="flex">
      <el-col :xs="24" :sm="8" :md="8">
        <div class="detail-container left-detail-container">
          <img src="https://www.msra.cn/wp-content/uploads/2020/09/popmag-800-450.jpg">
          <div class="description">
            还在捞五条人？不如用AI自己组乐队
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <div class="detail-container left-detail-container">
          <img src="https://www.msra.cn/wp-content/uploads/2020/09/popmag-800-450.jpg">
          <div class="description">
            还在捞五条人？不如用AI自己组乐队
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <div class="detail-container left-detail-container">
          <img src="https://www.msra.cn/wp-content/uploads/2020/09/popmag-800-450.jpg">
          <div class="description">
            还在捞五条人？不如用AI自己组乐队
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
