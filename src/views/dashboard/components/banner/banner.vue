<!--代码逻辑和样式库-->
<script src="./banner.component.js"></script>
<style src="./banner.scss" scoped lang="scss"></style>

<template>
  <div class="banner-container">
    <el-carousel trigger="click" height="65vh">
      <el-carousel-item>
        <div class="carousel-item-container">
          <div class="bg-overflow banner-1"></div>
          <div class="detail-info">
            <!-- <div>
              <div class="title">科学匠人 | 在区块链领域，做脚踏实地、仰望星空的研究</div>
              <div class="description">打造去中心化的分布式存储网络</div>
            </div> -->
          </div>
          <!--<img src="https://www.msra.cn/wp-content/uploads/2020/04/mahjong-ai-suphx-paper-1600-720-800x550.jpg" />-->
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="carousel-item-container">
          <div class="bg-overflow banner-2"></div>
          <div class="detail-info">
            <!-- <div>
              <div class="title">CNFS白皮书即将发布</div>
              <div class="description">揭开CNFS的神秘面纱</div>
            </div> -->
          </div>
          <!--<img src="@/assets/images/dash/banner-1.png" />-->
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="carousel-item-container">
          <div class="bg-overflow banner-3"></div>
          <div class="detail-info">
            <!-- <div>
              <div class="title">CNFS实验室同步公众号上线</div>
              <div class="description">实时了解实验室最新进展</div>
            </div> -->
          </div>
          <!--<img src="https://www.msra.cn/wp-content/uploads/2020/04/mahjong-ai-suphx-paper-1600-720-800x550.jpg" />-->
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
