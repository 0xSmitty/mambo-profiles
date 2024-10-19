import { Address, PublicClient, Abi, encodePacked, zeroAddress } from 'viem'
import { multicall } from 'viem/actions'
import { AVVY_ADDRESS, AVVY_RESOLUTION_UTILS_ADDRESS, AVVY_RESOLUTION_UTILS_ABI } from './contractInfo'

export interface AvvyProfile {
  avvyName: string | null;
}

export interface AvvyWrapper {
  getName(address: Address): Promise<AvvyProfile>;
  getManyNames(addresses: Address[]): Promise<AvvyProfile[]>;
}

const avvyWrapper = (client: PublicClient): AvvyWrapper => ({
  async getName(address: Address): Promise<AvvyProfile> {

    const avvyName = await client.getEnsName({
      address: address,
      universalResolverAddress: AVVY_ADDRESS
    })
    
    return { avvyName: avvyName };
  },

  async getManyNames(addresses: Address[]): Promise<AvvyProfile[]> {
    try {
      const calls = addresses.map(address => ({
        address: AVVY_RESOLUTION_UTILS_ADDRESS as Address,
        abi: AVVY_RESOLUTION_UTILS_ABI as Abi,
        functionName: 'reverseResolveEVMToName',
        args: [address]
      }))
      
      const results = await multicall(client, {
        contracts: calls as any // Type assertion to avoid potential type issues
      })
    
      return results.map((result) => {
        if (result.status === 'success') {
          return {avvyName: result.result as string || null}
        } else {
          return { avvyName: null }
        }
      })
    } catch (error) {
      throw error
    }
  }
});

export default avvyWrapper;
