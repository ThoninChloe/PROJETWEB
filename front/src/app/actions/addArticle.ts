import { Article } from '../models/article'

export class AddArticle {
    static readonly type = '[Article] Add';

    constructor(public payload: Article) {}
    
}

