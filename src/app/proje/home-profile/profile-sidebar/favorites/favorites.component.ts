import {Component, OnInit} from '@angular/core';
import {CheckboxService} from '../../../../demo/service/elementservice/checkbox.service';
import {FavoriteService} from '../../../../demo/service/favorite.service';
import {Form} from '../../../../demo/domain/form';

@Component({
    selector: 'app-favorites',
    templateUrl: './favorites.component.html',
    styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {


    constructor(private favoriteService: FavoriteService) {
    }

    ngOnInit(): void {
    }


}
