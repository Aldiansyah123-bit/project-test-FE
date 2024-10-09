import Vue from "vue";
import Vuex from "vuex";
import poster from "./poster"

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
        poster
	},
});
