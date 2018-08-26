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
  </div>
</template>

<script>
  export default {
    data () {
      return {
        videoInfo: {}
      }
    },
    onLoad (options) {
      let videoInfo = JSON.parse(options.videoInfo)
      this.videoInfo = videoInfo
    }
  }
</script>

<style lang="stylus" scoped>
  .videoPlay
    .playerBox
      video
        width 100%;
</style>