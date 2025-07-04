// domains/logging_stout/ports/inbound/LogHandler.ts

import { Msg } from 'nats';

export interface LogHandler {
  handle(msg: Msg): Promise<void>;
}