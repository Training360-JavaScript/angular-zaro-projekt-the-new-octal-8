import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, switchMap} from "rxjs";
import {BillService} from "../../service/bill.service";
import {Bill} from "../../model/bill";

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.scss']
})
export class EditBillComponent implements OnInit {

  editedObject: Bill | undefined = undefined;
  edit: boolean = true;
  listOfStatusValues: string[] = ["new", "paid"];
  mainComponentRoute = "bills";

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private objectService: BillService
  ) {
    this.ar.params.pipe(
      switchMap(params => this.objectService.get(params['id']))
    ).subscribe(
      currentObject => {
        if (currentObject === null || currentObject === undefined || currentObject.id < 1) {
          this.edit = false;
          this.editedObject = new Bill();
        } else {
          this.editedObject = currentObject
        }
      }
    )
  }

  ngOnInit(): void {
  }

  onSend(editedObject: Bill) {
    const crudObservable: Observable<any> = this.edit ? this.objectService.update(editedObject) : this.objectService.create(editedObject);
    crudObservable.subscribe(
      result => {
        console.log(editedObject, result);
        this.router.navigate([this.mainComponentRoute])
      }
    )
  }
}
