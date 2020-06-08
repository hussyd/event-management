import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-reusable-form',
  templateUrl: './reusable-form.component.html',
  styleUrls: ['./reusable-form.component.scss']
})
export class ReusableFormComponent implements OnInit {
  @Input()
  set activeEvent(event: CalendarEvent) {
    this.myForm.patchValue(event);
  }

  @Output()
  action: EventEmitter<{ actionType: 'add' | 'update', value: CalendarEvent }>


  myForm: FormGroup = new FormGroup({
    title: new FormControl('', {
      updateOn: 'blur'
    }),
    start: new FormControl('', {
      updateOn: 'blur'
    }),
    end: new FormControl('', {
      updateOn: 'blur'
    }),
    allDay: new FormControl('', {
      updateOn: 'blur'
    }),
    meta: new FormControl('', {
      updateOn: 'blur'
    })
  });


  constructor() { }

  ngOnInit(): void {

  }

  public add(): void {
    // this.action.emit({ actionType: 'add', value: this.myForm.getRawValue() })
    console.log(this.myForm.getRawValue() as CalendarEvent);
  }

  public reset(): void {
    this.myForm.reset();
  }

  public update(): void {

  }

}
