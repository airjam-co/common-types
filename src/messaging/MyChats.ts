import { UnifiedModel } from "../common";

export interface MyChats extends UnifiedModel {
    // Fundamental attributes
    userId: string; // Unique identifier for the user provided by the client
    chatIds: string[]; // list of chats I am a member of (if you leave a chat it won't show up on this list)
    archivedIds: string[]; // list of chats I've archived, might not return *every chat the user archived or left
}
