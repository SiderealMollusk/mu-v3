

// Template config for the logging.stdout domain
// This file will be rendered into config.ts using environment variables

export const NATS_USERNAME = "${NATS_LOGGING_STDOUT_USERNAME}";
export const NATS_PASSWORD = "${NATS_LOGGING_STDOUT_PASSWORD}";
export const NATS_HOST = "${NATS_LOGGING_STDOUT_HOST:-localhost}";
export const NATS_PORT = "${NATS_LOGGING_STDOUT_PORT:-4222}";
export const NATS_URL = `nats://${NATS_HOST}:${NATS_PORT}`;