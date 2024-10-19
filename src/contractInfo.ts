export const MAMBO_ABI = [
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

export const MAMBO_ADDRESS = '0x85B1da87FB5ff5e5A0ce8b216aC142a62Ff5468c';

export const AVVY_ABI = [
  {
    "inputs": [
      {
        "internalType": "contract ContractRegistryInterface",
        "name": "_contractRegistry",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "contractRegistry",
    "outputs": [
      {
        "internalType": "contract ContractRegistryInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "name",
        "type": "bytes"
      }
    ],
    "name": "decodeNameCalldata",
    "outputs": [
      {
        "internalType": "string",
        "name": "plaintext",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "c",
        "type": "uint8"
      }
    ],
    "name": "fromHexChar",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "name",
        "type": "bytes"
      }
    ],
    "name": "getAddr",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "getRootName",
    "outputs": [
      {
        "internalType": "bool",
        "name": "set",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "rootName",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "s",
        "type": "string"
      }
    ],
    "name": "hexStringToAddress",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "name",
        "type": "bytes"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "resolve",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "key",
        "type": "string"
      }
    ],
    "name": "resolveCustom",
    "outputs": [
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "key",
        "type": "uint256"
      }
    ],
    "name": "resolveStandard",
    "outputs": [
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "node",
        "type": "bytes32"
      }
    ],
    "name": "resolver",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes",
        "name": "reverseAddress",
        "type": "bytes"
      }
    ],
    "name": "reverse",
    "outputs": [
      {
        "internalType": "string",
        "name": "resolvedName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "resolvedAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "reverseResolverAddress",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "resolverAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "s",
        "type": "string"
      }
    ],
    "name": "toAddress",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]

export const AVVY_ADDRESS = '0x0EDA383ED230Ab595CCb13403104575e59462202'

export const AVVY_RESOLUTION_UTILS_ABI = [
  {
    "inputs": [
      {
        "internalType": "contract ContractRegistryInterface",
        "name": "_contractRegistry",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "contractRegistry",
    "outputs": [
      {
        "internalType": "contract ContractRegistryInterface",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "key",
        "type": "string"
      }
    ],
    "name": "resolve",
    "outputs": [
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "key",
        "type": "uint256"
      }
    ],
    "name": "resolveStandard",
    "outputs": [
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addy",
        "type": "address"
      }
    ],
    "name": "reverseResolveEVMToName",
    "outputs": [
      {
        "internalType": "string",
        "name": "preimage",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "value",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "key",
        "type": "uint256"
      }
    ],
    "name": "reverseResolveToName",
    "outputs": [
      {
        "internalType": "string",
        "name": "preimage",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

export const AVVY_RESOLUTION_UTILS_ADDRESS = '0xBf49Da93bE8879A912838B1457922A78a81D6ee3'
