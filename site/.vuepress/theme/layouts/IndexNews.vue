<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar
      v-if="shouldShowNavbar"
      @toggle-sidebar="toggleSidebar"
    />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>

    <main class="news-index-page">
      <div class="page-content-container">
        <h1 class="page-title">
          <v-icon name="radio"/>&nbsp;What's Up?
        </h1>
        <ul>
          <li v-for="post in $pagination.pages">
            <div class="news-preview">
              <div v-if="post.excerpt" v-html="post.excerpt"/>
              <Content v-else :page-key="post.key"/>
            </div>
            <div class="post-meta">
              <v-icon v-if="post.frontmatter.author" name="user"/> {{ post.frontmatter.author }}
              <span v-if="post.frontmatter.author">&nbsp;&nbsp;</span>
              <v-icon v-if="post.frontmatter.date" name="calendar"/> {{ displayDate(post.frontmatter.date) }}
              <router-link :to="post.path" class="read-more">Read More <v-icon name="arrow-right-circle"/></router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="page-nav-container">
        <Pagination/>
      </div>
    </main>
  </div>
</template>


<script>
import Navbar from '@theme/components/Navbar.vue'
import Page from '@theme/components/Page.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import { Pagination } from '@vuepress/plugin-blog/lib/client/components'
import { resolveSidebarItems } from '../util'
import moment from "moment"

export default {
  components: { Page, Sidebar, Navbar, Pagination },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    newsPosts() {
      return this.$pagination.pages
    },

    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (
        frontmatter.navbar === false
        || themeConfig.navbar === false) {
        return false
      }
      return (
        this.$title
        || themeConfig.logo
        || themeConfig.repo
        || themeConfig.nav
        || this.$themeLocaleConfig.nav
      )
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page
      return (
        !frontmatter.home
        && frontmatter.sidebar !== false
        && this.sidebarItems.length
      )
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      )
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
  },

  methods: {
    displayDate(dateStr) {
      return moment(dateStr).format("YYYY-MM-DD")
    },

    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>


<style lang="stylus">
@require '../styles/wrapper.styl'

.news-index-page
  padding-bottom 2rem

.page-content-container
  @extend $wrapper
  margin-top $navbarHeight

  .page-title .icon
      margin-bottom -10px
      height 42px

  ul
    list-style-type none
    padding-left 0

    li
      border 1px solid alpha($textColor, 15%)
      @media (prefers-color-scheme: dark)
        border 1px solid alpha($textDarkColor, 15%)
      border-radius 3px
      margin 2rem 0
      display block

      .post-meta
        border-top 1px solid alpha($textColor, 15%)
        @media (prefers-color-scheme: dark)
          border-top 1px solid alpha($textDarkColor, 15%)
        padding 1rem 1.5rem

        .icon
          margin-bottom -4px
          height 20px

        .read-more
          float: right

.news-preview
  padding 0.5rem 1.5rem

  h1
    font-size 1.65rem

  h2
    font-size 1.35rem
    padding 0
    border-bottom none
  
  h3
    font-size 1.2rem

.page-nav-container
  @extend $wrapper
  text-align center

@media (prefers-color-scheme: dark)
  .pagination

    li

      a
        &
          background-color $sustechDark
          color $sustechGreen
        &:hover
          background-color $sustechGreen
          color #fff
        &:focus
          background-color $sustechGreen
          color #fff

      &.disabled a
        &
          background-color #222
          color #555
        &:hover
          background-color #222
          color #555
        &:focus
          background-color #222
          color #555

</style>
