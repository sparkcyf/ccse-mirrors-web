<template>
  <main>
    <h2>
      <v-icon name="package"/>&nbsp; {{ title || "Index of Mirrors" }}
    </h2>
    <div v-if="isLoading" id="loading-container">
      <v-icon name="refresh-cw"/>
    </div>
    <table v-else>
      <thead>
        <tr>
          <th>
            Name
            <div id="filter" :class="{ focusing: isFocusingFilter }">
              <input
                v-model="searchKey"
                :placeholder="searchPlaceHolder"
                @focus="isFocusingFilter = true"
                @blur="isFocusingFilter = false"
              />
              <v-icon name="search" height="16"/>
            </div>
          </th>
          <th>Files</th>
          <th>Status</th>
          <th>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="mirror in mirrors"
          :class="{
            working: mirror.alert === 'info',
            problematic: mirror.alert === 'warn' || mirror.alert === 'error'
          }"
        >
          <td>
            <router-link v-if="exists(`/help/${mirror.name}.html`)" :to="`/help/${mirror.name}.html`">{{ mirror.name }}</router-link>
            <span v-else>{{ mirror.name }}</span>
          </td>
          <td>
            <a :href="`/${mirror.name}/`"><v-icon name="folder"/></a>
          </td>
          <td>
            <Badge v-if="mirror.alert !== null" :type="mirror.alert" vertical="middle">
              {{ mirror.status }}
            </Badge>
          </td>
          <td>{{ mirror.lastUpdated }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>


<script>
import { get } from "axios"
import { setInterval } from "timers"
import * as data from "../util/tunasyncAdapter"

export default {
  props: {
    title: String
  },

  data() {
    return {
      jobsRawData: [],
      isLoading: true,
      isFocusingFilter: false,
      searchKey: ""
    }
  },

  computed: {
    mirrors() {
      var jobsRawData
      if (this.searchKey === "") {
        jobsRawData = this.jobsRawData
      } else {
        jobsRawData = this.jobsRawData.filter(j => data.doesJobMatch(j, this.searchKey))
      }
      return jobsRawData.map(j => data.job2Mirror(j))
    },

    searchPlaceHolder() {
      return this.isFocusingFilter ? "" : "Search"
    }
  },

  methods: {
    updateMirrors() {
      get(data.apiEndpoint)
        .then((resp) => {
          this.isLoading = false
          this.jobsRawData = resp.data
        })
        .catch((err) => console.error(err))
    },
    exists(path) {
      return this.$router.resolve(path).resolved.name != null
    }
  },

  mounted() {
    this.updateMirrors()
    setInterval(() => this.updateMirrors(), 60000)  // 1 minute
  }
}
</script>


<style lang="stylus" scoped>

$sustechOrange = #ed6c00
$sustechGreen = #2bb7b3

h2
  border none
  margin-bottom 0

  svg
    height 32px
    width 32px
    margin-bottom -6px

@keyframes spin
  from
    transform rotate(0deg)
  to
    transform rotate(360deg)

#loading-container
  width 100%
  text-align center

  .icon
    animation spin 1.5s linear infinite
    margin 4rem
    height 64px

table
  table-layout fixed
  border-spacing 0
  display table
  width 100%
  margin-top 0.5rem

  thead tr
    border-top none
    border-bottom 2px solid $accentColor

  tbody tr
    border none

    &.working
      background-color lighten($sustechGreen, 85%)
      @media (prefers-color-scheme: dark)
        background-color darken($sustechGreen, 70%)

    &.problematic
      background-color lighten($sustechOrange, 90%)
      @media (prefers-color-scheme: dark)
        background-color darken($sustechOrange, 50%)

    &:hover
      background-color lighten($sustechGreen, 70%)
      @media (prefers-color-scheme: dark)
        background-color darken($sustechGreen, 50%)

  thead th, tbody td
    text-align left
    border none

    &:nth-child(1)
      width 40%

      @media (max-width: $MQNarrow)
        width 30%

    &:nth-child(2)
      width 15%
      text-align center

      .icon
        height 16px
        margin-bottom -3px

    &:nth-child(3)
      text-align center
      width 20%

      @media (max-width: $MQNarrow)
        display: none

    &:nth-child(4)
      text-align right
      width 25%

      @media (max-width: $MQNarrow)
        width 35%

  tbody td
    &:nth-child(1) a, &:nth-child(2) a
      color $accentColor

      &:hover
        color lighten($textColor, 10%)
        @media (prefers-color-scheme: dark)
          color lighten($textDarkColor, 10%)

#filter
  float right
  height 1.5rem
  padding 0 0.75rem
  border-radius 0.75rem
  transition background-color 0.25s

  @media (max-width: $MQMobile)
    display none

  &.focusing
    background-color alpha($textColor, 7%)
    @media (prefers-color-scheme: dark)
      background-color alpha($textDarkColor, 7%)

  input
    border none
    outline none
    background none
    margin 0
    width 3rem
    transition width 0.25s

    &:focus
      width 6rem

  .icon
    margin 0 0 -3px 0.25rem
    height 16px

</style>
