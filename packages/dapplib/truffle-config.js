require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember unable grace glove flock theme'; 
let testAccounts = [
"0xcbd041d7fdb633f74cbfd07cc6362a9ef63a67fadf33635f27caaf93dd6b9548",
"0xb980a78633c6d6a91bb0e0f0703feb1954299fb4a34ba92eeebb8a6c930d2029",
"0xe8972bd784801e667e9be2b27a0122ae06b8a146adbb37284913fb331d381b4c",
"0x9a1e9e5caa83aab2dded3ea76b6e9352f60128c62b09106b562e04754e6d2224",
"0xcaba26dcd605e4906f861fb0788fd0c5cfd875c02c34b9ebdf7c994384d4570c",
"0x620d6c51c33d367ef2d05e08d1dadbd81eee9a3b9d86da0fb3e336c7c945e352",
"0x880ef481ffe42fdc43b14e38bb4473ec95c32bb336a9de22826f2f8505c7b198",
"0xce2926076d78037a8fbf16067f44fc8c670bb1611a75b3f299d126d7dde81bf4",
"0x90778bd0c5485286937919fb3644c8fd9d521407be7cc0a773743491760519ac",
"0x5d45ed4b54b2a7a170e6cc8da9d1177a37e0c52e56de2de3b9449026093f014b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


