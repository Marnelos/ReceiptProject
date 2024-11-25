import { Component, EventEmitter, Input, OnInit, Output, Signal } from '@angular/core';
import { receiptLine } from '../../receiptLineInterface';
import { ListingInputComponent } from "../listing-input/listing-input.component";
import { IHistory } from '../../historyInterface';
import { IdentityService } from '../../identity.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'history-popup',
  standalone: true,
  imports: [ListingInputComponent, CommonModule],
  templateUrl: './history-pop-up.component.html',
  styleUrl: './history-pop-up.component.css'
})
export class HistoryPopupComponent {

  @Input({
    required: true,
  }) itemList!: receiptLine[];
  
  @Input({
    required: false,
  }) paid_total!: number;
  
  formatter = new Intl.NumberFormat('default', {
    style: 'currency',
    currency: 'EUR',
  });
}