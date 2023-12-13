import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmAprioriService {
 
  constructor() { }

  // --
  // cuenta la frecuencia de cada ítem en los elementos
  // --
  private countItemsets(elements: string[][]): Map<string, number> {
    const itemsetsCount = new Map<string, number>();

    for (const transaction of elements) {
      for (const item of transaction) {
        if (!itemsetsCount.has(item)) {
          itemsetsCount.set(item, 1);
        } else {
          itemsetsCount.set(item, itemsetsCount.get(item)! + 1);
        }
      }
    }

    return itemsetsCount;
  }

  // --
  // Se encarga de todo el proceso de encontrar los conjuntos de ítems frecuentes en base a un umbral de soporte dado.
  // --
  public findFrequentItemsets(elements: string[][], minSupport: number): string[] {
    const elementsCount = elements.length;
    const itemsetsCount = this.countItemsets(elements);
    const frequentItemsets: string[] = [];

    for (const [item, count] of itemsetsCount.entries()) {
      const support = count / elementsCount;
      if (support >= minSupport) {
        frequentItemsets.push(item);
      }
    }

    return frequentItemsets;
  }

}
