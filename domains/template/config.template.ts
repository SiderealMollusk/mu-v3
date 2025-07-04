/**
 * This file is rendered from the taskfile using environment variables.
 * When you copy the domain directory, this file will be replaced by a rendered version.
 *
 * This file should never contain any logic or side effects. All validation happens in the rendering taskfile.
 */

// Required environment variables
export const APP_ENV = '${APP_ENV}';
export const DEBUG = '${DEBUG}';

export const SERVICE_NAME = 'template';
export const SERVICE_VERSION = '0.0.1';

// Common expected but optional patterns

// NATS
// export const NATS_USERNAME = '${NATS_TEMPLATE_USERNAME}';
// export const NATS_PASSWORD = '${NATS_TEMPLATE_PASSWORD}';
// export const NATS_HOST = '${NATS_HOST}'; // shared default
// export const NATS_PORT = parseInt('${NATS_PORT}', 10);
