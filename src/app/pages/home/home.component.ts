import { Component } from '@angular/core';
import { AlgorithmAprioriService } from '../../services/algorithm-apriori.service';
import { AlgorithmCaminataService } from '../../services/algorithm-caminata.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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

   
  
  constructor(private algorithmApriori: AlgorithmAprioriService, private algorithmCamina: AlgorithmCaminataService) {

    // this.http.get('assets/data.json').subscribe(data => {
    //   this.elements = JSON.parse(data.toString());
       
    //   console.log(this.elements)
    // });

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
        // this.algorithmService.f_ArbolDecisiones();
        break;
      default:
        break;
    }
  }
  
}
