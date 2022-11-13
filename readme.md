# DenoTest

## Versions  

`deno --vesion`  

deno 1.27.1 (release, x86_64-unknown-linux-gnu)  
v8 10.8.168.4  
typescript 4.8.3  

## Run  

srcディレクトリに移動
`cd src`  

Denoは標準でファイル、ネットワーク、環境変数等にアクセスできないセキュアな設定なのでオプションを付与して実行  

ネットワークにアクセスするために`--allow-net`を付与  
`deno run --allow-net main.ts`  

ファイルの読み込みを許可するために`--alow-read`を付与  
`deno run --allow-read read.ts`  

ファイルの書き込みを許可するために`--alow-write`を付与  
`deno run --allow-write write.ts`  