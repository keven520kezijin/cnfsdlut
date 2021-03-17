<!--代码逻辑和样式库-->
<script src="./footer.component.js"></script>
<style src="./footer.scss" scoped lang="scss"></style>

<template>
  <div>
    <div class="footer-container">
      <div class="image-container">
        <img src="@/assets/images/logo.png" class="footer-logo">
      </div>
      <div class="nav-container">
        <div class="txt-list">
          <h2>学术合作</h2>
          <router-link to="connections"><a>学术合作项目</a></router-link>
          <router-link to="connections"><a>学术合作新闻</a></router-link>
        </div>
        <div class="txt-list">
          <h2>大会和活动</h2>
          <router-link to="events"><a>旗舰活动</a></router-link>
        </div>
        <div class="txt-list">
          <h2>招贤纳士</h2>
          <router-link to="jobs">全职岗位</router-link>
        </div>
        <div class="txt-list">
          <h2>关于我们</h2>
          <router-link to="about">全球研究团队</router-link>
          <router-link to="about">专家团队</router-link>
        </div>
      </div>
      <!--<el-row :gutter="30">
        <el-col align="center" :xs="24" :sm="6" :md="6">
          <img src="@/assets/images/footer-logo.png" class="footer-logo">
        </el-col>
        <el-col align="center" :xs="24" :sm="12" :md="12">
          <el-row>
            <el-col :xs="24" :sm="8" :md="8" align="center">
              <div class="txt-list">
                <h2>关于我们</h2>
                <a href="#">我们的团队</a>
                <a href="#">研发团队</a>
                <a href="#">公司地址</a>
                <a href="#">人员架构</a>
              </div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" align="center">
              <div class="txt-list">
                <h2>产品服务</h2>
                <a href="#">金融服务</a>
                <a href="#">医疗服务</a>
                <a href="#">车载服务</a>
                <a href="#">电信服务</a>
              </div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" align="center">
              <div class="txt-list">
                <h2>参与讨论</h2>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
                <a href="#">Interest</a>
                <a href="#">Blog</a>
                <a href="#">Reddit</a>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col align="center" :xs="24" :sm="6" :md="6">
          <img src="@/assets/images/qr-code.png" class="qr-code">
        </el-col>
      </el-row>-->
    </div>
    <div class="footer-container-m">
      <el-collapse accordion>
        <el-collapse-item title="学术合作" name="1">
          <div class="txt-list">
            <router-link to=""><a>学术合作项目</a></router-link>
            <router-link to=""><a>学术合作新闻</a></router-link>
          </div>
        </el-collapse-item>
        <el-collapse-item title="大会和活动" name="2">
          <div class="txt-list">
            <router-link to=""><a>旗舰活动</a></router-link>
          </div>
        </el-collapse-item>
        <el-collapse-item title="招贤纳士" name="3">
          <div class="txt-list">
            <a>招贤纳士</a>
            <a>全职岗位</a>
          </div>
        </el-collapse-item>
        <el-collapse-item title="关于我们" name="3">
          <div class="txt-list">
            <a>全球研究团队</a>
            <a>专家团队</a>
          </div>
        </el-collapse-item>
      </el-collapse>
      <div class="content-container">
        <div class="btn-cus btn-cus-blue">
          购买咨询：400XXXXXXX 转 1
        </div>
        <div class="btn-cus">
          联系我们
        </div>
        <div class="btn-cus btn-cus-p">
          <div class="content-item">
            <img src="@/assets/images/quanqiu.png" />
            中国站
          </div>
          <div class="arrow-item">
            <img src="@/assets/images/arrow.png" />
          </div>
        </div>
      </div>
    </div>
    <el-row>
      <el-col :span="24" align="center" class="official-no">
        <div>沪ICP备2020029560号 版权归CNFS协议实验室所有，并保留所有权利</div>
      </el-col>
    </el-row>
  </div>
</template>
