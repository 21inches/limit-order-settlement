const path = require('path');
require('dotenv').config();
module.exports = {
    contracts_directory: './contracts',
    migrations_directory: './deploy-tron',
    contracts_build_directory: path.join(__dirname, 'artifacts-tron'),
    networks: {
        mainnet: {
            privateKey: process.env.PRIVATE_KEY_TRON,
            userFeePercentage: 100,
            feeLimit: 1000 * 1e6,
            fullHost: 'https://api.trongrid.io',
            network_id: '1',
        },
        nile: {
            privateKey: process.env.PRIVATE_KEY_NILE,
            userFeePercentage: 100,
            feeLimit: 1000 * 1e6,
            fullHost: 'https://nile.trongrid.io',
            network_id: '3',
        },
    },
    compilers: {
        solc: {
            version: '0.8.23',
            settings: {
                optimizer: {
                    enabled: true,
                    runs: 1_000_000,
                },
                evmVersion: 'shanghai',
                viaIR: true,
            }
        }
    }
};
