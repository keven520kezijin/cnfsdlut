import { mapGetters } from "vuex";
import banner from '@/components/banner/banner';
import articleContent from './components/article-content/article-content';
import bottomFooter from '@/components/footer/footer';
import articleNews from './components/article-news/article-news';
import qrCode from './components/qr-code/qr-code';
import { getBannerList } from '@/api/page'

export default {
  components: { banner, bottomFooter, articleContent, articleNews, qrCode },
  directives: {},
  data() {
    return {
      bannerList: [],
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'bannerData'
    ])
  },
  created() {
    this.getBannerData();
  },
  methods: {
    getBannerData() {
      const data = this.bannerData;
      let  filterData;

      if (!data) {
        getBannerList({
          sortType: "weight",
          pageNo: 1,
          pageSize: 20,
        }).then(res => {
          if(res) {
            this.$store.commit('SAVE_BANNER', res.data)
            filterData = res.data.filter(item => item.type == 0 && item.isShow == 1)
            this.bannerList = filterData
            console.log(filterData)
          }
        });
      } else {
        filterData = data.filter(item => item.type == 0 && item.isShow == 1)
        this.bannerList = filterData
      }
    },
  }
}
