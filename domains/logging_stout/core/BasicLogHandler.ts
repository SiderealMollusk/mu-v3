import { Msg } from 'nats';
import { LogHandler } from '../ports/inbound/LogHandler';
import { LogEmitter } from '../ports/outbound/LogEmitter';

export class BasicLogHandler implements LogHandler {
  constructor(private readonly emitter: LogEmitter) {}

  async handle(msg: Msg): Promise<void> {
    const subject = msg.subject;
    const data = this.safeJsonParse(msg.data);
    const sender = msg.headers?.get('sender') || 'unknown';

    if (subject.startsWith('logs.')) {
      console.log(`[${subject}] from ${sender}: ${JSON.stringify(data)}`);
    } else {
      await this.emitter.emit('logs.received', {
        subject,
        sender,
        payload: data,
        timestamp: new Date().toISOString(),
      });
    }
  }

  private safeJsonParse(data: Uint8Array): unknown {
    try {
      return JSON.parse(new TextDecoder().decode(data));
    } catch {
      return new TextDecoder().decode(data);
    }
  }
}