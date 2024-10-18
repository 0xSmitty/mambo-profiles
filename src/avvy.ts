import AVVY from '@avvy/client';
import { PublicClient } from 'viem';
import { clientToProvider } from '../utils/clientToProvider';

export interface AvvyProfile {
  avvyName: string | null;
}

export interface AvvyWrapper {
  getName(address: string): Promise<AvvyProfile>;
  getManyNames(addresses: string[]): Promise<AvvyProfile[]>;
}

const avvyWrapper = (client: PublicClient): AvvyWrapper => {
  const provider = clientToProvider(client);
  
  const avvy = new AVVY(provider);

  return {
    async getName(address: string): Promise<AvvyProfile> {
      const hash = await avvy.reverse(AVVY.RECORDS.EVM, address);
      if (!hash) {
        return { avvyName: null };
      }
      const name = await hash.lookup();
      return { avvyName: name.name };
    },

    async getManyNames(addresses: string[]): Promise<AvvyProfile[]> {          
      const names = await avvy.batch(addresses).reverseToNames(AVVY.RECORDS.EVM);
      return names.map(name => ({ avvyName: name }));
    }
  };
};

export default avvyWrapper;
