# 1inch Limit Order Settlement'
A comprehensive smart contract system for 1inch limit order settlement across multiple blockchain networks including Ethereum, Polygon, Arbitrum, BSC, Tron and more.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Smart Contracts](#smart-contracts)
- [Installation](#installation)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)


## 🎯 Overview

This repository contains the smart contracts for 1inch's limit order settlement system. It provides a robust infrastructure for executing limit orders with advanced features including whitelist management, KYC integration, fee handling, and cross-chain capabilities.

## ✨ Features

- **Multi-chain Support**: Deployed on Ethereum, Polygon, Arbitrum, BSC, Base, Aurora, and more
- **Whitelist Management**: Advanced whitelist registry with cross-chain capabilities
- **KYC Integration**: NFT-based KYC system for compliance
- **Fee Management**: Flexible fee collection and distribution system
- **Gas Optimization**: Optimized for cost-effective transactions
- **Extensible Architecture**: Modular design with extension support
- **Comprehensive Testing**: Extensive test coverage with gas measurement

## 🏗️ Smart Contracts

### Core Contracts

- **`Settlement.sol`** - Main settlement contract for limit order execution
- **`SimpleSettlement.sol`** - Simplified settlement implementation
- **`PowerPod.sol`** - Power management and delegation system
- **`KycNFT.sol`** - KYC verification through NFT ownership

### Registry & Management

- **`WhitelistRegistry.sol`** - Whitelist management system
- **`CrosschainWhitelistRegistry.sol`** - Cross-chain whitelist functionality
- **`WhitelistHelper.sol`** - Helper utilities for whitelist operations

### Extensions & Interfaces

- **`IFeeBank.sol`** - Fee collection interface
- **`IFeeBankCharger.sol`** - Fee charging interface
- **`ICreate3Deployer.sol`** - Contract deployment interface

## 🚀 Installation

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager
- Git

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/1inch/limit-order-settlement.git
   cd limit-order-settlement
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Environment setup**
   Create a `.env` file in the root directory:
   ```bash
   # Ethereum networks
   PRIVATE_KEY=your_private_key_here
   
   # Tron networks (if deploying to Tron)
   PRIVATE_KEY_TRON=your_tron_private_key_here
   PRIVATE_KEY_NILE=your_nile_testnet_private_key_here
   
   # API keys for verification
   ETHERSCAN_API_KEY=your_etherscan_api_key
   POLYGONSCAN_API_KEY=your_polygonscan_api_key
   ```

## 🛠️ Development

### Available Scripts

```bash
# Code formatting
yarn format          # Format all files
yarn format-js       # Format JavaScript files
yarn format-sol      # Format Solidity files

# Linting
yarn lint            # Run all linters
yarn lint:fix        # Fix linting issues
yarn lint:js         # Lint JavaScript files
yarn lint:sol        # Lint Solidity files

# Documentation
yarn docify          # Generate documentation

# Clean build artifacts
yarn clean           # Remove build artifacts
```

### Compilation

```bash
# Compile contracts
npx hardhat compile

# Compile with dependency resolution
npx hardhat compile --force
```

## 🧪 Testing

### Run Tests

```bash
# Run all tests
yarn test

# Run tests sequentially (for CI)
yarn test:ci

# Run specific test file
npx hardhat test test/Settlement.js

# Run tests with gas reporting
REPORT_GAS=true yarn test
```

### Test Coverage

```bash
# Generate coverage report
yarn coverage
```

### Available Test Suites

- **`Settlement.js`** - Core settlement functionality tests
- **`WhitelistRegistry.js`** - Whitelist management tests
- **`KycNFT.js`** - KYC NFT system tests
- **`PowerPod.js`** - Power delegation tests
- **`GasBump.js`** - Gas optimization tests
- **`MeasureGas.js`** - Gas measurement and analysis

## 🚀 Deployment

### Ethereum Networks

The project supports deployment to multiple networks:

- **Mainnet** - Ethereum mainnet
- **Polygon** - Polygon network
- **Arbitrum** - Arbitrum One
- **BSC** - Binance Smart Chain
- **Base** - Coinbase Base network
- **Aurora** - Aurora network
- **Optimism** - Optimistic Ethereum
- **zkSync** - zkSync Era

### Deploy Commands

```bash
# Deploy to specific network
yarn deploy mainnet
yarn deploy polygon
yarn deploy arbitrum

# Deploy with custom configuration
npx hardhat deploy --network mainnet
```

### Tron Deployment

For Tron network deployment:

```bash
# Compile for Tron
yarn tronbox compile

# Deploy to Tron mainnet
yarn tronbox migrate --network tron

# Deploy to Tron Nile testnet
yarn tronbox migrate --network nile
```

### Verification

```bash
# Verify contracts on Etherscan
npx hardhat verify --network mainnet CONTRACT_ADDRESS

# Verify on PolygonScan
npx hardhat verify --network polygon CONTRACT_ADDRESS
```
