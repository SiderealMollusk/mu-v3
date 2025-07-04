import * as config from '../config';
import { connectWithCredentials } from '../../shared/nats/client';
import { NatsMessageListener } from '../adapters/inbound/NatsMessageListener';
import { NatsLogEmitter } from '../adapters/outbound/NatsLogEmitter';
import { BasicLogHandler } from '../core/BasicLogHandler';

async function main() {
  const nc = await connectWithCredentials(
    config.NATS_HOST,
    config.NATS_USERNAME,
    config.NATS_PASSWORD
  );

  const emitter = new NatsLogEmitter(nc);
  const handler = new BasicLogHandler(emitter);
  const listener = new NatsMessageListener(nc, handler);

  console.log('!!!—!!!');
  console.log('Listening to mock.> and logs.> subjects...');

  await listener.listen(['mock.>', 'logs.>']);
}

main().catch((err) => {
  console.error('Fatal error in logging_stout:', err);
});
