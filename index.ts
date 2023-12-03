// Same issue with `spawnSync`
Bun.spawn(['bun', './timeout.ts'], {
  stdio: ['pipe', 'inherit', 'inherit'],
})
