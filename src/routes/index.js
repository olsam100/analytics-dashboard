import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export { default as Dashboard } from 'routes/dashboard/index'
