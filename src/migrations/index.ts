import * as migration_20250705_174438_migration from './20250705_174438_migration';

export const migrations = [
  {
    up: migration_20250705_174438_migration.up,
    down: migration_20250705_174438_migration.down,
    name: '20250705_174438_migration'
  },
];
