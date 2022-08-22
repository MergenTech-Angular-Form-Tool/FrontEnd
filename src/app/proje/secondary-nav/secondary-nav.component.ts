import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {FormService} from '../../demo/service/form.service';
import {Form} from '../../demo/domain/form';

@Component({
    selector: 'app-secondary-nav',
    templateUrl: './secondary-nav.component.html',
    styleUrls: ['./secondary-nav.component.scss']
})
export class SecondaryNavComponent implements OnInit {

    clicked = '';
    preview: boolean;
    items: MenuItem[];
    formList: Form;

    constructor(private formservice: FormService) {
    }

    ngOnInit(): void {
        this.items = [
            {
                icon: 'pi pi-mobile', command: () => {
                    this.showMobile();
                }
            },
            {
                icon: 'pi pi-desktop', command: () => {
                    this.showDesktop();
                }
            },
            {
                icon: 'pi pi-tablet', command: () => {
                    this.showTablet();
                }
            }
        ];
    }

    showPreview() {

        const bars = document.getElementById('bars');
        const cog = document.getElementsByClassName('buttons-cog');
        const clr = document.getElementsByClassName('buttons-clr');
        const center = document.getElementById('center');
        const clrBtn = document.getElementById('clear-button');

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

    changePreview() {
        this.preview = !this.preview;
    }


    addForm() {
        this.formList = {
            formName : this.formservice.formName,
        };
        console.log(this.formList);
        this.formservice.PostAdd(this.formList).subscribe((response: any) => {
            console.log(response);
        });
    }

    showMobile() {

        const mobile = document.getElementById('container');

        if (mobile.classList.contains('tablet')) {
            mobile.classList.remove('tablet');
            mobile.classList.add('mobile');
        }

        if (this.preview) {
            mobile.classList.remove('tablet');
            mobile.classList.add('mobile');
            this.showPreview();
        }

        // üstüne 2. kez basıldığında kapatılacak
        if (this.clicked === 'mobile') {
            mobile.classList.remove('mobile');
            this.showPreview();
        } else {
            // en son tıklananı kaydet
            this.clicked = 'mobile';
        }

    }

    showTablet() {

        const tablet = document.getElementById('container');

        if (tablet.classList.contains('mobile')) {
            tablet.classList.remove('mobile');
            tablet.classList.add('tablet');
        }

        if (this.preview) {
            tablet.classList.remove('mobile');
            tablet.classList.add('tablet');
            this.showPreview();
        }

        // üstüne 2. kez basıldığında kapatılacak
        if (this.clicked === 'tablet') {
            tablet.classList.remove('tablet');
            this.showPreview();
        } else {
            // en son tıklananı kaydet
            this.clicked = 'tablet';
        }

    }

    showDesktop() {
        const desktop = document.getElementById('container');
        desktop.classList.remove('tablet');
        desktop.classList.remove('mobile');

        // üstüne 2. kez basıldığında kapatılacak
        if (this.clicked === 'desktop') {
            this.showPreview();
        }
        this.clicked = 'desktop';
    }
}
