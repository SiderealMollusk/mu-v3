import { connect, NatsConnection } from 'nats';

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