<!--代码逻辑和样式库-->
<script src="./dashboard.component.js"></script>
<style src="./dashboard.scss" scoped lang="scss"></style>

<template>
  <div>
    <div class="page-w">
      <banner :list="bannerList" />
    </div>
    <hot-point />
    <eccv />
    <learn />
    <bottom-footer />
  </div>
</template>
