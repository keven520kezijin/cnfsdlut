<!--代码逻辑和样式库-->
<script src="./learn.component.js"></script>
<style src="./learn.scss" scoped lang="scss"></style>

<template>
  <div class="learn-container">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="12" :md="12">
        <div class="big-title">
          <div class="title">产学研联合实验室</div>
          <div class="short-line"></div>
        </div>
        <div class="item-container">
          <div class="left-item learn-1">
            <img src="@/assets/images/dash/learn-1.png">
          </div>
          <div class="right-item">
            <div class="title">上海联元智能科技有限公司</div>
            <div class="description">上海联元智能科技有限公司是一家由国际领先新能源公司，国内优秀新能源技术开发和服务企业以及世界500强顶级咨询机构资深专家们共同发起成立的能源互联网综合服务公司。公司依托国际能源行业领先的物联网平台，运用大数据，人工智能，云计算和社交网络领域的成熟技术，开发一系列能源互联网解决方案，为源、网、储、荷等各类客户以及生态伙伴提供专业规划，投资分析，增值运营等服务。管理着全球超过100GW的新能源资产。公司拥有5个生态合作伙伴公司，共建全球能源互联网生态；5个联盟全球研发中心提供技术和算法支持。公司为顾客提供多种服务：区域能源互联网建设、能效对标分析、机会挖掘、开发合作、电费托管、能效监控。</div>
          </div>
        </div>

        <div class="item-container">
          <div class="left-item">
            <img src="@/assets/images/dash/learn-2.png">
          </div>
          <div class="right-item">
            <div class="title">硅马（上海）科技有限公司</div>
            <div class="description">硅马（上海）科技有限公司是一家由在车联网、物联网领域拥有超过10年创业经验积累的专业团队组建的高科技创新公司，拥有完全自主知识产权的覆盖了物联网传感器嵌入式算法软件、智能车载设备软硬件设计开发以及基于微服务架构的车联网SaaS平台开发部署运营等端到端的完整技术方案能力。硅马科技的“救驾侠”系列智能车载产品搭载远盟康健的专业PSAP调度平台能力提供覆盖全国的7*24紧急救援服务，为中国车主的安全出行保驾护航；通过与环交所合作响应中国政府《绿色出行行动计划》，硅马科技以车联网大数据技术支持绿色出行奖励活动，倡导人人都做低碳出行、环境友好的“绿行者”，为中国践行《巴黎协定》、保护美好地球家园贡献力量。</div>
          </div>
        </div>

        <div class="item-container">
          <div class="left-item learn-3">
            <img src="@/assets/images/dash/learn-3.jpg">
          </div>
          <div class="right-item">
            <div class="title">上海医蓝医疗科技有限公司</div>
            <div class="description">上海医蓝医疗科技有限公司整合上海、北京以及美国、日本的优质医疗资源，注入到医疗产业。联合吴孟超院士和上海国际医学中心，通过医疗	帮扶，打造“一带一路”的健康产业带。近年来结合产业联盟8大集群协同配合，为绿地全国多个事业部获得“康养谷”、“生命科学城”、“智慧健康特色小镇”的优质土地作出了卓越贡献！</div>
          </div>
        </div>
        <!--<div class="com-button"><a class="btn-more">查看更多</a></div>-->
      </el-col>

      <el-col :xs="24" :sm="6" :md="6">
        <div class="big-title">
          <div class="title">实习岗位</div>
          <div class="short-line"></div>
        </div>
        <div class="job-container">
          <div class="title">
            区块链研究实习生
          </div>
          <div class="info">
            城市：<span>大连</span>   <span class="vertical-line">|</span>   组别：<span>区块链组</span>
          </div>
        </div>

        <div class="job-container">
          <div class="title">
            深度学习研究实习生
          </div>
          <div class="info">
            城市：<span>大连</span>   <span class="vertical-line">|</span>   组别：<span>深度学习组</span>
          </div>
        </div>

        <div class="job-container">
          <div class="title">
            分布式存储研究实习生
          </div>
          <div class="info">
            城市：<span>大连</span>   <span class="vertical-line">|</span>   组别：<span>分布式存储组</span>
          </div>
        </div>
        <!--<div class="com-button"><a class="btn-more">查看更多</a></div>-->
      </el-col>

      <el-col :xs="24" :sm="6" :md="6">
        <div class="big-title">
          <div class="title">全职岗位</div>
          <div class="short-line"></div>
        </div>

        <div class="job-container">
          <div class="title">
            研究员/研究工程师
          </div>
          <div class="info">
            城市：<span>大连</span>   <span class="vertical-line">|</span>   组别：<span>区块链组</span>
          </div>
        </div>

        <!--<div class="job-container">
          <div class="title">
            Linux并行优化研发实习生
          </div>
          <div class="info">
            城市：<span>北京、上海</span>   <span class="vertical-line">|</span>   组别：<span>创新工程组</span>
          </div>
        </div>

        <div class="com-button"><a class="btn-more">查看更多</a></div>-->
      </el-col>
    </el-row>
  </div>
</template>
