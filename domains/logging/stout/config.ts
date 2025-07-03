/**
 * This file is rendered from the taskfile using environment variables.
 * When you copy the domain directory, this file will be replaced by a rendered version.
 *
 * This file should never contain any logic or side effects. All validation happens in the rendering taskfile.
 */

// Required environment variables
export const APP_ENV = 'development';
export const DEBUG = 'true';

export const SERVICE_NAME = 'logging_stout';
export const SERVICE_VERSION = '0.0.1';

// NATS
export const NATS_USERNAME = 'logging_stout';
export const NATS_PASSWORD = 'iXJB9M8E3pSx8NtQl5UB1xwzU2JkUNE1eihU4eGUjPNOziNrqo';
export const NATS_HOST = 'localhost';
export const NATS_PORT = parseInt('4222', 10);