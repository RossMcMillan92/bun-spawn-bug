# bun-spawn-bug

## To replicate:

```bash
bun install
bun run start
```

Note the counter going up. Now open index.ts and save to trigger a refresh via `--watch` flag.

Note two timers, one from previous process which hasn't been killed.