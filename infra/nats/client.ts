import { connect, NatsConnection } from 'nats';

/**
 * Connects to a NATS server using environment variable keys.
 * Expected pattern: NATS_[DOMAIN]_URL, NATS_[DOMAIN]_USERNAME, NATS_[DOMAIN]_PASSWORD
 */
export async function connectWithEnvVars(
  urlKey = 'NATS_URL',
  userKey = 'NATS_USERNAME',
  passKey = 'NATS_PASSWORD'
): Promise<NatsConnection> {
  const servers = process.env[urlKey];
  const user = process.env[userKey];
  const pass = process.env[passKey];

  if (!servers || !user || !pass) {
    throw new Error(`Missing NATS env vars: ${urlKey}, ${userKey}, ${passKey}`);
  }

  return connect({ servers, user, pass });
}

/**
 * Connects to a NATS server using direct credential input.
 */
export async function connectWithCredentials(
  servers: string,
  user: string,
  pass: string
): Promise<NatsConnection> {
  return connect({ servers, user, pass });
}