

import * as dotenv from 'dotenv';
dotenv.config();

import { connect, StringCodec } from 'nats';

async function main() {
  const server = process.env.NATS_URL || 'nats://localhost:4222';
  const subject = process.env.NATS_SUBJECT || 'mock.test';
  const sc = StringCodec();

  const nc = await connect({
    servers: server,
    user: process.env.NATS_TOOLING_USERNAME,
    pass: process.env.NATS_TOOLING_PASSWORD,
  });
  console.log(`🔌 Connected to ${server}`);

  const message = { hello: 'world', timestamp: new Date().toISOString() };
  const payload = sc.encode(JSON.stringify(message));

  nc.publish(subject, payload);
  console.log(`📤 Sent message to "${subject}":`, message);

  await nc.drain();
}

main().catch((err) => {
  console.error('❌ Error emitting mock message:', err);
  process.exit(1);
});