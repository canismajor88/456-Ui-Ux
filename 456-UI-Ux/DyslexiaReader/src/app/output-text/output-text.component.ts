import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-output-text',
  templateUrl: './output-text.component.html',
  styleUrls: ['./output-text.component.scss']
})
export class OutputTextComponent implements OnInit {

  description:string;

  constructor(
      @Inject(MAT_DIALOG_DATA) data: any) {

      this.description = data.text;
  }

  ngOnInit() {
  }

}
