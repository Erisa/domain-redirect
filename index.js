addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url);
    const map = require("./domainMaps.json");

    if (url.hostname in map){
        url.hostname = map[url.hostname];
        return new Response(null, { status: 302, headers: { Location: url.href } })
    } else {
        return new Response("404, this domain is not configured", {
            status: 404,
            headers: {
                "content-type": "text/plain"
            }
        });
    }
}
