<!--代码逻辑和样式库-->
<script src="./connections.component.js"></script>
<style src="./connections.scss" scoped lang="scss"></style>

<template>
  <div>
    <banner :list="bannerList" />

    <article-content />
    
    <!-- 长城计划 -->
    <!--<div class="cc-plan-container">
      <div class="detail-container">
        <div class="title">长城计划</div>
        <div class="description">
          教育部 – 微软“长城计划“第五期2015年~2017年
        </div>
      </div>
    </div>-->

    <article-news />

    <!-- 新一代人工智能开放科研与教育平台 -->
    <!--<div class="education-container">
      <div class="detail-container">
        <div class="title">新一代人工智能开放科研与教育平台</div>
        <div class="description">
          构建开放、开源的中国人工智能科技创新与教育合作体系 >
        </div>
      </div>
    </div>

    <qr-code />-->

    <bottom-footer />
  </div>
</template>
