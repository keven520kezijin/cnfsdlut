import { mapGetters } from 'vuex'

export default {
  components: {},
  directives: {},
  data() {
    return {}
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
    notify() {
      this.$notify({
        title: '提示',
        message: '敬请期待',
        position: 'bottom-right'
      })
    }
  }
}
