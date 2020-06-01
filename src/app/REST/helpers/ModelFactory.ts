import { Injectable ,ViewEncapsulation} from "@angular/core";

@Injectable()
export class ModelFactory {
  static createArrayType<T>(tClass: new (...args: Array<any>) => T, objects: Array<any>): Array<T> {
    if (objects === null) {
      return null;
    }
    const convertedObjects: Array<T> = [];
    for (const object of objects) {
      const convertedObject: T = new tClass(object);
      convertedObjects.push(convertedObject);
    }

    return convertedObjects;
  }

  static createType<T>(tClass: new (...args: Array<any>) => T, object: any): T {
    return new tClass(object);
  }
}
