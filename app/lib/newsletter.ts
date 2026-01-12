import { kv } from "@vercel/kv";

export async function subscribeEmail(email: string) {
    const key = `newsletter:${email.toLowerCase()}`;

    const exists = await kv.get(key);
    if (exists) {
        return { isNew: false };
    }

    await kv.set(key, true);
    return { isNew: true };
}
