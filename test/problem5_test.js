const { ethers } = require('ethers');

const ADDR = '0x177558df89eBB3eC9cAd7dEE44B42cB68bC77D9D'; // your contract address
const ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'wallet',
        type: 'address',
      },
      {
        internalType: 'address[]',
        name: 'tokenAddresses',
        type: 'address[]',
      },
    ],
    name: 'getTokenBalances',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
]; // your contract ABI

const ADDRESS = '0xc90501a19e1AB664315dF35Bb3671766e89d4706'; // some wallet address with token balance
const TOKENS = [
  // token contract addresses
  '0xdD69DB25F6D620A7baD3023c5d32761D353D3De9',
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.JsonRpcProvider(
  'https://goerli.infura.io/v3/d54b1701e29543e3a3771fe8775cc10d'
);

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);
  console.log('contract', contract);
  const balances = await contract.getTokenBalances(ADDRESS, TOKENS);
  console.log('balances:', balances.toString());
  return balances;
};

test().then(console.log);
