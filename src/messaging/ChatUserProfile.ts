import { UnifiedModel } from "../common";

export interface ChatUserProfile extends UnifiedModel {
    // Fundamental attributes
    name: string;
    userId: string; // Unique identifier for the user provided by the client

    // conditional attributes
    primaryAvatarUrl: string;
    lastActive?: string;
    joined: Date; // the time when this user joined this particular chat
    publicKey: any; // Public key for e2e encryption
}
