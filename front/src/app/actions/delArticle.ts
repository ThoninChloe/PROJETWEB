import { Article } from '../models/article'

export class DelArticle {
    static readonly type = '[Article] Del';

    constructor(public payload: Article) {}
    
}

