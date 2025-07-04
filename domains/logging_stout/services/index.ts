import * as config from '../config';
import { connectWithCredentials } from '../../shared/client';
import { StringCodec } from 'nats';

async function main() {
  console.log("!!!--!!!");

  const nc = await connectWithCredentials(
    config.NATS_HOST,
    config.NATS_USERNAME,
    config.NATS_PASSWORD);
  const sc = StringCodec();

  const sub = nc.subscribe('mock.>');
  const logSub = nc.subscribe('logs.>');
  console.log('Listening to all NATS subjects...');

  (async () => {
    for await (const msg of sub) {
      const data = sc.decode(msg.data);
      const sender = msg.reply || 'unknown';
      console.log(`[${msg.subject}] from ${sender}: ${data}`);
    }
  })();

  (async () => {
    for await (const msg of logSub) {
      const data = sc.decode(msg.data);
      const sender = msg.reply || 'unknown';
      console.log(`[${msg.subject}] from ${sender}: ${data}`);
    }
  })();
}

main().catch((err) => {
  console.error('Fatal error in logging_stout:', err);
});
