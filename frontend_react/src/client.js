import { createClient } from "@sanity/client";
import  ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: '0p6dfkv7',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: process.env.PROJECT_TOKEN
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)