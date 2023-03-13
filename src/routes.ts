export const routes = {
  homeRoute: '/home/*',
  componentPreview: '/component-preview',
  completeProfile: '/complete-profile',

  marketplace: {
    route: '/marketplace',
    mp_dashboard: '/dashboard',
    mp_listing_details: '/listing/:offeringId',
    default_route: '/home/marketplace/dashboard',
  },

  login: {
    login: '/login',
    code2FA: '/code',
  },

  signUp: {
    signUp: '/sign-up',
    verification: '/verification',
  },

  home: {
    dashboard: '/dashboard/*',
    explorer: {
      latestBlocks: '/latest-blocks',
      latestTrans: '/latest-transactions',
    },
    list: {
      route: '/list/*',
      blocks: '/blocks',
      transactions: '/transactions',
      accounts: '/accounts',
    },
    details: {
      route: '/details/*',
      block_hash: '/block/:blockNo',
      transaction_hash: '/transaction/:transactionHash/*',
      account_address: '/account/:accountAddress',
      nft_key: '/nft/:nftKey',
    },
    operations: {
      route: '/operations/*',
      block_hash: '/block/:blockNo',
      transaction_hash: '/transaction/:transactionHash',
      account_address: '/account/:accountAddress',
    },
    defaultRoute: '/home/explorer',
  },
}

export const redirects = {
  list: {
    blocks: '/home/explorer/blocks',
    transactions: '/home/explorer/transactions',
    accounts: '/home/explorer/accounts',
  },
  latest: {
    blocks: '/home/explorer/dashboard/latest-blocks',
    transactions: '/home/explorer/dashboard/latest-transactions',
  },
  dashboard: '/home/explorer/dashboard',
  gotToMarketplace: '/home/marketplace/dashboard',
  gotToMarketplaceListingDetails: '/home/marketplace/:listingId',

  details: {
    gotToBlock: (blockHash: string | null | undefined) =>
      `/home/explorer/block/${blockHash}`,
    gotToTransaction: (transactionHash: string | null | undefined) =>
      `/home/explorer/transaction/${transactionHash}`,
    gotToAccount: (accountAddress: string | null | undefined) =>
      `/home/explorer/account/${accountAddress}`,
    gotToNft: (nftKey: string | null | undefined) =>
      `/home/explorer/nft/${nftKey}`,
    gotToListing: (accountAddress: string | null | undefined) =>
      `/home/marketplace/listing/${accountAddress}`,
  },
}
