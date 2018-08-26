<template>
	<div class="home">
    <div class="header">
      <ul class="tab">
        <scroll-view scroll-x="true" style="white-space: nowrap;">
          <li class="nav_item" v-for="(item,index) in channelList" :key="index">
            <span v-bind:class="{active:currentIndex===index}" @click="handleClick(index)">{{item.name}}</span>
          </li>
        </scroll-view>
      </ul>
      <div class="search_content">
        <input type="text" placeholder="搜你想看">
        <div class="icon_content">
          <img src="../../../static/images/time.png" alt="">
          <img src="../../../static/images/collect.png" alt="">
          <img src="../../../static/images/download.png" alt="">
        </div>
      </div>
    </div>
    <div class="tab_body_container">
      <div class="tab_body" v-for="(item,index) in channelList" :key="index" v-show="currentIndex==index">
        <swiper :list="swiperList"></swiper>
        <videoList :list="item" v-for="(item,index2) in videoList" :key="index2"/>
      </div>
    </div>
	</div>
</template>

<script>
import swiper from '@/components/swiper'
import videoList from '@/components/videoList'
export default {
  data () {
    return {
      channelList: [ ],
      currentIndex: 0,
      swiperList: [],
      videoList: []
    }
  },
  created () {
    this.getChannelList() // 获取频道列表
  },
  methods: {
    async getChannelList () { // 获取频道列表
      let res = await this.http(this.apis.getChannelList, {})
      this.channelList = res.data.data
      this.getChannelContentById(this.channelList[this.currentIndex].id)
    },
    getChannelContentById (id) { // 根据频道id获取频道下的详情内容
      this.http(this.apis.getChannelContentById, {id}).then(res => {
        console.log(res)

        this.swiperList = res.data.data.swiperList
        this.videoList = res.data.data.videoList
      })
    },
    handleClick (index = 0) { // 点击切换频道
      this.currentIndex = index
      // console.log(this.channelList[index].id)

      this.getChannelContentById(this.channelList[index].id)
    }
  },
  async  onPullDownRefresh () {
  // to doing..
  // 停止下拉刷新
    console.log('sss')

    wx.stopPullDownRefresh()
  },

  components: {
    swiper,
    videoList
  }
}
</script>

<style lang="stylus" scoped>
  .home
    .header
      position fixed
      top 0
      width 100%;
      height 170rpx
      z-index 999
      .tab
        height 100rpx
        background-color #fff        
        .nav_item
          display inline-block
          height 100rpx
          line-height 100rpx
          padding:0 20rpx 0 20rpx
          font-size 30rpx
          .active
            color #1296db
            border-bottom 6rpx solid #1296db
      .search_content
        display flex
        background-color #fff
        input 
          width 480rpx;
          height 60rpx;
          background-color #eee
          text-align center
          line-height 60rpx
          border-radius 100rpx
          font-size 28rpx
        .icon_content
          display flex
          width 216rpx
          justify-content space-around
          align-items center
          margin-left 20rpx
          img
            width 40rpx;
            height 40rpx;
    .tab_body_container
      margin-top 170rpx

</style>