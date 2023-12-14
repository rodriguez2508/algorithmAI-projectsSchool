import { Injectable } from '@angular/core';

interface NodoArbol {
  valor?: any;
  hijos?: NodoArbol[];
  resultado?: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class AlgorithmArbolService {

  private raiz: NodoArbol;
  constructor() { 

    this.raiz = { valor: '¿Es una compra?', hijos: [] };
  }

  construirArbol(elements: string[][]) {
    for (const transaction of elements) {
      let nodoActual: NodoArbol | undefined = this.raiz;

      for (const producto of transaction) {
        let nodoEncontrado: NodoArbol | undefined = nodoActual?.hijos?.find(nodo => nodo.resultado === producto);


        if (!nodoEncontrado) {
          const nuevoNodo: NodoArbol = { valor: producto };
          nodoActual!.hijos = nodoActual!.hijos || [];
          nodoActual!.hijos.push(nuevoNodo);
          nuevoNodo.hijos = [];
          nuevoNodo.resultado = producto;
          nodoActual = nuevoNodo;
        } else {
          nodoActual = nodoEncontrado;
        }
      }
    }

    // console.log( this.raiz)
  }


  predecir(transaccion: string[]): string[] {
    let nodoActual: NodoArbol = this.raiz;

    for (const producto of transaccion) {
      let nodoEncontrado: NodoArbol | undefined = nodoActual?.hijos?.find(nodo => nodo.resultado === producto);
      if (!nodoEncontrado) return ["No se puede determinar!"];
      nodoActual = nodoEncontrado;
    }


    return ['La compra asociada a esa lista sugiere el elemento: ' + nodoActual?.valor || 'La compra no sugiere resultados'];
  }

}
