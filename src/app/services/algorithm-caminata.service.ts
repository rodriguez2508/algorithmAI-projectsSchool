import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmCaminataService {

  constructor() { }

  // -- 
  // realiza una caminata aleatoria partiendo de un nodo aleatorio y generando un camino de una longitud determinada (pasos)
  // --
  // f_caminataAleatoria(grafo: Map<string, string[]>): string[] {
  f_caminataAleatoria(elements: string[][]): string[] {
    

    const grafo: Map<string, string[]> = new Map();

    for (const transaccion of elements) {
      for (let i = 0; i < transaccion.length; i++) {
        const nodoActual = transaccion[i];
        if (!grafo.has(nodoActual)) {
          grafo.set(nodoActual, []);
        }
        for (let j = i + 1; j < transaccion.length; j++) {
          const vecino = transaccion[j];
          if (!grafo.get(nodoActual)!.includes(vecino)) {
            grafo.get(nodoActual)!.push(vecino);
            if (!grafo.has(vecino)) {
              grafo.set(vecino, []);
            }
            grafo.get(vecino)!.push(nodoActual);
          }
        }
      }
    }


    // Lógica para la caminata aleatoria en el grafo
    // ...
    const nodos = Array.from(grafo.keys());
    let nodoActual = nodos[Math.floor(Math.random() * nodos.length)];
    const camino: string[] = [nodoActual];
    const pasos = 10; // Cantidad de pasos en la caminata aleatoria

    for (let i = 0; i < pasos; i++) {
      const vecinos = grafo.get(nodoActual)!;
      if (vecinos.length > 0) {
        const siguienteNodo = vecinos[Math.floor(Math.random() * vecinos.length)];
        camino.push(siguienteNodo);
        nodoActual = siguienteNodo;
      } else {
        break; // Si no hay vecinos, terminar la caminata
      }
    }
 
    return camino; // Arreglo de nodos en el camino
  }
}
