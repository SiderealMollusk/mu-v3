

// Generic message envelope used across domains via NATS
export interface NatsMessage<T = any> {
  type: string;
  data: T;
  metadata?: MessageMetadata;
}

// Example: Shared metadata format used by domains
export interface MessageMetadata {
  requestId?: string;
  correlationId?: string;
  source?: string;
  timestamp: string; // ISO 8601 format
}
