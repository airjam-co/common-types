import { UnifiedModel } from "../common";
import { ChatType } from "./ChatType";
import { ChatVisibility } from "./ChatVisibility";
import { PinnedMessage } from "./PinnedMessage";

export interface ChatCore extends UnifiedModel {
    // Use by the system mostly
    archived: boolean;
    componentId: string; // ID of the component this chat belongs to

    // Fundamental attributes, mostly shown to anyone
    chatType: ChatType;
    uniqueHandle: string; // Used if users can search for channels using handle (ie hashtags)

    // 1 ----------- shown to owners only
    owners: string[]; // IDs of the owners of this chat. Members of this group can make changes to this chat itself

    // 2 ----------- shown to regular members only
    members: string[]; // Not a disjoint set of IDs of the members of this chat group. Members of this group can normally just view and post messages

    // 3 ----------- shown to viewers of this chat only
    viewers: string[]; // Not a disjoint set of ID of the members who can only view this chat

    // 4 ----------- shown to anyone if this chat is open
    memberCount: number; // Used primarily for chats with big number of members
    visibility: ChatVisibility; // Visibility to different groups of users
    title?: string; // common title of the chat
    description: string; // description of the chat, mostly used for open groups
    defaultLocale?: string;
    pinnedMessages: PinnedMessage[];
    announcement?: any; // Shared message shown on top of the chat window -- only admins should be able to change this

    // TODO: payments monthly, one-time payment options
    // TODO: Enabled apps (for rendering content, reacting to replies using workflows, etc)
    // TODO: Enabled widgets (context aware widgets to show: eg. genmoji, weather, translations, video conferencing, metaverse, etc)
    // TODO: add things like list of attachments, files, videos, photos, links
    // TODO: events made for this group
}
