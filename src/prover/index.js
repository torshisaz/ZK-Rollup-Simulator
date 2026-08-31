// Mock ZK prover for educational purposes
// This does NOT generate real proofs — just simulates the flow

export class MockProver {
  constructor(circuitId) {
    this.circuitId = circuitId;
    this.proofCount = 0;
  }

  async generateProof(transactions) {
    if (!Array.isArray(transactions) || transactions.length === 0) {
      throw new Error('Transactions must be a non-empty array');
    }

    this.proofCount += 1;

    // Simulate proof generation time
    await new Promise(resolve => setTimeout(resolve, 100));

    return {
      proofId: `proof-${this.circuitId}-${this.proofCount}`,
      timestamp: Date.now(),
      txCount: transactions.length,
      proof: `mock-proof-${Math.random().toString(36).slice(2)}`,
      publicInputs: {
        stateRootBefore: '0x' + '00'.repeat(32),
        stateRootAfter: '0x' + 'ff'.repeat(32),
      },
    };
  }

  verify(proof) {
    return {
      valid: true,
      verifiedAt: Date.now(),
      proofId: proof.proofId,
    };
  }
}

export default MockProver;
