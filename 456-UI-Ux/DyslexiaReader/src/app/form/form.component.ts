import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OutputTextComponent } from '../output-text/output-text.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  textForm!: FormGroup;
  formFilled: boolean = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.textForm = this.formBuilder.group({
      text: ['', [
        Validators.required,
      ]]
    });
    this.onChanges();
  }

  onChanges(): void {
    this.textForm.valueChanges.subscribe(() => {
      this.error ? this.error = '' : null;
    })
  }

  onSubmit(): void {
    console.log("Working");
    this.formFilled = !this.formFilled;
  }

  openDialog() {
    this.dialog.open(OutputTextComponent);
  }

}
