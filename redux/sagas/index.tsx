import { takeLatest, call, put } from "redux-saga/effects";
import {getSanPhams, getSanPhamsSold, searchSanPhams, seasonSanPhams} from "../actions";
import * as api from "../../api";

function* fetchSanPhamSaga(action: { payload: { pagenumber: number, refreshing: boolean; }; }) {
  try {
    const value: { data: {dataSP: Object} } = yield call( api.fetchDataSanPham, action.payload);
    yield put(getSanPhams.getSanPhamsSuccess(action.payload.refreshing?{refreshing: true, rfData: value.data.dataSP}:value.data.dataSP))
  } catch (error) {
    console.error("[fetchSanPhamSagaError] ", error);
  }
}

function* fetchSanPhamSoldSaga(action: { payload: { pagenumber: number, perPage: number, refreshing: boolean; }; }) {
  try {
    const value: { data: {dataSP: Object} } = yield call( api.fetchDataSPBestSeller, action.payload);
    yield put(getSanPhamsSold.getSanPhamsSoldSuccess(action.payload.refreshing?{refreshing: true, rfData: value.data.dataSP}:value.data.dataSP))
  } catch (error) {
    console.error("[fetchSanPhamSoldSagaError] ", error);
  }
}

function* fetchSearchSaga(action: { payload: { pagenumber: number, perPage: number, searchText: string, refreshing: boolean; }; }) {
  try {
    const value: { data: {dataSP: Object} } = yield call( api.fetchSearchSP, action.payload);
    yield put(searchSanPhams.searchSanPhamsSuccess(action.payload.refreshing?{refreshing: true, rfData: value.data.dataSP}:value.data.dataSP))
  } catch (error) {
    console.error("[fetchSearchSagaError] ", error);
  }
}

function* fetchSeasonSaga(action: { payload: { pagenumber: number, perPage: number, searchText: string, refreshing: boolean; }; }) {
  try {
    const value: { data: {dataSP: Object} } = yield call( api.fetchSeasonData, action.payload);
    yield put(seasonSanPhams.seasonSanPhamsSuccess(action.payload.refreshing?{refreshing: true, rfData: value.data.dataSP}:value.data.dataSP))
  } catch (error) {
    console.error("[fetchSeasonSagaError] ", error);
  }
}

function* mySaga() {
  yield takeLatest(getSanPhams.getSanPhamsRequest, fetchSanPhamSaga);
  yield takeLatest(getSanPhamsSold.getSanPhamsSoldRequest, fetchSanPhamSoldSaga);
  yield takeLatest(searchSanPhams.searchSanPhamsRequest, fetchSearchSaga);
  yield takeLatest(seasonSanPhams.seasonSanPhamsRequest, fetchSeasonSaga);
}

export default mySaga;
