import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-fac',
  templateUrl: './liste-fac.component.html',
  styleUrls: ['./liste-fac.component.css']
})
export class ListeFacComponent implements OnInit {



  public universites: any[] = [
    {
      id: 1,
      name: "ITBS",
      fraisInscription: 400,
      url: "https://itbs.tn/",
      lieu:"Av. Dali Jezi, 8062 Nabeul, Tunisie",
      tel:"99102302",
      image :"https://i0.wp.com/itbs.tn/hojoseq/2020/04/logo_itbs_134x50.png?fit=134%2C50&ssl=1",
    },

    {
      id: 2,
      name: "Polytechnique",
      fraisInscription: 500,
      url: "https://polytecsousse.tn/",
      lieu:"Kalaa Sghira 4021 – sousse Tunisie.",
      tel:"99200301",
      image :"https://media-exp1.licdn.com/dms/image/C560BAQGcaAd5wsMCuQ/company-logo_200_200/0/1555350793794?e=2159024400&v=beta&t=XkNuoJfr03N0KJK6fFbvVKesuGRJFKNqEnPMA_yOF_Q",
     
      
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


  deleteUniversite(universite: any): void
   {
    let indice = this.universites.indexOf(universite.name)
    this.universites.splice(indice, 1)
  }

}
