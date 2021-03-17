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
          <img src="@/assets/images/events/item-1.png" />
          <div class="description">
            KDBD 2020: The 2nd International Workshop on Knowledge Discovery for Big Data
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/events/item-2.jpg" />
          <div class="description">
            实验室参加第十届信息、产品及系统国际合作研讨会
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/events/item-3.jpg" />
          <div class="description">
            KDBD 2019: International Workshop on Knowledge Discovery for Big Data
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
