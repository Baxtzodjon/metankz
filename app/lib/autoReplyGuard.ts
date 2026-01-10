const sent = new Set<string>();

export function canSendAutoReply(key: string) {
    if (sent.has(key)) return false;
    sent.add(key);
    return true;
}
