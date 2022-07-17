import { PropsData } from '../../types';

export const dataSanPham$ = (state:
    {
        sanPham:
        {
            data$: Array<PropsData>,
            dataSold$: Array<PropsData>,
            dataSeason$: Array<PropsData>,
            isLoading: boolean,
            nextPage: number,
            status: string,
        }
    }) => state.sanPham;
;


