<template>
	<div class="swith-box"><switch :checked="value" @change="switchChange" /></div>
</template>

<script>
export default {
	props: ['value'],
	methods: {
		switchChange(e) {
			this.$emit('input', e.target.value);
		}
	}
};
</script>

<style lang="stylus">
.swith-box
	padding 6px 10px
	display flex
	align-items center
	switch
		zoom 0.7
</style>
