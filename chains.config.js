// chain configs in ocean.js ConfigHelperConfig format
// see: https://github.com/oceanprotocol/ocean.js/blob/e07a7cb6ecea12b39ed96f994b4abe37806799a1/src/utils/ConfigHelper.ts#L8

const chains = [
  {
    chainId: 32456,
    isDefault: false,
    isCustom: true,
    network: 'pontusx-devnet',
    oceanTokenSymbol: 'OCEAN',
    oceanTokenAddress: '0xdF171F74a8d3f4e2A789A566Dce9Fa4945196112',
    nftFactoryAddress: '0xFdC4a5DEaCDfc6D82F66e894539461a269900E13',
    fixedRateExchangeAddress: '0x8372715D834d286c9aECE1AcD51Da5755B32D505',
    dispenserAddress: '0x5461b629E01f72E0A468931A36e039Eea394f9eA',
    opfCommunityFeeCollector: '0x1f84fB438292269219f9396D57431eA9257C23d4',
    startBlock: 57428,
    transactionBlockTimeout: 50,
    transactionConfirmationBlocks: 1,
    transactionPollingTimeout: 750,
    gasFeeMultiplier: 1.1,
    providerUri: 'https://provider.dev.pontus-x.eu',
    providerAddress: '0x68C24FA5b2319C81b34f248d1f928601D2E5246B',
    metadataCacheUri: 'https://aquarius.pontus-x.eu',
    nodeUri: 'https://rpc.dev.pontus-x.eu',
    subgraphUri: 'https://subgraph.dev.pontus-x.eu',
    explorerUri: 'https://explorer.pontus-x.eu/devnet/pontusx'
  },/*{
    chainId: 8996,
    isDefault: true,
    isCustom: true,
    network: 'pontusx-testnet',
    oceanTokenSymbol: 'OCEAN',
    oceanTokenAddress: '0x5B190F9E2E721f8c811E4d584383E3d57b865C69',
    nftFactoryAddress: '0x2C4d542ff791890D9290Eec89C9348A4891A6Fd2',
    fixedRateExchangeAddress: '0xcE0F39abB6DA2aE4d072DA78FA0A711cBB62764E',
    dispenserAddress: '0xaB5B68F88Bc881CAA427007559E9bbF8818026dE',
    opfCommunityFeeCollector: '0xACC8d1B2a0007951fb4ed622ACB1C4fcCAbe778D',
    startBlock: 82191,
    transactionBlockTimeout: 50,
    transactionConfirmationBlocks: 1,
    transactionPollingTimeout: 750,
    gasFeeMultiplier: 1.1,
    providerUri: '',
    providerAddress: '0x9546d39CE3E48BC942f0be4AA9652cBe0Aff3592',
    metadataCacheUri: 'https://aquarius.pontus-x.eu',
    nodeUri: 'https://rpc.test.pontus-x.eu',
    subgraphUri: 'https://subgraph.test.pontus-x.eu',
    explorerUri: 'https://explorer.pontus-x.eu/testnet/pontusx'
},*/
/*
{
  chainId: 8996,
  isDefault: true,
  isCustom: true,
  network: 'pontusx-local',
  oceanTokenSymbol: 'OCEAN',

  // Direcciones de contratos locales generadas por Barge
  oceanTokenAddress: '0x1d1e72b7c1f3d38b7d3c7f1e3e1d7e1d1f3e7c1d',  // ejemplo, reemplaza por tu address real
  nftFactoryAddress: '0x2a3b4c5d6e7f8901a2b3c4d5e6f7a8901b2c3d4e', // ejemplo local
  fixedRateExchangeAddress: '0x3b4c5d6e7f8901a2b3c4d5e6f7a8901b2c3d4e5f', // ejemplo local
  dispenserAddress: '0x4c5d6e7f8901a2b3c4d5e6f7a8901b2c3d4e5f6a', // ejemplo local
  opfCommunityFeeCollector: '0x5d6e7f8901a2b3c4d5e6f7a8901b2c3d4e5f6a7b', // ejemplo local

  startBlock: 0,
  transactionBlockTimeout: 50,
  transactionConfirmationBlocks: 1,
  transactionPollingTimeout: 750,
  gasFeeMultiplier: 1.1,

  // Provider local (Barge) → en tu Docker el puerto 
  providerUri: 'http://127.0.0.1:9001',
  providerAddress: '0xe08A1dAe983BC701D05E492DB80e0144f8f4b909',  // opcional, generalmente lo deja vacío para development

  // Metadata cache → si no tienes Aquarius local, puedes usar el remoto
  metadataCacheUri: 'https://aquarius.pontus-x.eu',

  // Nodo local Ganache
  nodeUri: 'http://127.0.0.1:8545',

  // Subgraph local opcional (Barge expone ocean-node en 9000 host)
  subgraphUri: '',

  // Explorer → puedes dejar vacío para dev
  explorerUri: '',
    // Añadido para evitar ENS en red local
  ensRegistryAddress: undefined
},*/

{
  chainId: 8996,
  isDefault: true,
  isCustom: true,
  network: 'pontusx-local',
  oceanTokenSymbol: 'OCEAN',

  oceanTokenAddress: '0x1d1e72b7c1f3d38b7d3c7f1e3e1d7e1d1f3e7c1d',
  nftFactoryAddress: '0x2a3b4c5d6e7f8901a2b3c4d5e6f7a8901b2c3d4e',
  fixedRateExchangeAddress: '0x3b4c5d6e7f8901a2b3c4d5e6f7a8901b2c3d4e5f',
  dispenserAddress: '0x4c5d6e7f8901a2b3c4d5e6f7a8901b2c3d4e5f6a',
  opfCommunityFeeCollector: '0x5d6e7f8901a2b3c4d5e6f7a8901b2c3d4e5f6a7b',

  startBlock: 0,
  transactionBlockTimeout: 50,
  transactionConfirmationBlocks: 1,
  transactionPollingTimeout: 750,
  gasFeeMultiplier: 1.1,

  providerUri: 'http://127.0.0.1:9001',
  providerAddress: '0xe08A1dAe983BC701D05E492DB80e0144f8f4b909',

  metadataCacheUri: 'http://127.0.0.1:5000', // si Aquarius local
  nodeUri: 'http://127.0.0.1:8545',
  subgraphUri: '',
  explorerUri: '',

  // Añadido para evitar ENS en red local
  ensRegistryAddress: undefined,
  supportsENS: false
}



]

const getDefaultChainIds = () => {
  return chains.filter((chain) => chain.isDefault).map((c) => c.chainId)
}

const getSupportedChainIds = () => {
  return chains.map((c) => c.chainId)
}

const getCustomChainIds = () => {
  return chains.filter((c) => c.isCustom).map((c) => c.chainId)
}

module.exports = {
  chains,
  getDefaultChainIds,
  getSupportedChainIds,
  getCustomChainIds
}
