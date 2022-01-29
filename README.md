# Supply chain Udacity Project

This dapp serves to track the supply chain lifecycle from coffe harvesting all the way to the consumer with the ability to track and verify each step.



# Dependencies

- `@truffle/hdwallet-provider@^1.0.17` to deploy to Rinkeby
- `truffle-assertions@0.9.2` for verifying test cases
- `web3@^1.3.5` 

IPFS is not utilized in this project.

# Rinkeby Network

## deployment
```
truffle migrate --network rinkeby
```

## Transaction Hash

[0xc0e17db71e02e5627ee4a13e0b23e9ce3409ccfc41c8f915a0385a41f546bb8a](https://rinkeby.etherscan.io/tx/0xc0e17db71e02e5627ee4a13e0b23e9ce3409ccfc41c8f915a0385a41f546bb8a)

## Contract Address

[0x6971e84D43c9E4c958764cA2CA99801a6b08F24D](https://rinkeby.etherscan.io/address/0x6971e84D43c9E4c958764cA2CA99801a6b08F24D)


# Steps

In the project folder

```
npm install
```

Launch Truffle:

```
truffle develop
```

```
truffle compile
```

```
truffle migrate
```

```
truffle test
```

In a separate terminal window, launch the DApp:

```
npm run dev