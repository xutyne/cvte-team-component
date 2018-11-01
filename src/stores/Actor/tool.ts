export type mergeObj<T> = {
  [P in keyof T]?: mergeObj<T[P]>
};
export function Merge<T>(
  srcObj: T,
  obj: mergeObj<T>
): T {
  if (
    Array.isArray(obj) &&
    Array.isArray(srcObj)
  ) {
    // @ts-ignore;
    return obj;
  } else if (
    typeof obj === "object" &&
    typeof srcObj === "object"
  ) {
    // @ts-ignore; srcObj 肯定是object{}; 更新一层object 包装
    srcObj = { ...srcObj };
    for (const x in obj) {
      srcObj[x] = Merge(srcObj[x], obj[x] as any);
    }
    return srcObj;
  } else {
    // @ts-ignore
    return obj;
  }
}

export function next(func: Function) {
  return new Promise(res => {
    res();
  }).then(() => {
    func();
  });
}

// generator 函数迭代器.
export function Senior(
  gen: IterableIterator<any>,
  valueTransformer?: Function,
  initValue?: any
) {
  let sync = true;
  let i = 0;
  let nextValue = initValue;
  let rus: IteratorResult<any>;
  do {
    rus = gen.next(nextValue);

    let transValue;

    // 不是Promise 的交给Transformer 解析一下;
    if (
      typeof rus.value === "object" &&
      typeof rus.value.then === "function"
    ) {
      transValue = rus.value;
    } else {
      transValue = valueTransformer
        ? valueTransformer(rus.value)
        : rus.value;
    }

    // Geno自带的解析.
    if (
      typeof transValue === "object" &&
      typeof transValue.then === "function"
    ) {
      transValue.then((d: any) => {
        Senior(gen, valueTransformer, d);
      });
      sync = false;
    } else {
      nextValue = transValue;
    }
  } while (sync && !rus.done);
}

export const SeniorWords = {
  stop: Symbol("stop"),
};