<!--代码逻辑和样式库-->
<script src="./article-news.component.js"></script>
<style src="./article-news.scss" scoped lang="scss"></style>

<template>
  <div class="article-container">
    <div class="big-title">
      <div class="title">学术合作新闻</div>
    </div>
    <el-row :gutter="20" type="flex">
      <el-col :xs="24" :sm="12" :md="12">
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/connections/news-1.jpg">
          <div class="description">
            举行“大数据计算现状与前沿研究”报告会
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/connections/news-2.jpg">
          <div class="description">
            软件定义+X技术研讨会
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/connections/news-3.jpg">
          <div class="description">
            麻省大学熊杰教授访问
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12">
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/connections/news-4.jpg">
          <div class="description">
            海天学者王歆讲座
          </div>
        </div>
      </el-col>
    </el-row>
    <!--<div class="com-button"><a class="btn-more">查看更多</a></div>-->
  </div>
</template>
