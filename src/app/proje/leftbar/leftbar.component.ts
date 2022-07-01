import {Component, OnInit, Output, EventEmitter, HostListener, Input} from '@angular/core';
import {FormElement} from '../../demo/domain/formElement';
import {FormElementService} from '../../demo/service/formElementService';

interface SidenavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
    selector: 'app-leftbar',
    templateUrl: './leftbar.component.html',
    styleUrls: ['./leftbar.component.scss']
})

export class LeftbarComponent implements OnInit {

    @Output() onToggleSidenav: EventEmitter<SidenavToggle> = new EventEmitter();
    collapsed = false;
    screenWidth = 0;
    @Input() selectedElements: FormElement[];
    @Input() dragStart: (args: FormElement) => void;
    @Input() dragStop: () => void;
    formElements: FormElement[];

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.collapsed = false;
            this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
        }
    }

    toggleCollapsed(): void {
        this.collapsed = !this.collapsed;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

    closeSidenav(): void {
        this.collapsed = false;
        this.onToggleSidenav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

    constructor(private formElementService: FormElementService) {
    }

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
        this.selectedElements = [];
        this.formElementService.getElements().then(elements => this.formElements = elements);
    }
}
