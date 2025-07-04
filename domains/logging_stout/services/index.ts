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

  const sub = nc.subscribe('>');
  console.log('Listening to all NATS subjects...');

  for await (const msg of sub) {
    console.log(`[${msg.subject}] ${sc.decode(msg.data)}`);
  }
}

main().catch((err) => {
  console.error('Fatal error in logging_stout:', err);
});
