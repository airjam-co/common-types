import { UnifiedModel } from "../common";
import { MessageContentType } from "./MessageContentType";
import { MessageStatus } from "./MessageStatus";

export interface MessageCore extends UnifiedModel {
    // used by the system
    viewCountByUser: {[userId: string]: number}; // TODO: used for visibility control, only shown to originator

    // Fundamental attributes
    message: string; // common title of the chat
    originatorId: string;
    originatingLocale: string;
    contentType: MessageContentType;
    replyTo: string; // populated if this is a reply to another message
    edited: boolean;
    status: MessageStatus;
    reactionCounts: {[reaction: string]: number};
    reacted: {[userId: string]: any[]}; // List of reactions made by specific users. The backend only returns reactions for the user him/herself

    // todo: for GDPR
    originatingJurisdiction: any; // EU, China, etc

    viewCount: number; // not always populated, main purpose is for exploding messages
}
