const BASE_URL = "http://localhost:5000/";

export const apiRequest = (options) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + options.url,
			method: options.methods || "GET",
			data: options.data || {},
			dataType: options.dataType || "application/json",
			success: (res) => {
				if (res.statusCode !== 200) {
					return uni.showToast({
						title: "获取数据失败"
					})
				}
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title: "接口请求失败"
				})
				reject(err)
			}
		})
	})
}
