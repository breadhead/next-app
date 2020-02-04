export type AsyncFunc<ARG, RES> = (params?: ARG) => Promise<RES>;
export type AsyncFuncWithParam<ARG, RES> = (params: ARG) => Promise<RES>;
