## Deprection notice

This project has been deprecated and archived.

I recommend you use Cloudflare's native [Bulk Redirects](https://developers.cloudflare.com/rules/bulk-redirects) or [Dynamic Redirects](https://blog.cloudflare.com/dynamic-redirect-rules/) features to redirect domains, rather than Page Rules.

You may use or fork this project if you desire, but it is not supported by me and will not recieve any updates.

The original README is below.

# Domain Redirecting with Cloudflare Workers

Easily redirect one entire domain to another with a serverless Cloudflare Worker.

All paths and other data are kept intact. The redirect served is `302 Found` (temporary redirect) to prevent cache headache if you ever change your mind.

The aim is to replace lots of Page Rules like this:
![](https://cdn.erisa.moe/firefox_ILlPFFe3Hk.png)

And instead use a simple map in `domainMaps.json`:
```json
{
    "erisa.moe": "erisa.uk",
    "erisa.wales": "erisa.uk",
    "erisa.cymru": "erisa.uk",
    "link.erisa.moe": "erisa.link",
    "cloud.erisa.moe": "erisa.cloud"
}
```

**Note**: Cloudflare Workers is a billed product with a free tier available. Page Rules are preferred if cost savings are your priority. This Worker is used to keep domain mapping centralised and to free up Page Rules for other purposes. **This is not always what you want.**

Code is provided for reference and curiosity purposes, project is only intended to be used personally by the author.  
But if you like it, you can use it!

## Usage

Required:
- Cloudflare DNS
- Wrangler (`npm i -g wrangler` or `cargo install wrangler`)

Deploy:
1. Clone the repository
2. Edit `domainMaps.json` with source/target pairs of domains to redirect.
3. `wrangler publish`

After deploying the worker, ensure that the source domain has a valid DNS record (If not, create an `AAAA` pointing to `100::`) and then head to the Workers tab. Configure `example.domain.com/*` to use your worker:

![](https://cdn.erisa.moe/firefox_lMarhsl7p0.png)

Domains that are mapped to the Worker but not listed in `domainMaps.json` will return a 404 error:
![](https://cdn.erisa.moe/firefox_jRnHX7iexY.png)


That's all! It's quite simple.
