// Transaction batcher for rollup simulation

export class TransactionBatcher {
  constructor(maxBatchSize = 100) {
    this.maxBatchSize = maxBatchSize;
    this.pending = [];
  }

  addTransaction(tx) {
    if (!tx || typeof tx !== 'object') {
      throw new Error('Invalid transaction');
    }
    this.pending.push({ ...tx, queuedAt: Date.now() });
  }

  createBatch() {
    if (this.pending.length === 0) {
      return null;
    }

    const batch = this.pending.slice(0, this.maxBatchSize);
    this.pending = this.pending.slice(this.maxBatchSize);

    return {
      batchId: `batch-${Date.now()}`,
      transactions: batch,
      createdAt: Date.now(),
      size: batch.length,
    };
  }

  getPendingCount() {
    return this.pending.length;
  }
}

export default TransactionBatcher;
