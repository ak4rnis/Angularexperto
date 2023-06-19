import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator} from "@angular/forms";

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null]
    })
  }
  onPathValue():void{
    this.form.patchValue({input: 'vaxi drez'});

  }

  onSubmit():void{
    console.log('Presiono boton submit');
  }

}
