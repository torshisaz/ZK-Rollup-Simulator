import { MockVerifier } from '../src/verifier/index.js';
import { MockProver } from '../src/prover/index.js';
import { createTransaction, TransactionType } from '../src/utils/types.js';

describe('MockVerifier', () => {
  it('accepts and stores a proof', async () => {
    const verifier = new MockVerifier();
    const prover = new MockProver('test');
    const txs = [createTransaction(TransactionType.TRANSFER, 'a', 'b', 10)];
    const proof = await prover.generateProof(txs);
    const submitted = await verifier.submitProof(proof);
    expect(submitted.proofId).toBe(proof.proofId);
    expect(verifier.getProof(proof.proofId)).toBeTruthy();
  });

  it('tracks state root progression', async () => {
    const verifier = new MockVerifier();
    const initialRoot = verifier.getStateRoot();
    expect(initialRoot).toBe('0x' + '00'.repeat(32));
  });
});
