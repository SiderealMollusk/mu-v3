/**
 * This file is rendered from the taskfile using environment variables.
 * When you copy the domain directory, this file will be replaced by a rendered version.
 *
 * This file should never contain any logic or side effects. All validation happens in the rendering taskfile.
 */

// Required environment variables
export const APP_ENV = '${APP_ENV}';
export const DEBUG = '${LOGGING_STDOUT_VERBOSE}';

export const SERVICE_NAME = 'logging_stout';
export const SERVICE_VERSION = '0.0.1';

// NATS
export const NATS_USERNAME = '${NATS_LOGGING_STDOUT_USERNAME}';
export const NATS_PASSWORD = '${NATS_LOGGING_STDOUT_PASSWORD}';
export const NATS_HOST = '${NATS_HOST}';
export const NATS_PORT = parseInt('${NATS_PORT}', 10);