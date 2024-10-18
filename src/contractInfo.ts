export const ABI = [
  {
    "inputs": [{"internalType": "address","name": "account","type": "address"}],
    "name": "getProfileByWallet",
    "outputs": [{
      "components": [
        {"internalType": "address","name": "userAddress","type": "address"},
        {"internalType": "string","name": "username","type": "string"},
        {"internalType": "string","name": "profileURI","type": "string"},
        {
          "components": [
            {"internalType": "bool","name": "isSet","type": "bool"},
            {"internalType": "address","name": "nftAddress","type": "address"},
            {"internalType": "uint256","name": "tokenId","type": "uint256"}
          ],
          "internalType": "struct ProfilePicView",
          "name": "profileNft",
          "type": "tuple"
        }
      ],
      "internalType": "struct UserProfile",
      "name": "",
      "type": "tuple"
    }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "address[]","name": "accounts","type": "address[]"}],
    "name": "getManyProfilesByWallets",
    "outputs": [{
      "components": [
        {"internalType": "address","name": "userAddress","type": "address"},
        {"internalType": "string","name": "username","type": "string"},
        {"internalType": "string","name": "profileURI","type": "string"},
        {
          "components": [
            {"internalType": "bool","name": "isSet","type": "bool"},
            {"internalType": "address","name": "nftAddress","type": "address"},
            {"internalType": "uint256","name": "tokenId","type": "uint256"}
          ],
          "internalType": "struct ProfilePicView",
          "name": "profileNft",
          "type": "tuple"
        }
      ],
      "internalType": "struct UserProfile[]",
      "name": "",
      "type": "tuple[]"
    }],
    "stateMutability": "view",
    "type": "function"
  }
] as const;

export const ADDRESS = '0x85B1da87FB5ff5e5A0ce8b216aC142a62Ff5468c';
