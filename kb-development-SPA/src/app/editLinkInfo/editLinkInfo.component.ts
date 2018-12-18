import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editlinkinfo',
  templateUrl: './editLinkInfo.component.html',
  styleUrls: ['./editLinkInfo.component.css']
})
export class EditLinkInfoComponent implements OnInit {

  linkInfoForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.createLinkInfoForm();
  }

  createLinkInfoForm() {

    this.linkInfoForm = this._fb.group({
      title: ['', Validators.required],
      urlSite: ['', Validators.required],
      description: ['']
    });
  }

  addLinkInfo() {
    console.log('saving link info...');
  }


}

// tags?
