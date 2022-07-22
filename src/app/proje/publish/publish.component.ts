import {Component, ComponentFactoryResolver, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit {

    @Input() entry: any;
    state: { id: number } = {
        id: 0
    };

    public comp: string;
    constructor(private resolver: ComponentFactoryResolver) {
    }

    ngOnInit(): void {
        this.comp = 'Share';
    }


    showComponent(comp: string) {
        this.comp = comp;

    }
}

