<template>
	<div class="home">
		首页
		<div v-for="(item,index) in channelList" :key="index">
			{{item.name}}
		</div>
	</div>
</template>

<script>
export default {
  data () {
    return {
      channelList: []
    }
  },
  created () {
    this.getData()
    this.getUserInfo()
  },
  methods: {
    async getData () {
      let res = await this.http(this.apis.getChannelList, {})
      this.channelList = res.data.data
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: (res) => {
          console.log(res)

          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>