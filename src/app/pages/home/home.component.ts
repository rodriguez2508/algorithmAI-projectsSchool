import { Component } from '@angular/core';
import { AlgorithmAprioriService } from '../../services/algorithm-apriori.service';
import { AlgorithmCaminataService } from '../../services/algorithm-caminata.service';
import { AlgorithmArbolService } from '../../services/algorithm-arbol.service';

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
  elements = [
    ['leche', 'pan', 'huevos', 'jugo'],
    ['pan', 'huevos', 'café', 'arroz'],
    ['hamburguesa', 'leche', 'azúcar', 'huevos'],
    ['manzana', 'leche', 'pan', 'huevos', 'jugo'],
    ['manzana', 'pan', 'huevos', 'café'],
    ['manzana', 'leche', 'azúcar', 'huevos'],
    ['hamburguesa', 'manzana', 'arroz', 'pollo', 'pasta', 'salsa'],
    ['manzana', 'plátano', 'naranja', 'pera'],
    ['hamburguesa', 'pasta', 'tomate', 'queso', 'espinacas'],
    ['carne', 'pimienta', 'sal', 'cebolla'],
    ['yogur', 'frutilla', 'avena', 'miel'],
    ['pan', 'jamón', 'queso', 'tomate'],
    ['papa', 'zanahoria', 'brócoli', 'coliflor'],
    ['atún', 'arroz', 'leche', 'azúcar', 'huevo', 'maíz'],
    ['hamburguesa', 'lechuga', 'tomate', 'pepino', 'aceitunas'],
    ['manzana', 'pera', 'durazno', 'uva'],
    ['pollo', 'papas', 'zanahoria', 'cebolla', 'pan'],
    ['fideos', 'leche', 'azúcar', 'salsa', 'albahaca', 'queso'],
    ['helado', 'chocolate', 'nuez', 'caramelo'],
    ['hamburguesa', 'agua', 'limón', 'azúcar', 'hielo', 'pan'],
    ['café', 'leche', 'azúcar', 'canela'],
    ['naranja', 'zanahoria', 'jengibre', 'limón'],
    ['arroz', 'frijoles', 'plátano', 'queso'],
    ['yogur', 'frutilla', 'avena', 'miel'],
    ['pescado', 'limón', 'sal', 'pimienta'],
    ['brócoli', 'leche', 'azúcar', 'coliflor', 'zanahoria', 'papas'],
    ['avena', 'leche', 'miel', 'almendras', 'pan'],
    ['hamburguesa', 'sandía', 'melón', 'fresa', 'kiwi'],
    ['hamburguesa', 'pan', 'lechuga', 'tomate'],
    ['yogur', 'frutilla', 'avena', 'miel'],
    ['pavo', 'pan', 'mayonesa', 'mostaza'],
    ['pimiento', 'leche', 'azúcar', 'cebolla', 'tomate', 'ajo'],
    ['durazno', 'melocotón', 'ciruela', 'albaricoque', 'pan'],
    ['espinacas', 'leche', 'azúcar', 'ricota', 'nuez moscada', 'sal'],
    ['hamburguesa', 'pistachos', 'almendras', 'nueces', 'anacardos'],
    ['pimienta', 'comino', 'cúrcuma', 'paprika'],
    ['fresa', 'plátano', 'yogur', 'miel'],
    ['maní', 'pasas', 'nuez', 'almendra'],
    ['yogur', 'frutilla', 'avena', 'miel'],
    ['té', 'limón', 'miel', 'menta'],
    ['hamburguesa', 'zanahoria', 'apio', 'pepino', 'remolacha'],
    ['papas', 'leche', 'azúcar', 'huevo', 'mayonesa', 'mostaza'],
    ['calabaza', 'zanahoria', 'batata', 'maíz', 'pan'],
    ['hamburguesa', 'garbanzos', 'limón', 'aceite de oliva', 'comino'],
    ['pasta', 'atún', 'tomate', 'aceitunas'],
    ['pollo', 'leche', 'azúcar', 'limón', 'ajo', 'romero'],
    ['yogur', 'frutilla', 'avena', 'miel'],
    ['frijoles', 'arroz', 'plátano', 'queso', 'pan'],
    ['hamburguesa', 'leche', 'azúcar', 'nuez', 'miel', 'avena', 'canela'],
    ['lechuga', 'zanahoria', 'remolacha', 'pepino'],
    ['manzana', 'nuez', 'miel', 'canela'],
    ['yogur', 'frutilla', 'avena', 'miel'],
    ['pavo', 'pan', 'lechuga', 'tomate'],
    ['pimiento', 'cebolla', 'tomate', 'ajo'],
    ['fresa', 'leche', 'azúcar', 'plátano', 'yogur', 'miel'],
    ['leche', 'azúcar', 'té', 'limón', 'miel', 'menta', 'pan'],
    ['azúcar', 'zanahoria', 'apio', 'pepino', 'remolacha'],
    ['hamburguesa', 'papas', 'huevo', 'mayonesa', 'mostaza'],
    ['calabaza', 'zanahoria', 'batata', 'maíz'],
    ['garbanzos', 'limón', 'aceite de oliva', 'comino'],
    ['pasta', 'atún', 'tomate', 'aceitunas'],
    ['hamburguesa', 'leche', 'azúcar', 'pollo', 'limón', 'ajo', 'romero'],
    ['frijoles', 'arroz', 'plátano', 'queso'],
    ['nuez', 'miel', 'avena', 'leche', 'azúcar', 'canela', 'pan'],
    ['nuez', 'miel', 'avena', 'canela', 'leche', 'azúcar', 'pan'],
    ['hamburguesa', 'lechuga', 'zanahoria', 'remolacha', 'pepino'],
    ['manzana', 'leche', 'azúcar', 'nuez', 'miel', 'canela'],
    ['manzana', 'leche', 'azúcar', 'nuez', 'miel', 'canela'],
    ['manzana', 'leche', 'azúcar', 'nuez', 'miel', 'canela'],
    // Más productos...
  ];

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
        this.algorithmCamina.f_construirGrafo(this.elements);

        // Ejemplo de predicción 
        let _prediccion:string[] = this.algorithmCamina.f_caminataAleatoria(2);
        this.resultData = this.algorithmArbol.predecir(_prediccion); 
        console.log('ARBOL DECISIONES EJECUTADO! lista: '+ _prediccion);
        break;
      default:
        break;
    }
  }
}
