// src/routes/index.tsx
import { createRoute } from 'honox/factory'

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'World'
  return c.render(
    <div>
      <h1>Hello, {name}!</h1>
      <p>Welcome to HonoX.</p>
    </div>,
  )
})