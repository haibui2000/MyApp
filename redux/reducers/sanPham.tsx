import { INIT_STATE } from '../../constants/Values';
import { getType, getSanPhams, getSanPhamsSold, searchSanPhams, seasonSanPhams, statusData } from '../actions';

export default function SanPhamsReducers(state = INIT_STATE.sanPham, action: any) {
    switch (action.type) {
        // Tất cả sản phẩm
        case getType(getSanPhams.getSanPhamsRequest):
            return {
                ...state,
                nextPage: !action.payload?.pagenumber ? 0 : state.nextPage,
                isLoading: !action.payload?.pagenumber ? true : false,
            };
        case getType(getSanPhams.getSanPhamsSuccess):
            return {
                ...state,
                isLoading: false,
                nextPage: state.nextPage + 1,
                data$: !action.payload?.refreshing ? state.data$.concat(action.payload) : action.payload.rfData
            };
        case getType(getSanPhams.getSanPhamsFailure):
            return {
                ...state,
                isLoading: false,
            };
        // Sản phẩm bán chạy
        case getType(getSanPhamsSold.getSanPhamsSoldRequest):
            return {
                ...state,
                isLoading: !action.payload?.pagenumber ? true : false,
            };
        case getType(getSanPhamsSold.getSanPhamsSoldSuccess):
            return {
                ...state,
                isLoading: false,
                dataSold$: !action.payload?.refreshing ? state.dataSold$.concat(action.payload) : action.payload.rfData
            };
        case getType(getSanPhamsSold.getSanPhamsSoldFailure):
            return {
                ...state,
                isLoading: false,
            };
        // Tìm kiếm sản phẩm
        case getType(searchSanPhams.searchSanPhamsRequest):
            return {
                ...state,
                nextPage: !action.payload?.pagenumber ? 0 : state.nextPage,
                isLoading: !action.payload?.pagenumber ? true : false,
            };
        case getType(searchSanPhams.searchSanPhamsSuccess):
            return {
                ...state,
                isLoading: false,
                nextPage: state.nextPage + 1,
                data$: !action.payload?.refreshing ? state.data$.concat(action.payload) : action.payload.rfData
            };
        case getType(searchSanPhams.searchSanPhamsFailure):
            return {
                ...state,
                isLoading: false,
            };
        // Lấy sản phẩm theo mùa
        case getType(seasonSanPhams.seasonSanPhamsRequest):
            return {
                ...state,
                isLoading: !action.payload?.pagenumber ? true : false,
            };
        case getType(seasonSanPhams.seasonSanPhamsSuccess):
            return {
                ...state,
                isLoading: false,
                dataSeason$: !action.payload?.refreshing ? state.dataSeason$.concat(action.payload) : action.payload.rfData
            };
        case getType(seasonSanPhams.seasonSanPhamsFailure):
            return {
                ...state,
                isLoading: false,
            };
        // Cài đặt trạng thái 
        case getType(statusData.setStatusData):
            return {
                ...state,
                status: action.payload
            };

        default:
            return state;
    }
}
