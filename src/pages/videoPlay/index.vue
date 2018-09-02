<template>
  <div class="videoPlay">
    <div class="playerBox">
      <block v-if="videoInfo.video_url!==''">
         <video :src="videoInfo.video_url"></video>
      </block>
      <div v-else>
        暂无视频资源 请联系管理员
      </div>
    </div>
    <div class="videoInfo">
      <div class="row">
        <div class="row_left">
          <span class="movieName">
            {{videoInfo.name}}
          </span>
          <span class="clarity">{{videoInfo.clarity}}</span>
        </div>
        <div class="row_right" >
          <p class="brif_operation" @click="zhankai">简介</p>
          <img :class="{movie_brief_down:zhankai_brief}" src="../../../static/images/up_arrow.png" alt="">
        </div>
      </div>
      <div class="row">
        <div class="row_left">
          <span class="rating">{{videoInfo.rating}}</span>
          <span class="where">大陆</span>
          <span class="movie_type">电影</span>
        </div>
        <div class="row_right">
          
        </div>
      </div>
      <div class="main_actors">
        主演: {{videoInfo.actors}}
      </div>
      <div class="movie_brief" v-show="zhankai_brief">
        {{videoInfo.summary}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        videoInfo: {},
        zhankai_brief: false
      }
    },
    onLoad (options) {
      let videoInfo = JSON.parse(options.videoInfo)
      this.videoInfo = videoInfo
    },
    methods: {
      // 简介展开
      zhankai () {
        this.zhankai_brief = !this.zhankai_brief
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .videoPlay
    .playerBox
      video
        width 100%;
    .videoInfo
      padding 20rpx
      .row
        display flex
        justify-content space-between
        align-items center
        padding-top 10rpx
        padding-bottom 10rpx
        .row_left
          display flex
          align-items center
          .movieName
            margin-right 10rpx
            font-size 34rpx
          .clarity
            font-size 20rpx
            color green
          .rating
            font-size 24rpx
            color red
          .where,.movie_type
            font-size 26rpx
            color gray
            padding 0 10rpx 0 10rpx
        .row_right
          display flex
          font-size 34rpx
          img
            width 28rpx
            height 28rpx
            margin-left 10rpx
            transition: all 0.4s ease
          .brif_operation
            font-size 26rpx
            color gray 
          .movie_brief_down
            transform:rotate(180deg);
      .main_actors
        font-size 26rpx
        color gray 
        margin-bottom 10rpx
      .movie_brief
        font-size 26rpx
        color gray       


</style>