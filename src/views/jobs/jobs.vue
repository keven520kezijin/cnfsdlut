<!--代码逻辑和样式库-->
<script src="./jobs.component.js"></script>
<style src="./jobs.scss" scoped lang="scss"></style>

<template>
  <div>
    <!-- header -->
    <div class="header-container">
      <div class="detail-container">
        <div class="title">加入我们</div>
        <div class="description">在开放、平等、自由、舒适的学术环境中，与业界公认的学术巨擘一起工作，从事最前沿的计算机研究，影响全球亿万用户的工作和生活方式</div>
      </div>
    </div>
    <div class="search-container">
      <div class="big-title">
        <div class="title">全职岗位</div>
        <div class="short-line"></div>
      </div>
      <!--<el-form :inline="true" label-position="left" class="search-form">
        <el-form-item>
          <el-select v-model="searchCriteria.region" placeholder="请选择城市" filterable clearable>
            <el-option label="1" value="shanghai"></el-option>
            <el-option label="2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="searchCriteria.region2" placeholder="请选择组别">
            <el-option label="2020" value="shanghai"></el-option>
            <el-option label="2019" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="search-button">筛选</el-button>
          <el-button type="primary" class="search-button">重置</el-button>
        </el-form-item>
      </el-form>-->
      <el-row type="flex" :gutter="30" class="item-row">
        <el-col :xs="24" :sm="24" :md="24" class="col-item" align="left">
          <div class="title">研究员/研究工程师</div>
          <div class="info"><span>城市：大连</span><span class="margin-left">组别：区块链组</span></div>
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="30" class="item-row">
        <el-col :xs="24" :sm="24" :md="24" class="col-item" align="left">
          <div class="title">研究员/研究工程师</div>
          <div class="info"><span>城市：大连</span><span class="margin-left">组别：不限</span></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" align="center">
          <!-- 分页插件 -->
          <!--<pagination layout="prev, pager, next" :background="false" :total="1000" :page.sync="pageNum" :limit.sync="recordNum" @pagination="getDataList" />-->
        </el-col>
      </el-row>
    </div>
    <div class="top-project-info">
      <div class="detail-container">
        <div class="title">”明日之星”实习项目</div>
      </div>
    </div>
    <bottom-footer />
  </div>
</template>
