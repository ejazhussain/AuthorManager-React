
import { Author } from '../model';

export interface IAuthorAPI {
    getAllAuthors(): Promise<Author[]>;
    getAuthorById(itemId: string): Promise<Author>;
    saveAuthor(author: Author);
    removeAuthor(itemId:string);
    _clone(author:Author);
}