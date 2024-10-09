import axiosIns from "@/api/axios";

export const GET_DATA = (args) => {
  return axiosIns.get("/poster", args);
};

export const ADD_DATA = (args) => {
  return axiosIns.post("/poster", args);
};

export const UPDATE_DATA = (args) => {
  return axiosIns.put(`/poster?id=${args.id}`, args.data);
};

export const DETAIL_DATA = (args) => {
  return axiosIns.put(`/poster?id=${args.id}`);
};

export const DELETE_DATA = (id) => {
  return axiosIns.delete(`/poster?id=${id}`);
};
