import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-secondary-nav',
    templateUrl: './secondary-nav.component.html',
    styleUrls: ['./secondary-nav.component.scss']
})
export class SecondaryNavComponent implements OnInit {
    preview: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }

    showPreview() {
        const bars = document.getElementById('bars');
        const cog = document.getElementsByClassName('buttons-cog');
        const clr = document.getElementsByClassName('buttons-clr');
        const center = document.getElementById('center');
        const clrBtn = document.getElementById('clear-button');
        console.log(clrBtn);
        if (this.preview) {
            bars.style.display = 'none';

            for (let i = 0; i < cog.length; i++) {
                cog[i].classList.add('d-none');
                clr[i].classList.add('d-none');
            }

            for (let i = 2; i < center.children.length; i++) {
                const child = center.children[i].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
                child.classList.remove('handle-container');
            }
            clrBtn.classList.remove('d-flex');
            clrBtn.classList.add('d-none');

        } else {
            bars.style.display = 'block';

            for (let i = 0; i < cog.length; i++) {
                cog[i].classList.remove('d-none');
                clr[i].classList.remove('d-none');
            }

            for (let i = 2; i < center.children.length; i++) {
                const child = center.children[i].firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;
                child.classList.add('handle-container');
            }
            clrBtn.classList.remove('d-none');
            clrBtn.classList.add('d-flex');

        }
    }
}
