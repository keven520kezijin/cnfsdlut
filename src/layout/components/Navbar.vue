<template>
  <div class="navbar">
    <hamburger v-if="device == 'mobile'" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <div class="logo-container" :class="{'mobile-logo-container': device == 'mobile'}">
      <router-link to="/dashboard"><img src="@/assets/images/logo.jpg" class="logo-img"></router-link>
    </div>
    <div class="nav-container" v-if="device != 'mobile'">
      <el-divider direction="vertical"></el-divider>
      <div>
        <sidebar-horizontal></sidebar-horizontal>
      </div>
    </div>

    <!-- div class="right-menu" v-if="device != 'mobile'">
      <sidebar-horizontal></sidebar-horizontal>
    </div -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import SidebarHorizontal from './Sidebar-Horizontal/index'

export default {
  components: {
    Hamburger, SidebarHorizontal
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #ffffff;

  .nav-container {
    line-height: 60px;
    display: flex;
    align-items: center;
  }

  ::v-deep .el-divider {
    height: 22px;
    width: 2px;
    background-color: #000000;
    margin: 0 20px 0 40px;
  }

  .logo-container {
    height: 100%;
    float: left;
    img {
      height: 55px;
      margin-top: 5px;
    }
  }

  .mobile-logo-container {
    img {
      margin-left: 0 !important;
    }
  }

  .hamburger-container {
    line-height: 60px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;
    margin-right: 20px;

    &:focus {
      outline: none;
    }
  }

  ::v-deep .el-menu--horizontal {
    display: flex;

    .el-submenu__icon-arrow {
      display: block !important;
      color: #ffffff;
      right: 5px;
      top: 32px;
    }
  }

  ::v-deep .el-menu--horizontal .el-submenu__title {
    height: 60px;
    line-height: 60px;
    span {
      padding: 0 20px !important;
    }
  }

  ::v-deep .el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #ffffff;
  }

  ::v-deep .el-menu--horizontal .el-menu-item {
    line-height: 60px;
    height: 60px;
  }

  ::v-deep .el-menu--horizontal .el-menu-item.is-active {
    border-bottom: 2px solid;
    span {
      font-weight: bold;
      font-size: 16px;
    }
  }

  ::v-deep .el-menu--horizontal div {
    display: inline-block;
  }

  ::v-deep .el-menu--horizontal a {
    display: inline-block;
  }
}
</style>
