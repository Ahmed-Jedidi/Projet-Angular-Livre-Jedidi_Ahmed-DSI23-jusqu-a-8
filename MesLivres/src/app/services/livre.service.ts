import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//sevice
import { Livre } from '../model/livre.model';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  
  //service
  livres : Livre[]; //un tableau de Produit
  livre : Livre;

  constructor(/*Me again*/private http : HttpClient) {

    //service
    /*export class livre {
      idLivre : number;
      isbnLivre : number;
      titreLivre : string;
      auteurLivre : string;
      prixLivre : number;
      datePublication : Date ;}*/
      //model
      
    this.livres = [ 
      //1
      {idLivre : 1, 
        isbnLivre : 9788423991815,
        titreLivre : "The 48 Laws of Power ",
        auteurLivre : "Robert Greene",
        prixLivre : (26*3),
        datePublication : new Date("12/17/1998")},
      //2
      {idLivre : 2, 
        isbnLivre : 	1439167346,
        titreLivre : "How to win friends and influence people",
        auteurLivre : "Dale Carnegie",
        prixLivre : (8.02) *3,
        datePublication : new Date("10/11/1937")},
      //3
      {idLivre : 3, 
        isbnLivre : 9788423991815,
        titreLivre : "The life-changing Magic of Tidying",
        auteurLivre : "Mari Kondo",
        prixLivre : (15.040*3),
        datePublication : new Date("10/14/2014")}
      ];
   }

  

   //service
   ajouterLivre(liv: Livre){
     this.livres.push(liv);
   }



   supprimerLivre( liv: Livre){
    //supprimer le produit prod du tableau produits
    const index = this.livres.indexOf(liv, 0);
    if (index > -1) {
    this.livres.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }

 //service
 listeLivres():Livre[]{
  return this.livres; 
 }


 consulterLivre(id:number): Livre{
  this.livre = this.livres.find(p => p.idLivre == id);
  return this.livre;
  }


  trierLivres(){
    this.livres = this.livres.sort((n1,n2) => {
    if (n1.idLivre > n2.idLivre) {
    return 1;
    }
    if (n1.idLivre < n2.idLivre) {
    return -1;
    }
    return 0;
    });
    }

  updateLivre(livr:Livre)
  {
  // console.log(livr);
  this.supprimerLivre(livr);
  this.ajouterLivre(livr);
  this.trierLivres();
  }



 
}
