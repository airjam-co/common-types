import { MessageCore } from "./MessageCore";

export interface PinnedMessage extends MessageCore {
    // Fundamental attributes
    messageId: string; // id of the original message being pinned
    pinnedBy: string; // id of the person pinning
    expiry?: Date; // (optional) Pin expires after this date
}
