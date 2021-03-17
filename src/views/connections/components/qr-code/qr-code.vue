<!--代码逻辑和样式库-->
<script src="./qr-code.component.js"></script>
<style src="./qr-code.scss" scoped lang="scss"></style>

<template>
  <div class="qr-container">
    <div class="big-title">
      <div class="title">关注学术合作</div>
    </div>
    <el-row :gutter="20" type="flex">
      <el-col :xs="24" :sm="24" :md="24" class="qr-items">
        <div>
          <img src="https://www.msra.cn/wp-content/uploads/2017/06/ur-weibo.png" alt="" width="115" height="115">
          <div class="qr-title">学术合作微博</div>
        </div>
        <div>
          <img src="https://www.msra.cn/wp-content/uploads/2017/06/ur-weibo.png" alt="" width="115" height="115">
          <div class="qr-title">学术合作微博</div>
        </div>
        <div>
          <img src="https://www.msra.cn/wp-content/uploads/2017/06/ur-weibo.png" alt="" width="115" height="115">
          <div class="qr-title">学术合作微博</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
