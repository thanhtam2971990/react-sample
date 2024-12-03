
export interface PaginationParams {
    _limit: number;
    _page: number;
    _total: number;
}

export interface ListResponse<T> {
    data: T[];
    paganation: PaginationParams;
}

export interface ListParams {
    _limit: number;
    _page: number;
    _sort: string;
    _order: 'desc' | 'asc';
    [key: string] : any
}