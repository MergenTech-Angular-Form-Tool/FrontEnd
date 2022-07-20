import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {SharedDataService} from '../../demo/service/sharedataservice';
import {CollapsedRightBarService} from '../../demo/service/collapsedRightBarService';

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
    collapsed: boolean;
    screenWidth = 0;
    id: string;
    enum: string;

    constructor(private shareDateService: SharedDataService, private collapsedRightBarService: CollapsedRightBarService) {
        shareDateService.currentMessage.subscribe(message => this.id = message);
        collapsedRightBarService.currentMessage.subscribe(message => this.collapsed = message);
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

        let quit = false;

        if (!this.collapsed) {
            this.shareDateService.currentMessage.subscribe(message => {
                    if (message.length === 0 || message === ' _ ') {
                        quit = true;
                    } else {
                        this.enum = message.split('_')[0];
                        this.id = message.split('_')[1];
                    }
                }
            );
        }
        if (!quit) {
            this.collapsed = !this.collapsed;
            this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
        }
    }

    closeSidenav(): void {
        this.collapsed = false;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

}
