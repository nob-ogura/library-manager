# library-manager

公開 URL: https://library-manager.et-n-ogura.workers.dev

## 必要要件

- Cloudflare アカウント
- Bun (パッケージマネージャとして使用)

## 開発

ローカル開発サーバーを起動します。

```bash
bun run dev
```

## デプロイ手順

このプロジェクトは Cloudflare Workers にデプロイされます。

### 1. Cloudflare へのログイン

初回のみ Wrangler (Cloudflare CLI) へのログインが必要です。

```bash
bun run wrangler login
```

ブラウザが開くので、Cloudflare アカウントで認証を行ってください。

### 2. デプロイの実行

アプリケーションのビルドと Cloudflare Workers へのデプロイを一括で行います。

```bash
bun run deploy
```
