import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {SharedDataService} from '../../demo/service/sharedataservice';

interface SidenavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'app-rightbar',
    templateUrl: './rightbar.component.html',
    styleUrls: ['./rightbar.component.scss']
})
export class RightbarComponent implements OnInit {

    @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
    collapsed = false;
    screenWidth = 0;
    questionText = '';
    id: string;
    enum: string;

    constructor(private shareDateService: SharedDataService) {

        shareDateService.currentMessage.subscribe(message => this.id = message);

    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.collapsed = false;
            this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
        }
    }

    toggleCollapsed(): void {
        if (this.collapsed) {

        }

        this.collapsed = !this.collapsed;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
        console.log(this.id);
        this.enum = this.id.split('_')[0];
        this.id = this.id.split('_')[1];

    }

    closeSidenav(): void {
        this.collapsed = false;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

    alert(q: HTMLInputElement) {
        console.log(this.questionText);
        alert(this.questionText);
    }
}
