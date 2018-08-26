

<template>
  <div class="videoItem" @click="linkToPlay(video)">
    <div class="poster">
      <img :src="video.poster">
      <div class="bottomRow">
        <span class="qingxidu">
          {{video.clarity}}
        </span>
        <span class="rating">
          {{video.rating}}
        </span>
      </div>
    </div>
    <div class="videoInfo">
      <p class="video_name">
         {{video.name}}
      </p>
      <p class="video_title"> {{video.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['video'],
    methods: {
      linkToPlay (video) {
        console.log('lallal')
        console.log(video)
        let videoInfo = JSON.stringify(video)
        wx.navigateTo({
          url: '/pages/videoPlay/main?videoInfo=' + videoInfo
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .videoItem
    width 204rpx;
    height 336rpx
    margin-left 34rpx
    margin-bottom 20rpx
    float left
    .poster
      position relative
      width 100%;
      height 264rpx
      img
        height 100%;
        width 100%;
      .bottomRow
        display flex
        justify-content space-between
        position absolute
        bottom 10rpx
        width 100%
        font-size 24rpx
        color #fff
        span
          display block
        .qingxidu
          margin-left 10rpx
        .rating 
          margin-right 10rpx
    .videoInfo
      p
        font-size 28rpx
        margin-top 10rpx
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      .video_title
        color gray 
        font-size 24rpx




    

</style>