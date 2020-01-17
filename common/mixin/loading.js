export default {
	data() {
		return {
			beforeReady: true
		}
	},
	onReady() {
		setTimeout(()=> {
			this.beforeReady = false
		}, 500)
	}
}