import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  bill!: any;
  constructor(
    private ar: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
