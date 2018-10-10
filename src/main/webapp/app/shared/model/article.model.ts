export interface IArticle {
    id?: number;
    title?: string;
    message?: string;
}

export class Article implements IArticle {
    constructor(public id?: number, public title?: string, public message?: string) {}
}
