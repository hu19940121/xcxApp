<template>
  <div class="videoList">
    <div class="listTitle">
      <span>{{list.cate_name}} </span>
    </div>
    <div class="listContent">
      <videoItem v-for="(video,index) in list.list"  :key="index" :video="video" />
    </div>
  </div>
</template>

<script>
  import videoItem from './videoItem'
  export default {
    props: ['list'],
    data () {
      return {
  
      }
    },
    created () {

      // console.log(this.list)
    },

    components: {
      videoItem
    }
  }
</script>

<style lang="stylus" scoped>
  .videoList
    .listTitle
      display flex
      align-items center
      width 100%;
      height 56rpx
      padding-left 26rpx
      margin-bottom 10rpx
      span
        display block
        border-left 7rpx solid green
        padding-left 13rpx
        font-size 30rpx
    .listContent
      overflow hidden


</style>