import axios from "axios";
/**const IP = '192.168.1.9'
const PORT = '8080'
export const URL = `http://${IP}:${PORT}`; */
export const URL = `https://server-demo-native.herokuapp.com`;

export const fetchDataSanPham = (payload: {
    pagenumber: number
}) =>
    axios.get(`${URL}/sanpham?pagenumber=${payload.pagenumber}&perPage=10`);
export const fetchDataSPBestSeller = (payload: {
    pagenumber: number,
    perPage: number
}) =>
    axios.get(`${URL}/sanpham/sold?pagenumber=${payload.pagenumber}&perPage=${payload.perPage}`);
export const fetchSearchSP = (payload: {
    pagenumber: number,
    perPage: number,
    searchText: string
}) =>
    axios.get(`${URL}/sanpham/search?pagenumber=${payload.pagenumber}&perPage=${payload.perPage}&searchText=${payload.searchText}`);

export const fetchSeasonData = (payload: {
    pagenumber: number,
    perPage: number,
}) =>
    axios.get(`${URL}/sanpham/season?pagenumber=${payload.pagenumber}&perPage=${payload.perPage}`);
