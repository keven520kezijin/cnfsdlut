<!--代码逻辑和样式库-->
<script src="./import-news.component.js"></script>
<style src="./import-news.scss" scoped lang="scss"></style>

<template>
  <div class="news-detail">
    <section class="content page-w" v-if="detail">
      <div class="title">
        <h1>{{ detail.title }}</h1>
        <time>{{ detail.pubDate }}</time>
      </div>
      <div class="body" v-html="detail.content"></div>
    </section>
    <!-- footer -->
    <!--<bottom-footer />-->
  </div>
</template>
