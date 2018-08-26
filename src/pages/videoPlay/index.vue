<template>
  <div class="videoPlay">
    <div class="playerBox">
      <video :src="videoInfo.video_url"></video>
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