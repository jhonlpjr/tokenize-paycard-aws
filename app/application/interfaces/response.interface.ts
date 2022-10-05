export interface Response<T> {
    status: number;
    data: T | T[] | undefined | null;
    message: string;
}