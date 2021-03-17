<!--代码逻辑和样式库-->
<script src="./article-content.component.js"></script>
<style src="./article-content.scss" scoped lang="scss"></style>

<template>
  <div class="article-container">
    <div class="big-title">
      <div class="title">学术合作项目</div>
    </div>
    <el-row :gutter="20" type="flex">
      <el-col :xs="24" :sm="8" :md="8">
        <div class="divider-container">
          <img src="@/assets/images/connections/1.png" />
        </div>
        <div class="sub-title">
          科研合作
        </div>
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/connections/item-1.jpg" />
          <div class="description">
            联合实验室
          </div>
        </div>
        <!--<div class="item-container">
          <div class="item">云助推器主题研究</div>
          <div class="item">微软亚洲研究院铸星计划</div>
        </div>-->
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <div class="divider-container">
          <img src="@/assets/images/connections/2.png" />
        </div>
        <div class="sub-title">
          人才培养
        </div>
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/connections/item-2.jpg">
          <div class="description">
            学术夏令营活动
          </div>
        </div>
        <!--<div class="item-container">
          <div class="item">云助推器主题研究</div>
          <div class="item">微软亚洲研究院铸星计划</div>
        </div>-->
      </el-col>
      <el-col :xs="24" :sm="8" :md="8">
        <div class="divider-container">
          <img src="@/assets/images/connections/3.png" />
        </div>
        <div class="sub-title">
          交流共建
        </div>
        <div class="detail-container left-detail-container">
          <img src="@/assets/images/connections/item-3.jpg">
          <div class="description">
            实验室团建交流活动
          </div>
        </div>
        <!--<div class="item-container">
          <div class="item">云助推器主题研究</div>
          <div class="item">微软亚洲研究院铸星计划</div>
          <div class="item">云助推器主题研究</div>
          <div class="item">微软亚洲研究院铸星计划</div>
        </div>-->
      </el-col>
    </el-row>
  </div>
</template>
