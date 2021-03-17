import { mapGetters } from "vuex"
import { getNewsList } from '@/api/page'
import { arrTrans } from '@/utils/validate'

export default {
  data() {
    return {
      list: null,
      bigImgData: null,
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  mounted() {
    this.getNewsData();
  },
  methods: {
    getNewsData() {
      let newsData = this.$store.state.newsData;
      if (!newsData) {
        getNewsList({
          sortType: "weight",
          pageNo: 1,
          pageSize: 20,
        }).then((res) => {
          let resData = {};
          if(res) {
            let data = res.data.filter(item => item.type == 0 && item.isShow == 1)
            const trans1 = arrTrans(5, data)
            resData.bigImgData = trans1[0].filter((item, i) => i === 0)[0]
            this.bigImgData = resData.bigImgData
            resData.list = trans1[0].filter((item, i) => i > 0)
            this.list = resData.list
            this.$store.commit('SAVE_NEWSLIST', resData)
          }
        });
      } else {
        this.list = this.$store.state.newsData.list;
        this.bigImgData = this.$store.state.newsData.bigImgData
      }
    },
    goNews(index) {
      this.$router.push({ path: '/news', query: {
        index: index
      }});
    }
  }
}
