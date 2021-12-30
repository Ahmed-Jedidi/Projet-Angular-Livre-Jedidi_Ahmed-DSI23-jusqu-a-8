
import { Component, OnInit } from '@angular/core';

//Data Binding From VIEW To MODULE
import { Livre } from '../model/livre.model';

//service
import { LivreService } from '../services/livre.service';

//
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css']
})
export class AddLivreComponent implements OnInit {

//Data Binding From VIEW To MODULE
  newLivre = new Livre();
  message : string;

  /*service*/
  constructor(private livreService: LivreService,
              private router: Router
              ) { }




  ngOnInit(): void {
  }

  //Data Binding From VIEW To MODULE
  addLivre(){
    //console.log(this.newLivre);
    //service
    
    this.livreService.ajouterLivre(this.newLivre);
  



    //this.message = "Livre " + this.newLivre.titreLivre + " ajouté avec succès !";

    //Me again reload
    this.router.navigate(['livres'])/*.then(() => {
      window.location.reload();
      })*/;
    }



}
