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
	  },
	  methods: {
    async getData () {
      let res = await this.http(this.apis.getChannelList, {})
      this.channelList = res.data.data
    }
  }
	}
</script>

<style scoped>

</style>