import { mapGetters } from "vuex"

export default {
  props: {
    list: {
      type: Array,
      default: null
    },
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'device',
    ])
  },
  created() {},
  methods: {}
}
