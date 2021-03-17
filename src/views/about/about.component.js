import { mapGetters } from "vuex";
import bottomFooter from '@/components/footer/footer';
import pagination from "@/components/Pagination";

export default {
  components: { bottomFooter, pagination },
  directives: {},
  data() {
    return {
      pageNum: 1,
      recordNum: 20, // 分页组件默认的页数, 分页里的select默认10, 20, 50
      searchCriteria: {}
    }
  },
  computed: {
    ...mapGetters([
      'device'
    ])
  },
  watch: {},
  created() {},
  beforeDestroy() {},
  mounted() {},
  methods: {
    getDataList() {}
  }
}
