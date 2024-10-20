Small lib to handle address -> avvy/mambo name resolution in a Viem project

Doesn't rely on the avvy lib (or its ethers dependency), just simply uses Viem to query for avvy names and mambo profile info.

## Installation

```
npm i --save mambo-profiles
```

## Usage
Each address will return a `CombinedProfile` object.
### Resolve for single address:
```
import { MAMBOPROFILE } from 'mambo-profiles';
import { createPublicClient, http } from 'viem';
import { avalanche } from 'viem/chains';

const publicClient = createPublicClient({
  chain: avalanche,
  transport: http()
});

const mamboProfileInstance = new MAMBOPROFILE(publicClient);
const profiles = await mamboProfileInstance.getProfile('0xb12B502492073edeb2adddDb1Eb8c67de54Ead46');
```
Will return a single `CombinedProfile` object
```
{
  "address": "0xb12B502492073edeb2adddDb1Eb8c67de54Ead46",
  "avvyName": null,
  "mamboName": "Smitty.mambo",
  "hasMamboProfilePic": true,
  "mamboProfilePicContract": "0x365AF8B26A4b476D986B719d165710Fc2AC9f261",
  "mamboProfilePicTokenId": "2978"
}

```
### Resolve multiple:
```
import { MAMBOPROFILE } from 'mambo-profiles';
import { createPublicClient, http } from 'viem';
import { avalanche } from 'viem/chains';

const publicClient = createPublicClient({
  chain: avalanche,
  transport: http()
});

const mamboProfileInstance = new MAMBOPROFILE(publicClient);
const profiles = await mamboProfileInstance.getManyProfiles(['0x74331373cC4B88d88B82e7Cdf355295766b1C4A8','0xb12B502492073edeb2adddDb1Eb8c67de54Ead46']);
```
Will return an object of key->value pairs, the key being the address and value its `CombinedProfile` info.

```
{
    "0x74331373cC4B88d88B82e7Cdf355295766b1C4A8": {
        "address": "0x74331373cC4B88d88B82e7Cdf355295766b1C4A8",
        "avvyName": null,
        "mamboName": "Treasury.mambo",
        "hasMamboProfilePic": false,
        "mamboProfilePicContract": null,
        "mamboProfilePicTokenId": null
    },
    "0xb12B502492073edeb2adddDb1Eb8c67de54Ead46": {
        "address": "0xb12B502492073edeb2adddDb1Eb8c67de54Ead46",
        "avvyName": smitty.avax,
        "mamboName": "Smitty.mambo",
        "hasMamboProfilePic": true,
        "mamboProfilePicContract": "0x365AF8B26A4b476D986B719d165710Fc2AC9f261",
        "mamboProfilePicTokenId": "2978"
    }
}
