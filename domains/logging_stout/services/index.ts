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

  // Emit a heartbeat every 5 seconds
  setInterval(() => {
    const timestamp = new Date().toISOString();
    const randomTag = Array.from({ length: 5 }, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
    nc.publish('logs.heartbeat', sc.encode(`heartbeat @ ${timestamp} [${randomTag}]`));
  }, 5000);

  for await (const msg of sub) {
    const data = sc.decode(msg.data);
    const subject = msg.subject;

    if (subject.startsWith('logs.')) {
      console.log(`[${subject}] ${data}`);
    } else {
      try {
        const parsed = JSON.parse(data);
        const type = parsed.type || 'unknown';
        nc.publish('logs.received', sc.encode(`[${subject}] type: ${type}`));
      } catch {
        nc.publish('logs.received', sc.encode(`[${subject}] non-JSON message`));
      }
    }
  }
}

main().catch((err) => {
  console.error('Fatal error in logging_stout:', err);
});
