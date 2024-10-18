import { JsonRpcProvider, FallbackProvider } from 'ethers';
import { PublicClient, Chain } from 'viem';

export function clientToProvider(client: PublicClient): JsonRpcProvider | FallbackProvider {
  const { chain, transport } = client;
  const network = {
    chainId: chain?.id,
    name: chain?.name,
    ensAddress: (chain as Chain & { contracts?: { ensRegistry?: { address: string } } }).contracts?.ensRegistry?.address,
  };
  
  if (transport.type === 'fallback') {
    const providers = (transport as unknown as { transports: { value?: { url: string } }[] }).transports.map(
      ({ value }: { value?: { url: string } }) => new JsonRpcProvider(value?.url, network)
    );
    return new FallbackProvider(providers);
  }
  
  return new JsonRpcProvider((transport as unknown as { url: string }).url, network);
}
