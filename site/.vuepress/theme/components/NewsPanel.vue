<template>
  <main class="news-panel">
    <h3>
      <v-icon name="radio"/>&nbsp;
      {{ (text ? text.title : null) || "What's Up" }}
    </h3>
    <div class="panel-content">
      <ul>
        <li v-for="post in newsPosts">
          <!-- <v-icon name="quote-left" class="quote-icon"/> -->
          <svg class="quote-icon fa-icon" aria-hidden="true" width="12" height="12" viewBox="0 0 512 512" focusable="false">
            <path id="quote-mark" d="M464 256c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48h-128c-26.5 0-48-21.5-48-48v-240c0-88.4 71.6-160 160-160h8c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-8c-35.3 0-64 28.7-64 64v64h80zM176 256c26.5 0 48 21.5 48 48v128c0 26.5-21.5 48-48 48h-128c-26.5 0-48-21.5-48-48v-240c0-88.4 71.6-160 160-160h8c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24h-8c-35.3 0-64 28.7-64 64v64h80z"></path>
          </svg>
          <router-link class="news-title" :to="post.path">{{ post.title }}</router-link>
          <div class="meta" v-if="post.date">
            {{ post.date }}
          </div>
        </li>
      </ul>
      <div class="read-more">
        <router-link :to="basePath || '/news/'">
          More 
          <v-icon name="arrow-right-circle"/>
        </router-link>
      </div>
    </div>
  </main>
</template>


<script>
import moment from "moment"

export default {
  props: {
    text: Object,
    basePath: String,
    pages: Array
  },

  computed: {
    newsPosts() {
      const newsPages = this.pages.filter(p => p.path.match(`^${this.basePath}(?!page/).+$`) !== null)
      return newsPages
        .sort((a, b) => (new Date(b.frontmatter.date)) - (new Date(a.frontmatter.date)))
        .map(page => ({
          title: page.title,
          path: page.path,
          author: page.frontmatter.author,
          date: page.frontmatter.date ? moment(page.frontmatter.date).fromNow() : null
        }))
        .slice(0, 5)
    }
  }
}
</script>


<style lang="stylus" scoped>

.news-panel
  padding 0

  h3
    padding 1rem 0
    margin 0
    border-bottom 2px solid $accentColor

    .icon
      margin-bottom -6px
      height 28px
  
  .panel-content
    padding 0.5rem 0 1rem 2rem

    .meta
      font-style italic
      color lighten($textColor, 20%)
      @media (prefers-color-scheme: dark)
        color lighten($textDarkColor, 20%)

    ul
      margin 0
      line-height 1.5
      padding-left 0
      list-style-type none

      li
        padding 0.5rem 0
        border-bottom 1px solid alpha($textColor, 10%)
        @media (prefers-color-scheme: dark)
          border-bottom 1px solid alpha($textDarkColor, 10%)

        .quote-icon
          margin-left -1.5rem
          margin-right 0.5rem
          font-size: 0.75em
          //fill: lighten($textColor, 20%)
          @media (prefers-color-scheme: dark)
            fill: lighten($textDarkColor, 20%)
        
        .news-title
          color $textColor
          @media (prefers-color-scheme: dark)
            color $textDarkColor

          &:hover
            color $accentColor

.read-more
  padding 1rem 0 0 0
  text-align right

  .icon
    height 20px
    margin-bottom -4px

</style>

