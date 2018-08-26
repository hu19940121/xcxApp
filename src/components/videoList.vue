<template>
  <div class="videoList">
    <div class="listTitle">
      <span>{{list.cate_name}} </span>
    </div>
    <div class="listContent">
      <block v-if="list.layout===1">
        <videoItem2  v-for="(video,index) in list.list"  :key="index" :video="video" /> 
      </block>
      <block v-else>
        <videoItem  v-for="(video,index) in list.list"  :key="index" :video="video" />
      </block>

    </div>
  </div>
</template>

<script>
  import videoItem from './videoItem'
  import videoItem2 from './videoItem2'

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
      videoItem, // 第一种布局 一行两列
      videoItem2 // 第二种布局 一行三列
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