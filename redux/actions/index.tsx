import { createActions } from "redux-actions";
import { PropsData } from '../../types';

export const getType = (reduxAction:Function) => {
  return reduxAction().type;
};

/** Lấy dữ liêu sản phẩm và phân trang */
export const getSanPhams = createActions({
  getSanPhamsRequest: (payload: Object|any) => payload,
  getSanPhamsSuccess: (payload: Object|any) => payload,
  getSanPhamsFailure: (err: string) => err,
});
export const getSanPhamsSold = createActions({
  getSanPhamsSoldRequest: (payload: Object|any) => payload,
  getSanPhamsSoldSuccess: (payload: Object|any) => payload,
  getSanPhamsSoldFailure: (err: string) => err,
});
export const searchSanPhams = createActions({
  searchSanPhamsRequest: (payload: Object|any) => payload,
  searchSanPhamsSuccess: (payload: Object|any) => payload,
  searchSanPhamsFailure: (err: string) => err,
});
export const seasonSanPhams = createActions({
  seasonSanPhamsRequest: (payload: Object|any) => payload,
  seasonSanPhamsSuccess: (payload: Object|any) => payload,
  seasonSanPhamsFailure: (err: string) => err,
});
export const statusData = createActions({
  setStatusData: (payload: Object|any) => payload,
})
