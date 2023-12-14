import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmCaminataService {

  grafo: Map<string, Set<string>>;

  constructor() { 
  
    this.grafo = new Map();

  }


  f_construirGrafo(datos: string[][]) {
    // Implementación para construir el grafo a partir de los datos
    
    for (const item of datos) {
      for (let i = 0; i < item.length; i++) {
        const nodoActual = item[i];
        if (!this.grafo.has(nodoActual)) {
          this.grafo.set(nodoActual, new Set());
        }
        for (let j = i + 1; j < item.length; j++) {
          const vecino = item[j];
          this.grafo.get(nodoActual)!.add(vecino);
          if (!this.grafo.has(vecino)) {
            this.grafo.set(vecino, new Set());
          }
          this.grafo.get(vecino)!.add(nodoActual);
        }
      }
    }

  }


  // -- 
  // realiza una caminata aleatoria partiendo de un nodo aleatorio y generando un camino de una longitud determinada (pasos)
  // --
  // f_caminataAleatoria(grafo: Map<string, string[]>): string[] {
  f_caminataAleatoria(pasos: number): string[] {
    
    const nodos = Array.from(this.grafo.keys());

    let nodoActual = nodos[Math.floor(Math.random() * nodos.length)];
    const camino: string[] = [nodoActual];

    for (let i = 0; i < pasos; i++) {
      const vecinos = Array.from(this.grafo.get(nodoActual)!);
      if (vecinos.length > 0) {
        const siguienteNodo = vecinos[Math.floor(Math.random() * vecinos.length)];
        camino.push(siguienteNodo);
        nodoActual = siguienteNodo;
      } else {
        break; // Si no hay vecinos, terminar la caminata
      }
    }

    return camino; 
    
    }

 
}
