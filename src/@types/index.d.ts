declare module '*.json' {
  const value: IGame;
  export = value;
}

declare type PropsOf<T extends (props: any) => any> = T extends (props: infer P) => any ? P : never;


