import { Injectable } from '@angular/core';
import {Form} from '../domain/form';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

    form: Form[] = [];
    formName: string;
    favorites: Form[];


    constructor() { }

    addFavorites(form: Form ){
        this.form.push(form);
    }
    pushToFavorites(favorites: Form[], form: Form[], index: number) {
        favorites.push(form[index]);
        this.favorites = favorites;
    }

}


