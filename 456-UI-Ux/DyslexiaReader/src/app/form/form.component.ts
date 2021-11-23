import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OutputTextComponent } from '../output-text/output-text.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  textForm!: FormGroup;
  error = '';
  synth:any
  voices:any
  constructor(
    private formBuilder: FormBuilder, public dialog: MatDialog)   {
    this.synth= window.speechSynthesis;
      }
  getVoices(){
    if(this.synth.onvoiceschanged !== undefined){
      this.voices= this.synth.getVoices();
      this.synth.onvoiceschanged =this.voices
    }
  }

  speak(){
    this.getVoices()
    this.synth.cancel()
    if(this.textForm.value==""){
      //nothing to say
      return;
    }
    let speakText= new SpeechSynthesisUtterance(this.textForm.value.text);
    let voice= this.voices[0]
    speakText.voice=voice
    speakText.rate=1;
    speakText.pitch=1;
    this.synth.speak(speakText)
  }

  ngOnInit(): void {
    this.textForm = this.formBuilder.group({
      text: ['']
    });
    this.onChanges();
  }

  onChanges(): void {
    this.textForm.valueChanges.subscribe(() => {
      this.error ? this.error = '' : null;
    })
  }

  onSubmit(): void {
    this.openDialog();
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      text: this.text?.value
  };

    this.dialog.open(OutputTextComponent, dialogConfig);

  }
  pause(){
    this.synth.pause()
  }

  get text() {
    return this.textForm.get('text');
  }

}
