<template>
	<div class="my">
    <div class="myInfo">
      <div class="avator">
        <img v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" alt="">
        <img v-else src="../../../static/images/defaultAvator.jpeg" >
      </div>
      <div class="nickName">
        <span v-if="userInfo.nickName">
          {{userInfo.nickName}}
        </span>
        <span v-else>
          未登录
        </span>
      </div>
    </div>

    <button 
    v-show="showBtn"
    open-type="getUserInfo" 
    @getuserinfo="onGotUserInfo"
   >登录</button>
    
   <!-- <div class="NickName">
     {{userInfo.nickName}}
   </div> -->
	</div>
</template>

<script>
  export default {
    data () {
      return {
        userInfo: {},
        showBtn: true
      }
    },
    created () {

    },
    onShow () {
      let userInfo = wx.getStorageSync('userInfo')
      if (userInfo) {
        this.userInfo = userInfo
        this.showBtn = false
      } else {
        this.showBtn = true
      }
    },
    methods: {
      onGotUserInfo: function (e) {
        if (e.mp.detail.userInfo) {
          this.login()
        } else {
          wx.showToast({
            title: '您拒绝了授权'
          })
        }
      },
      // 用户授权后调用login方法
      login () {
        wx.showLoading({
          title: '登录中'
        })
        let cur = this
        wx.login({
          success: function (res) {
            let code = res.code
            wx.getUserInfo({
              success: function (res) {
                let params = {
                  userInfo: res.userInfo,
                  code: code
                }
                cur.http(cur.apis.xcxLogin, params).then(res => {
                  wx.hideLoading()
                  if (res.data.data) {
                    cur.userInfo = res.data.data
                    wx.setStorageSync('userInfo', res.data.data)
                    cur.showBtn = false
                  }
                })
              }
            })
          }
        })
      }
  
    }
  }
</script>

<style scoped>
  .my{
    text-align: center
  }
  .my .myInfo{
    margin-top:50px;
  }
  .my .avator{
    width: 60px;
    height: 60px;
    margin:0 auto;
  }
  .my .avator img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .my .nickName{ 
    margin-top: 10px;
  }
  .my button{
    margin-top: 40rpx;
    width: 213rpx;
    height: 57rpx;
    color:#fff;
    text-align: center;
    line-height: 57rpx;
    font-size: 24rpx;
    background-color: green;
  }
</style>