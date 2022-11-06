// Run: deno run --allow-net main.ts
// Denoは標準でファイル、ネットワーク、環境変数等にアクセスすることができないセキュアな設定なので--allow-netオプションを付与して実行
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const s = serve({ port: 8080 });

for await (const req of s) {
  req.respond({ body: "<h1>Hello Deno</h1>\n" });
}