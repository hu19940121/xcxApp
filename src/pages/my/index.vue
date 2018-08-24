<template>
	<div class="my">
		我的
    <button @click="login">登录</button>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        userInfo: ''
      }
    },
    created () {
  
    },
    methods: {
      login () {
        let cur = this
        wx.login({
          success: function (res) {
            console.log('ss')
  
            cur.http(cur.apis.xcxLogin, {code: res.code}).then(res => {
              console.log(res)
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>