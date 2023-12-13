import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AlgorithmAprioriService } from 'src/app/services/algorithm-apriori.service';
import { AlgorithmCaminataService } from 'src/app/services/algorithm-caminata.service';
import { AlgorithmService } from 'src/app/services/algorithm-service.service';

@Component({
  selector: 'app-algorithm',
  templateUrl: './algorithm.component.html',
  styleUrls: ['./algorithm.component.scss'],
})
export class AlgorithmComponent implements OnInit {

  // --
  // Para algoritmo apriori 
  // --

  // Elementos
  elements = [
    ['leche', 'pan', 'huevos', 'jugo'],
    ['pan', 'huevos', 'café', 'arroz'],
    ['leche', 'azúcar', 'huevos'],
    ['manzana','leche', 'pan', 'huevos', 'jugo'],
    ['manzana','pan', 'huevos', 'café'],
    ['manzana','leche', 'azúcar', 'huevos'],
    ['manzana','arroz', 'pollo', 'pasta', 'salsa'],
    ['manzana', 'plátano', 'naranja', 'pera'],
    // Más productos...
  ];

  // Umbral mínimo de soporte
  minSupport = 0.5;
  
  
  resultData: string[] = [];

   
  
  constructor(private algorithmApriori: AlgorithmAprioriService, private algorithmCamina: AlgorithmCaminataService,private http:HttpClient, private algorithmService: AlgorithmService) {

    this.http.get('assets/data.json').subscribe(data => {
      this.elements = JSON.parse(data.toString());
       
      console.log(this.elements)
    });

  }

  ngOnInit(): void {}

  f_algorithm(algorithm: string) {
    switch (algorithm) {
      case 'apriori':

        this.resultData = this.algorithmApriori.findFrequentItemsets(this.elements, this.minSupport);

        // console.log( this.algorithmApriori.findFrequentItemsets(this.elements, this.minSupport));

        break;
      case 'camina':

 
        // console.log( this.algorithmCamina.f_caminataAleatoria(this.elements));
        break;


      case 'arbolDecisiones':
        this.algorithmService.f_ArbolDecisiones();
        break;
      default:
        break;
    }
  }
 
}
