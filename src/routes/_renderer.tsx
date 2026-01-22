// src/routes/_renderer.tsx
import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'

export default jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Library Manager</title>
        <Link href="/src/style.css" rel="stylesheet" />
        <Script src="/src/client.tsx" />
      </head>
      <body>{children}</body>
    </html>
  )
})