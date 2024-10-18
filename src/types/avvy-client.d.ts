declare module '@avvy/client' {
  export default class AVVY {
    constructor(provider: any);
    reverse(recordType: any, address: string): Promise<any>;
    batch(addresses: string[]): {
      reverseToNames(recordType: any): Promise<(string | null)[]>;
    };
    static RECORDS: {
      EVM: any;
    };
  }
}
