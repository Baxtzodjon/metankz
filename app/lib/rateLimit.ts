const requests = new Map<string, number>();

export function rateLimit(ip: string, limitMs = 60_000) {
    const now = Date.now();
    const lastRequest = requests.get(ip);

    if (lastRequest && now - lastRequest < limitMs) {
        return false;
    }

    requests.set(ip, now);
    return true;
}
