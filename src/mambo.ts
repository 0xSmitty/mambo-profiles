import { PublicClient, Address } from 'viem';
import { ABI, ADDRESS } from './contractInfo';

interface ProfilePicView {
  isSet: boolean;
  nftAddress: string;
  tokenId: bigint;
}

interface UserProfile {
  userAddress: string;
  username: string;
  profileURI: string;
  profileNft: ProfilePicView;
}

export interface MamboProfile {
  mamboName: string | null;
  hasMamboProfilePic: boolean;
  mamboProfilePicContract: string;
  mamboProfilePicTokenId: string;
}

const getReturnDataFromProfile = (profile: UserProfile): MamboProfile => {
  return {
    'mamboName': profile.username || null,
    'hasMamboProfilePic': profile.profileNft.isSet,
    'mamboProfilePicContract': profile.profileNft.nftAddress,
    'mamboProfilePicTokenId': profile.profileNft.tokenId.toString()
  };
};

export interface MamboWrapper {
  getProfile(address: string): Promise<MamboProfile>;
  getManyProfiles(addresses: string[]): Promise<MamboProfile[]>;
}

const mamboNameWrapper = (client: PublicClient): MamboWrapper => ({
  async getProfile(address: Address): Promise<MamboProfile> {
    const profile = await client.readContract({
      address: ADDRESS,
      abi: ABI,
      functionName: 'getProfileByWallet',
      args: [address]
    }) as UserProfile;
    return getReturnDataFromProfile(profile);
  },

  async getManyProfiles(addresses: Address[]): Promise<MamboProfile[]> {
    const profiles = await client.readContract({
      address: ADDRESS,
      abi: ABI,
      functionName: 'getManyProfilesByWallets',
      args: [addresses]
    }) as UserProfile[];
    return profiles.map(getReturnDataFromProfile);
  }
});

export default mamboNameWrapper;
