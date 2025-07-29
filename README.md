# 1inch Limit Order Settlement Smart Contract

[![Build Status](https://github.com/1inch/limit-order-settlement/workflows/CI/badge.svg)](https://github.com/1inch/limit-order-settlement/actions)
[![Coverage Status](https://codecov.io/gh/1inch/limit-order-settlement/branch/master/graph/badge.svg?token=ZtdQHKURYO)](https://codecov.io/gh/1inch/limit-order-settlement)

---

# Deployment on Tron

## 1. Project Installation

install the dependencies.

```bash
yarn install
```


## 2. Environment Setup
The deployment script requires a private key to sign the transaction. We use a .env file to handle this securely.

Create a `.env` file in the root directory of the project and add your private key:

```bash
PRIVATE_KEY_TRON=your_private_key_here # For Tron Mainnet
PRIVATE_KEY_NILE=your_private_key_here # For Tron Nile Testnet
```


## 3. Deployment Workflow
### 3.1. Compile Contracts
This command reads the Solidity files from the contracts/ directory, compiles them, and places the resulting JSON artifacts into the artifacts-tron/ directory.
```bash
yarn tronbox compile
```

### 3.2. Deploy (Migrate) to a Network
This command runs the deployment scripts located in the deploy-tron/ directory. It will deploy the contracts to the network you specify.

**Mainnet**
```bash
yarn tronbox migrate --network tron

```

**Nile Testnet**
```bash
yarn tronbox migrate --network nile
```
