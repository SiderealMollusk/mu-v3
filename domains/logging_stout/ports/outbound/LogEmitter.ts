// domains/logging_stout/ports/outbound/LogEmitter.ts

export interface LogEmitter {
  emit(subject: string, message: Record<string, unknown>): Promise<void>;
}