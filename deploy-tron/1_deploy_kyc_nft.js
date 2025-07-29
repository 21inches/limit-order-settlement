const kycNFT = artifacts.require('KycNFT');

module.exports = function (deployer) {
    const constructorArgs = [
        'Resolver Access Token', // name
        'RES', // symbol
        '1', // version
        'TUrzzZSyCtu2aXdkxnwUqNpqBgoodrbN8Y', // owner: Xana 21inches
    ];

    // Deploy the KycNFT contract
    deployer.deploy(kycNFT, constructorArgs);
};
