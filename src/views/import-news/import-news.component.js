import bottomFooter from '@/components/footer/footer';
import { mapGetters } from "vuex";
import { getNewsDetail } from '@/api/page'

export default {
  components: { bottomFooter },
  directives: {},
  data() {
    return {
      detail: null,
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  created() {
    this.getNewsData();
  },
  beforeDestroy() {},
  mounted() {},
  methods: {
    getNewsData() {
      const params = {
        id: this.$route.query.index,
      }
    
      getNewsDetail(params).then(res => {
        if(res) {
          this.detail = res.data
        }
      })
    },
  }
}
