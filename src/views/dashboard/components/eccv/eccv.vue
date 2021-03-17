<!--代码逻辑和样式库-->
<script src="./eccv.component.js"></script>
<style src="./eccv.scss" scoped lang="scss"></style>

<template>
  <div class="eccv-container">
    <div class="big-title">
      <div class="title">论文成果</div>
      <div class="short-line"></div>
    </div>
    <el-row :gutter="20" type="flex">
      <el-col :xs="24" :sm="6" :md="6" class="margin-bottom">
        <div class="detail-container">
          <img src="@/assets/images/dash/eccv-1.png" />
          <div class="title">Unsupervised multi-view non-negative for law data feature learning with dual graph-regularization in smart Internet of Things</div>
          <div class="description">提出一种新的子空间学习模型，即自适应对偶图正则化多视图非负特征学习(ADMFL)，用于多视图数据表示。</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" class="margin-bottom">
        <div class="detail-container">
          <img src="@/assets/images/dash/eccv-2.png">
          <div class="title">CNFS：基于区块链的去中心化的分布式存储</div>
          <div class="description">提出一种内容可寻址的对等超媒体分发协议，并基于此协议，提出一种基于区块链实现分布式可信可监督安全存储应用的框架。</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" class="margin-bottom">
        <div class="detail-container">
          <img src="@/assets/images/dash/eccv-3.png">
          <div class="title">Secure weighted possibilistic c-means algorithm on cloud for clustering big data</div>
          <div class="description">提出了一种基于BGV加密方案的安全加权概率c均值算法，用于云上的大数据聚类。</div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="6" :md="6" class="margin-bottom">
        <div class="detail-container">
          <img src="@/assets/images/dash/eccv-4.jpg">
          <div class="title">Deep convolutional computation model for feature learning on big data in internet of things</div>
          <div class="description">提出了一种深度卷积计算模型(DCCM)，利用张量表示模型来学习大数据的层次特征，将CNN从向量空间扩展到张量空间。</div>
        </div>
      </el-col>
    </el-row>
    <!--<div class="com-button"><a class="btn-more">查看更多</a></div>-->
  </div>
</template>
