export class PagingObject<T> {

    href: string;

    items: Array<T>;

    limit: number;

    next: string;

    offset: number;

    previous: string;

    total: number;
}