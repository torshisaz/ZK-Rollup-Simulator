import { MockProver } from '../src/prover/index.js';
import { createTransaction, TransactionType } from '../src/utils/types.js';

describe('MockProver', () => {
  it('generates a proof for a batch of transactions', async () => {
    const prover = new MockProver('test-circuit');
    const txs = [
      createTransaction(TransactionType.TRANSFER, 'alice', 'bob', 100),
      createTransaction(TransactionType.TRANSFER, 'bob', 'charlie', 50),
    ];

    const proof = await prover.generateProof(txs);
    expect(proof.proofId).toMatch(/^proof-test-circuit-\d+$/);
    expect(proof.txCount).toBe(2);
    expect(proof.proof).toMatch(/^mock-proof-/);
  });

  it('throws on empty transaction array', async () => {
    const prover = new MockProver('test-circuit');
    await expect(prover.generateProof([])).rejects.toThrow();
  });

  it('verifies a proof', async () => {
    const prover = new MockProver('test-circuit');
    const txs = [createTransaction(TransactionType.TRANSFER, 'alice', 'bob', 100)];
    const proof = await prover.generateProof(txs);
    const result = prover.verify(proof);
    expect(result.valid).toBe(true);
    expect(result.proofId).toBe(proof.proofId);
  });
});
