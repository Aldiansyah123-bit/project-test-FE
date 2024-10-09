import {
    ADD_DATA,
    DELETE_DATA,
    GET_DATA,
    UPDATE_DATA,
  } from "@/api/poster";

  import querystring from "query-string";
  
  const state = {
    list: [],
  };
  
  const mutations = {
    SET_LIST: (state, payload) => {
      state.list = payload;
    },
  };
  
  const actions = {
    GET_LIST: async ({ commit }, params) => {
      params = querystring.stringify(params);
      const resp = await GET_DATA(params);
      const data = resp.data.data;
      commit("SET_LIST", data);
    },
  
    CREATE_DATA: async ( args) => {
      return await ADD_DATA(args);
    },
    
    UPDATE_DATA: async ( args) => {
      return await UPDATE_DATA(args);
    },
  
    DELETE_DATA: async ( id) => {
      return await DELETE_DATA(id);
    },
  };
  
  const getters = {
    list: (state) => state.list,
  };
  
  export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
  };
