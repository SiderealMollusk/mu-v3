// domains/logging_stout/adapters/outbound/NatsLogEmitter.ts

import { LogEmitter } from '../../ports/outbound/LogEmitter';
import { NatsConnection } from 'nats';

export class NatsLogEmitter implements LogEmitter {
  constructor(private nc: NatsConnection) {}

  async emit(subject: string, message: Record<string, unknown>): Promise<void> {
    const encoded = JSON.stringify(message);
    this.nc.publish(subject, new TextEncoder().encode(encoded));
  }
}