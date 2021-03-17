<!--代码逻辑和样式库-->
<script src="./about.component.js"></script>
<style src="./about.scss" scoped lang="scss"></style>

<template>
  <div>
    <!-- header -->
    <div class="header-container">
      <div class="detail-container">
        <div class="title">大连理工大学CNFS协议实验室</div>
      </div>
    </div>
    <!-- 院长致辞 -->
    <!-- <div class="speech-container">
      <el-row :gutter="30" type="flex">
        <el-col :xs="24" :sm="6" :md="6" align="center">
          <img src="@/assets/images/about/header.jpg" />
          <div class="name">陈志奎</div>
        </el-col>
        <el-col :xs="24" :sm="18" :md="18">
          <div class="title">院长致辞</div>
          <div class="description">科技是人类文明进程中几乎唯一能够获得叠加性进步的力量。历史也许会重演，但科技永远向前。</div>
          <div class="description">
            互联网的发展愿景是互联的、去中心化的、离散的，但由于云计算的兴起，互联网却变得越来越中心化。随着区块链3.0时代的到来，区块链的应用已远超金融范畴，拓展到身份认证、公正、审计、物流、医疗、能源等众多领域，成为未来社会的最底层协议。然而，由于当前绝大多数的数据信息都存储在中心企业的云服务器集群中。当数据信息存储于非完全受信任的第三方时，数据校验监管则成为最耗费资源并难以解决的重大问题。与此同时，当信息资源集中在云计算平台时，会产生平台垄断、不透明操作、数据丢失、数据不受信和隐私泄露等问题，区块链的应用与发展也会受到相当大的制约。 CNFS（Cluster Net File System）是中国自主创新安全可控的一种内容可寻址的对等超媒体分发协议，其目的在于提供基于内容寻址的服务，替代Http协议簇，连接整合存储及算力资源，提供公开、公平、可监管的分布式存储服务。依托于CNFS协议体系，构建高吞吐量的分布式存储集群，提供有限中心化分布式存储服务，打造下一代民用、政用、商用一体的无需许可链。
          </div>
        </el-col>
      </el-row>
    </div> -->
    <!-- 介绍 -->
    <div class="info-container">
      <div class="description">
        截止到目前，实验室共获得国家专利10余项、软件著作权2项，出版专著、教材4本，在国内外会议与核心期刊发表论文百余篇，主办数次国际会议：IOTS2010、iThings2011、ICDH2014、Smart Data 2015、Smart X 2016、CITS2019、KSDB2020等，并加入了国家传感器网络标准工作组、数字家庭互动应用标准工作委员和物联网标准体系与标准工作组。
      </div>
      <!--<div class="description">
        微软亚洲研究院一直努力营造奋发、进取的科研环境，倡导对技术进步怀有远大抱负，推崇大胆创新以及富于冒险的极客创新精神。研究院鼓励研究人员树立长远眼光，加强与外界的交流，在第一时间接触世界领先的研究成果，对行业发展、技术趋势、及消费者需求高度敏感、迅速反应。微软亚洲研究院强调成员之间的相互信赖、相互尊重与开放合作，并承诺与高校和科研机构开展持久而有效的合作，促进协作、激发创新、推进教育，变梦想为现实！
      </div>-->
      <div class="item-container">
        <el-row :gutter="30" type="flex">
          <el-col :xs="24" :sm="6" :md="6" align="center">
            <img src="@/assets/images/about/item-1.png" />
            <div class="title">我们的使命</div>
            <div class="description">从CNFS协议入手推动整个区块链领域的前沿技术发展；将最新研究成果快速转化到区块链技术的关键产品中；着眼于下一代革命性技术的研究和孵化。</div>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" align="center">
            <img src="@/assets/images/about/item-2.png" />
            <div class="title">研究领域</div>
            <div class="description">区块链、云计算、网络科学，数据科学和系统工程、智能系统与应用、知识推理，大数据近似和可用性计算。</div>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" align="center">
            <img src="@/assets/images/about/item-3.png" />
            <div class="title">研究人员</div>
            <div class="description">实验室有一支专业化的研究团队，数位博士后和博士领导科研任务，多数具有海外工作或留学经历，负责人为陈志奎教授。</div>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" align="center">
            <img src="@/assets/images/about/item-4.png" />
            <div class="title">人才培养</div>
            <div class="description">产学研深度融合一站式人才培养体制，依托CNFS研究院，结合高等教育、科技、经济，立足上海，面向行业，辐射全国。</div>
          </el-col>
        </el-row>

        <el-row :gutter="30" type="flex">
          <el-col :xs="24" :sm="6" :md="6" align="center">
            <img src="@/assets/images/about/item-5.png" />
            <div class="title">科研合作</div>
            <div class="description">多家跨国公司合作、多家实验室合作、能为客户提供多元化服务。</div>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" align="center">
            <img src="@/assets/images/about/item-6.png" />
            <div class="title">研究成果</div>
            <div class="description">每年都能在全球顶级学术会议上发表论文多篇；每年都申请通过多项发明专利。</div>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" align="center">
            <img src="@/assets/images/about/item-7.png" />
            <div class="title">创新汇</div>
            <div class="description">以大连理工大学的优势技术资源为基础，与不同行业、领域的现实需求接轨，打造一个提升企业和机构生产力和商业价值，推动行业创新发展的平台。</div>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" align="center">
            <img src="@/assets/images/about/item-8.png" />
            <div class="title">院友会</div>
            <div class="description">院友遍布全球各地，其中不乏有在全球顶尖高校执教的，或者成为创业公司创始人，抑或是在BAT等企业担任高管职位。</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 全球研究团队 -->
    <div class="team-info">
      <div class="bg-container"></div>
      <div class="detail-container">
        <div class="title">全球研究团队</div>
        <div class="description">
          遍布全球各地的研究员相互合作，共同推动计算机技术的发展
        </div>
      </div>
    </div>
    <!-- Team member -->
    <div class="team-member-container">
      <div class="title">专家团队</div>
      <el-row :gutter="40" type="flex">
        <el-col :xs="24" :sm="8" :md="8" align="center">
          <div class="about-avatar">
            <img src="@/assets/images/about/head-1.jpg" />
          </div>
          <div class="name">陈志奎</div>
          <div class="position">重庆大学工学博士学位</div>
          <div class="position">现任大连理工大学教授，大连理工大学大数据研究所所长。</div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" align="center">
          <div class="about-avatar">
            <img src="@/assets/images/about/head-2.jpg" />
          </div>
          <div class="name">原旭</div>
          <div class="position">大连理工大学管理科学与工程学博士学位</div>
          <div class="position">现任大连理工大学副教授，美国哈佛大学医学研究院及麻省州立大学访问学者</div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" align="center">
          <div class="about-avatar">
            <img src="@/assets/images/about/head-5.png" />
          </div>
          <div class="name">陈智鹰</div>
          <div class="position">加州伯克利大学计算机硕士，IEEE国际标准委员会委员，以太坊早期开发者，曾任职谷歌和IBM，参与制定了多项IEEE区块链国际标准</div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" align="center">
          <div class="about-avatar">
            <img src="@/assets/images/about/head-3.jpg" />
          </div>
          <div class="name">于硕</div>
          <div class="position">大连理工大学软件工程博士学位</div>
          <div class="position">现为大连理工大学计算机科学与技术流动站博士后，Frontiers in Big Data专题特邀审稿人。</div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" align="center">
          <div class="about-avatar">
            <img src="@/assets/images/about/head-4.png" />
          </div>
          <div class="name">罗方</div>
          <div class="position">大连理工大学软件学院研究生。专注于推荐算法领域的研究</div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" align="center">
          <div class="about-avatar">
            <img src="@/assets/images/about/head-6.jpg" />
          </div>
          <div class="name">张丰益</div>
          <div class="position">大连理工大学软件学院研究生。对人岗推荐、推荐算法有深入理解，对区块链协议有一定研究。</div>
        </el-col>
      </el-row>
    </div>
    <!-- 联系信息 -->
    <!--<div class="contact-container">
      <el-row :gutter="80" type="flex">
        <el-col :xs="24" :sm="12" :md="12">
          <div class="title">媒体报道</div>
          <div class="item-row">
            <div class="item-text">【机器之心】2019机器之心人工智能年度奖项：微软亚洲研究院获选中国十大最强AI研究实力机构</div>
            <div class="item-date">2020-07-14</div>
          </div>
          <div class="item-row">
            <div class="item-text">【机器之心】2019机器之心人工智能年度奖项</div>
            <div class="item-date">2020-07-14</div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12">
          <div class="title">联系我们</div>
          <div class="sub-title">微软亚洲研究院</div>
          <div class="description">邮政编码：100080</div>
          <div class="description">电话：010-59179001</div>
        </el-col>
      </el-row>
    </div>-->
    <bottom-footer />
  </div>
</template>
