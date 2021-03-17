import { mapGetters } from "vuex";
import banner from '@/components/banner/banner';
import hotPoint from './components/hot-point/hot-point';
import eccv from './components/eccv/eccv';
import learn from './components/learn/learn';
import { getBannerList } from '@/api/page'
import bottomFooter from '@/components/footer/footer';

export default {
  components: { banner, hotPoint, eccv, learn, bottomFooter },
  directives: {},
  data() {
    return {
      bannerList: [],
    }
  },
  computed: {
    ...mapGetters([
      'device',
      'bannerData',
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
            filterData = res.data.filter(item => item.type == 1 && item.isShow == 1)
            this.bannerList = filterData
          }
        });
      } else {
        filterData = data.filter(item => item.type == 1 && item.isShow == 1)
        this.bannerList = filterData
      }
    },
    goNews(index) {
      this.$router.push({ path: '/news', query: {
        index: index
      }});
    }
  }
}
