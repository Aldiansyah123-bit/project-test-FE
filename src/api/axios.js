import Vue from "vue";

// axios
import axios from "axios";

const axiosIns = axios.create({
	// You can add your headers here
	// ================================
	baseURL: `${process.env.VUE_APP_API_URL}/api`,
	// timeout: 1000,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
		"Content-Type": "application/json",
	},
});

axiosIns.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		if (error.response.status == 401) {
		}
		console.log(`error : ${error.response.status}`);
		return Promise.reject(error);
	}
);

Vue.prototype.$http = axiosIns;

export default axiosIns;
