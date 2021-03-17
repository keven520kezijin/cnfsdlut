<!--代码逻辑和样式库-->
<script src="./events.component.js"></script>
<style src="./events.scss" scoped lang="scss"></style>

<template>
  <div>
    <!-- header -->
    <div class="header-container">
      <div class="detail-container">
        <div class="title">大会和活动</div>
      </div>
    </div>

    <article-news />

    <div class="search-container">
      <!--<el-form :inline="true" label-position="left">
        <el-form-item label="筛选:">
          <el-select v-model="searchCriteria.region" placeholder="请选择活动类型" filterable clearable>
            <el-option label="1" value="shanghai"></el-option>
            <el-option label="2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="searchCriteria.region2" placeholder="年份">
            <el-option label="2020" value="shanghai"></el-option>
            <el-option label="2019" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="search-button">确认</el-button>
          <el-button type="primary" class="search-button">重置</el-button>
        </el-form-item>
      </el-form>-->
      <el-row type="flex" :gutter="30" class="header-row">
        <el-col :xs="24" :sm="9" :md="9" class="col-item" align="center">
          活动名称
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          类型
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          地点
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          日期
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="30" class="item-row">
        <el-col :xs="24" :sm="9" :md="9" class="col-item" align="center">
          KDBD2020
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          学术会议
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          Calgary, Canada
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          June 22-26，2020
        </el-col>
      </el-row>
      <el-row type="flex" :gutter="30" class="item-row">
        <el-col :xs="24" :sm="9" :md="9" class="col-item" align="center">
          KDBD2019
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          学术会议
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          Kaohsiung, Taiwan
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          November 18-21, 2019
        </el-col>
      </el-row>

      <el-row type="flex" :gutter="30" class="item-row">
        <el-col :xs="24" :sm="9" :md="9" class="col-item" align="center">
          CITS2019
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          学术会议
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          Beijing, China
        </el-col>
        <el-col :xs="24" :sm="5" :md="5" class="col-item" align="center">
          August 28-31, 2019
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24" align="center">
          <!-- 分页插件 -->
          <!--<pagination layout="prev, pager, next" :background="false" :total="1000" :page.sync="pageNum" :limit.sync="recordNum" @pagination="getDataList" />-->
        </el-col>
      </el-row>
    </div>

    <bottom-footer />
  </div>
</template>
