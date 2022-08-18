import { Component, OnInit } from '@angular/core';
import {CheckboxService} from '../../../../demo/service/elementservice/checkbox.service';
import {Denemecheckbox} from '../../../../demo/domain/elements/denemecheckbox';
import {LeftbarComponent} from '../../../leftbar/leftbar.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {


  constructor(private checkboxService: CheckboxService, private leftbarcomp: LeftbarComponent) { }
    checkboxList: Denemecheckbox[];
    checkbox: Denemecheckbox;


  ngOnInit(): void {
  }
  //
  //   GetAll() {
  //       this.checkboxService.GetAll().subscribe((response: Denemecheckbox[]) => this.checkboxList = response);
  //   }
  // //
  // // public addelement(elementname) {
  // //     this.leftbarcomp.add(elementname);
  // // }
  // //   PostAdd(id: HTMLInputElement, question: HTMLInputElement,
  // //           sequenceNumberForLocation: HTMLInputElement,
  // //           formId: HTMLInputElement,
  // //           createTimestamp: HTMLInputElement,
  // //           updateTimestamp: HTMLInputElement,
  // //           required: HTMLInputElement,
  // //           selected: HTMLInputElement) {
  // //       alert(id.value + ' ' + question.value + ' ' + sequenceNumberForLocation.value);
  // //
  // //       const postCheckbox: {
  // //           id: number;
  // //           question: string;
  // //           sequenceNumberForLocation: number;
  // //           formId: number;
  // //           createTimestamp: string;
  // //           updateTimestamp: string;
  // //           required: string;
  // //           selected: string;
  // //       } = {
  // //           id : Number(id.value),
  // //           question: question.value,
  // //           sequenceNumberForLocation: Number(sequenceNumberForLocation.value),
  // //           formId: Number(formId.value),
  // //           createTimestamp: createTimestamp.value,
  // //           updateTimestamp: updateTimestamp.value,
  // //           required: required.value,
  // //           selected: selected.value
  // //       };
  // //
  // //       this.checkboxService.PostAdd(postCheckbox).subscribe((response: Denemecheckbox) => {
  // //           if (response) {
  // //               this.checkboxList.unshift(response);
  // //               this.checkbox = response;
  // //           }
  // //       });
  // //   }
  //
  //   Remove(id: number) {
  //       this.checkboxService.Remove(id).subscribe(response => {
  //           alert(response);
  //           this.GetAll();
  //       });
  //   }
  //
  //   PutUpdate(id: HTMLInputElement, question: HTMLInputElement,
  //             sequenceNumberForLocation: HTMLInputElement,
  //             formId: HTMLInputElement,
  //             createTimestamp: HTMLInputElement,
  //             updateTimestamp: HTMLInputElement,
  //             required: HTMLInputElement,
  //             selected: HTMLInputElement) {
  //
  //       const updateCheckbox: Denemecheckbox = {
  //           id : Number(id.value),
  //           question: question.value,
  //           sequenceNumberForLocation: Number(sequenceNumberForLocation.value),
  //           formId: Number(formId.value),
  //           createTimestamp: createTimestamp.value,
  //           updateTimestamp: updateTimestamp.value,
  //           required: required.value,
  //           selected: selected.value
  //       };
  //       this.checkboxService.PutUpdate(updateCheckbox).subscribe((response: Denemecheckbox) => {
  //           if (response) {
  //               this.GetAll();
  //               this.checkbox = response;
  //           }
  //       });
  //   }
}
