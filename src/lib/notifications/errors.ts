export class NotificationError extends Error {
  constructor(message: string, options?: { cause?: unknown }) {
    super(message);
    this.name = "NotificationError";
    if (options?.cause) {
      this.cause = options.cause;
    }
  }
}
