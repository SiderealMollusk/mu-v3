// domains/logging_stout/adapters/inbound/NatsMessageListener.ts

import { NatsConnection, Subscription } from 'nats';
import { LogHandler } from '../../ports/inbound/LogHandler';

export class NatsMessageListener {
  constructor(private nc: NatsConnection, private handler: LogHandler) {}

  async listen(subjects: string[]): Promise<void> {
    for (const subj of subjects) {
      const sub: Subscription = this.nc.subscribe(subj);
      (async () => {
        for await (const msg of sub) {
          await this.handler.handle(msg);
        }
      })();
    }
  }
}