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
	    getData () {
	      this.http(this.apis.getChannelList, {}).then(res => {
	        this.channelList = res.data.data
	      })
	    }
	  }
	}
</script>

<style scoped>

</style>