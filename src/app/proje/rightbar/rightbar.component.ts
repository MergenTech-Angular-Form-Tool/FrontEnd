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

        if (!this.collapsed) {
            this.shareDateService.currentMessage.subscribe(message => {
                    this.enum = message.split('_')[0];
                    this.id = message.split('_')[1];
                }
            );
        }

        this.collapsed = !this.collapsed;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
        this.shareDateService.currentMessage.subscribe(message => this.id = message);

    }

    closeSidenav(): void {
        this.collapsed = false;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

}
