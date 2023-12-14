import { Component } from '@angular/core';
import { AlgorithmAprioriService } from '../../services/algorithm-apriori.service';
import { AlgorithmCaminataService } from '../../services/algorithm-caminata.service';
import { AlgorithmArbolService } from '../../services/algorithm-arbol.service';

import { elements } from '../../../assets/elements/data';

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
    'Se utiliza en la minería de datos, específicamente en bases de datos transaccionales, para encontrar de manera eficiente conjuntos de elementos frecuentes y reglas de asociación relevantes. El algoritmo implementado calcula el soporte de cada elemento y luego determina los conjuntos de elementos que superan un umbral de soporte mínimo, devolviendo una lista de los conjuntos de elementos frecuentes.';

  caminaInfo: string =
    'Este tipo de algoritmo se utiliza en diversos contextos, como la teoría de grafos, la optimización y el aprendizaje automático, para simular procesos estocásticos o explorar estructuras de datos de manera aleatoria. El algoritmo implementado simula un recorrido aleatorio a través de un grafo, donde en cada paso se elige aleatoriamente un vecino del nodo actual y se avanza al siguiente nodo.';
  arbolInfo: string =
    'Técnica ampliamente utilizada en machine learning para analizar situaciones complejas con múltiples posibilidades de decisión y seleccionar la mejor opción. Se utiliza para la clasificación y la toma de decisiones basadas en un conjunto de reglas de decisión inferidas de los datos.';

  title_algoritmo: string = '';

  // Elementos
  elements = elements;

  // -- Configuracion de algoritmos
  // --

  // Umbral mínimo de soporte para el algoritmo APRIORI
  minSupport = 0.3;

  // Pasos para el algoritmo Caminata
  pasos = 5;

  // Ejemplo de predicción
  prediccion = ['pan', 'hamburguesa', 'leche', 'azúcar', 'huevos'];

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

        if (this.resultData)
          this.title_algoritmo =
            'Según el umbral de soporte mínimo ' +
            this.minSupport +
            ' se puede determinar que la lista de los conjuntos de elementos frecuentes en el rango de compras realizadas es: ';

        console.log('APRIORI EJECUTADO! ');

        break;
      case 'camina':
        // console.log( this.algorithmCamina.f_caminataAleatoria(this.elements));
        this.algorithmCamina.f_construirGrafo(this.elements);
        this.resultData = this.algorithmCamina.f_caminataAleatoria(this.pasos);

        if (this.resultData)
          this.title_algoritmo =
            'Según ' +
            this.pasos +
            ' pasos a recorrer de manera no determinista se pudiera predecir que la lista de los conjuntos de productos con mayor tendencias de compra en el rango de compras realizadas es: ';
        console.log('CAMINANTE EJECUTADO! ');
        break;

      case 'arbolDecisiones':
        this.algorithmArbol.construirArbol(this.elements);

        this.resultData = this.algorithmArbol.predecir(this.prediccion);

        if (this.resultData) {
          let lista ="";
          for (let i = 0; i < this.prediccion.length; i++) {
            let product = this.prediccion[i];
            
            lista += ' | ' + product + ' ';
          }
          this.title_algoritmo =
            'Según la lista: ' +
            lista +
            ' se ha llegado a la conclusión de que podría ser de interés para el cliente: ';
        }

        console.log('ARBOL DECISIONES EJECUTADO! ');
        break;
      default:
        break;
    }
  }
}
