# ZK Rollup Simulator

A minimal educational implementation of a ZK rollup — not production-ready, just a learning tool.

## What this is

This repo walks through how a ZK rollup works at a high level: batching transactions, generating proofs off-chain, and verifying them on-chain. It is not a real rollup and should not be used for anything beyond experimentation.

## Structure

```
src/
  prover/        Mock prover implementation
  verifier/      Simple on-chain verifier logic
  batcher/       Transaction batching utilities
  utils/         Helpers and types
tests/           Unit tests for each module
```

## Running it

```bash
npm install
npm run build
npm test
```

## Caveats

- Proofs are mocked — no real cryptography
- No network code, everything runs locally
- State management is simplified for clarity

If you want to extend this, start by swapping the mock prover for a real backend (e.g. Halo2, Plonky2) and wiring up a real deployment.

## License

MIT