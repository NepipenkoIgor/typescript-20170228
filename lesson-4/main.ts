// function isNumber(n: sn): n is number {
//     return typeof n === 'number';
// }
//
export function summator(...n: sn[]): number {
    return n.reduce<number>((acc: number, next: sn) => {
        return isNumber(next)
            ? (next + acc)
            : Number.isNaN(Number(next))
                ? acc + 0
                : acc + Number(next);
    }, 0);
}

export function isInArray(arr: sn[], ...rest: sn[]): boolean {
  return rest.length
    ? rest.reduce((val: boolean, elem: sn) => val ? arr.includes(elem) : false,
      true
    )
    : false;
}

// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// class MathLib {
//
//   @logMethod<typeof MathLib>()
//   public areaOfCircle(r: number): number {
//     return Math.PI * r ** 2;
//   }
// }
//
// function logMethod<T extends Function>(): MethodDecorator {
//   return (target: T, key: string, descriptor: TypedPropertyDescriptor<T>) => {
//     return {
//       value: (...args: {}[]) => {
//         const argsStr: {} = args.map((value: {}) => JSON.stringify(value))
//           .join();
//         const result: {} = descriptor.value(...args);
//         const r: {} = JSON.stringify(result);
//         console.log(`Call: ${key}(${argsStr}) => ${r}`);
//       }
//     };
//   };
// }
//
// const math: MathLib = new MathLib();
//
// math.areaOfCircle(10);
// math.areaOfCircle(3);


import { objectify } from 'tslint/lib/utils';
class Account {
  @logProperty
  @logProperty
  public firstName: string;
  public lastName: string;

  public constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

function logProperty<T>(target: T, key: string): void {
  let _val: string = target[key];
  const _getter: () => typeof _val = (): typeof _val => {
    console.log(`Get: ${key} => ${_val}`);
    return _val;
  };

  const _setter: (newValue: string) => void = (newValue: string): void => {
    console.log(`Set: ${key} => ${newValue}`);
    _val = newValue;
  };

  Object.defineProperty(
    target, key, {
      get: _getter,
      set: _setter,
      enumerable: true,
      configurable: true
    }
  );
}

const me: Account = new Account('Igor', 'Nepipenko');
const myName: string = me.firstName;
me.firstName = 'Stepan';