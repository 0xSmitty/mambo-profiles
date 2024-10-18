import { SignTypedDataParameters } from 'viem';

declare module 'viem' {
  interface SignTypedDataParameters<TTypedData, TPrimaryType extends string> {
    message: TTypedData[TPrimaryType];
  }
}
