import { UnifiedModel } from "../common";
import RoomJoinRules from "./RoomJoinRules";

export interface RoomCore extends UnifiedModel {
    archived: boolean;
    componentId: string; // ID of the Airjam component this chat belongs to
    primaryOwnerId: string; // who created this room?
    canonicalAlias: string;
    aliases: string[];
    roomId: string; // Identifier created by the chat server
    roomJoinRules: RoomJoinRules;

    // TODO: payments monthly, one-time payment options
    // TODO: Enabled apps (for rendering content, reacting to replies using workflows, etc)
    // TODO: Enabled widgets / workflows (context aware widgets to show: eg. genmoji, weather, translations, video conferencing, metaverse, etc)
    // TODO: events made for this group
}
