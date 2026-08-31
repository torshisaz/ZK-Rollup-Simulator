// Simplified on-chain verifier logic

export class MockVerifier {
  constructor() {
    this.verifiedProofs = new Map();
  }

  async submitProof(proof) {
    const verification = {
      proofId: proof.proofId,
      submittedAt: Date.now(),
      stateRoot: proof.publicInputs.stateRootAfter,
      txCount: proof.txCount,
    };

    this.verifiedProofs.set(proof.proofId, verification);
    return verification;
  }

  getProof(proofId) {
    return this.verifiedProofs.get(proofId) || null;
  }

  getStateRoot() {
    const proofs = Array.from(this.verifiedProofs.values());
    if (proofs.length === 0) {
      return '0x' + '00'.repeat(32);
    }
    return proofs[proofs.length - 1].stateRoot;
  }
}

export default MockVerifier;
