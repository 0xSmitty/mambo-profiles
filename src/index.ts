import { createPublicClient, http, PublicClient, isAddress, Address } from 'viem';
import { avalanche } from 'viem/chains';
import avvyWrapper, { AvvyWrapper, AvvyProfile } from './avvy';
import mamboWrapper, { MamboWrapper, MamboProfile } from './mambo';

export interface CombinedProfile extends AvvyProfile, MamboProfile {
  address: string;
}

export class MAMBOPROFILE {
  private client: PublicClient;
  private avvy: AvvyWrapper;
  private mambo: MamboWrapper;

  constructor(client?: PublicClient) {
    this.client = client || createPublicClient({
      chain: avalanche,
      transport: http()
    });
    
    this.avvy = avvyWrapper(this.client);
    this.mambo = mamboWrapper(this.client);
  }

  async getProfile(address: Address): Promise<CombinedProfile | undefined> {
    if (!isAddress(address)) {
      console.error("Invalid address");
      return;
    }
    
    const avvyProfile = await this.avvy.getName(address);
    const mamboProfile = await this.mambo.getProfile(address);
    return {
      address,
      ...avvyProfile,
      ...mamboProfile,
    };
  }

  async getManyProfiles(addresses: Address[]): Promise<Record<string, CombinedProfile> | undefined> {
    if (!Array.isArray(addresses)) {
      console.error("Addresses must be an array");
      return;
    }

    for (const address of addresses) {
      if (!isAddress(address)) {
        console.error("Invalid address: " + address);
        return;
      }
    }

    const avvyProfiles = await this.avvy.getManyNames(addresses);
    const mamboProfiles = await this.mambo.getManyProfiles(addresses);
    const ret: Record<string, CombinedProfile> = {};
    addresses.forEach((address, index) => {
      const data: CombinedProfile = {
        address,
        ...avvyProfiles[index],
        ...mamboProfiles[index],
      };
      ret[address] = data;
    });
    return ret;
  }
}