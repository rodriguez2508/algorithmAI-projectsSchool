import { Component } from '@angular/core';
import { AlgorithmAprioriService } from '../../services/algorithm-apriori.service';
import { AlgorithmCaminataService } from '../../services/algorithm-caminata.service';
import { AlgorithmArbolService } from '../../services/algorithm-arbol.service';

import { elements } from '../../../assets/elements/data'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  // -- Info
  aprioriInfo: string =
    'Se utiliza en la minería de datos, específicamente en bases de datos transaccionales, para encontrar de manera eficiente conjuntos de elementos frecuentes y reglas de asociación relevantes.';
  caminaInfo: string =
    'Se aplica en la simulación de procesos de toma de decisiones y en la resolución de problemas de optimización. Consiste en un proceso que, a partir de un punto inicial, avanza hacia diferentes nodos o puntos en un grafo, de forma aleatoria siguiendo ciertas reglas, hasta cumplir ciertas condiciones de parada.';
  arbolInfo: string =
    'Técnica ampliamente utilizada en machine learning para analizar situaciones complejas con múltiples posibilidades de decisión y seleccionar la mejor opción. Se utiliza para la clasificación y la toma de decisiones basadas en un conjunto de reglas de decisión inferidas de los datos.';
 
  // Elementos
  elements = elements;
   

  // -- Configuracion de algoritmos
  // --

  // Umbral mínimo de soporte para el algoritmo APRIORI
  minSupport = 0.2;

  // Pasos para el algoritmo Caminata
  pasos = 10;

  
    // Ejemplo de predicción
  prediccion = ['frijoles', 'arroz', 'plátano', 'queso', 'pan'];

  //  Resultado a mostrar
  resultData: string[] = [];

  constructor(
    private algorithmApriori: AlgorithmAprioriService,
    private algorithmCamina: AlgorithmCaminataService,
    private algorithmArbol: AlgorithmArbolService
  ) {}

  ngOnInit() {}

  f_algorithm(algorithm: string) {
    switch (algorithm) {
      case 'apriori':
        this.resultData = this.algorithmApriori.findFrequentItemsets(
          this.elements,
          this.minSupport
        );

        console.log('APRIORI EJECUTADO! ');

        break;
      case 'camina':
        // console.log( this.algorithmCamina.f_caminataAleatoria(this.elements));
        this.algorithmCamina.f_construirGrafo(this.elements);
        this.resultData = this.algorithmCamina.f_caminataAleatoria(this.pasos);
        console.log('CAMINANTE EJECUTADO! ');
        break;

      case 'arbolDecisiones':
        this.algorithmArbol.construirArbol(this.elements);
        // this.algorithmCamina.f_construirGrafo(this.elements);

        // Ejemplo de predicción 
        // let _prediccion:string[] = this.algorithmCamina.f_caminataAleatoria(2);
        this.resultData = this.algorithmArbol.predecir(this.prediccion); 
        console.log('ARBOL DECISIONES EJECUTADO! ');
        break;
      default:
        break;
    }
  }
}
