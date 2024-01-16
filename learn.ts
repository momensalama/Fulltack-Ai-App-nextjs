type Fn = (a: number, b: string) => number;

type Result = AppendArgument<Fn, boolean>;
// expected be (a: number, b: string, x: boolean) => number

type AppendArgument<Fn, T> = Fn extends (...arg: infer R) => infer A
  ? (...arg: [...R, T]) => A
  : never;
