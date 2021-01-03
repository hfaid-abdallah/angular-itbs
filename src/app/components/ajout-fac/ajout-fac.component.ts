import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajout-fac',
  templateUrl: './ajout-fac.component.html',
  styleUrls: ['./ajout-fac.component.css']
})
export class AjoutFacComponent implements OnInit {

  public universityForm:FormGroup
  constructor(fb:FormBuilder,private http:HttpClient,private router:Router) { 
    let universityControls ={
      name:new FormControl("", [
        Validators.required
      ]),
      image:new FormControl("", [
        Validators.required
      ]),
      url:new FormControl("", [
        Validators.required
      ]),
      lieu:new FormControl("", [
        Validators.required
      ]),
      fraisInscription:new FormControl("", [
        Validators.required
      ])
    }
    this.universityForm=fb.group(universityControls)
  }
  ngOnInit(): void {
  }

}
