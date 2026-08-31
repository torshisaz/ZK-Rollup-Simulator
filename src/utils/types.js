// Basic type definitions

export const TransactionType = {
  TRANSFER: 'transfer',
  MINT: 'mint',
  BURN: 'burn',
};

export function createTransaction(type, from, to, amount, data = {}) {
  return {
    type,
    from,
    to,
    amount,
    data,
    nonce: Date.now(),
  };
}

export function hashState(state) {
  return '0x' + Buffer.from(JSON.stringify(state)).toString('hex').slice(0, 64);
}

export default { TransactionType, createTransaction, hashState };
