import { rest } from 'msw';

const handlers = [
  rest.get('/product', (req, res, ctx) =>
    res(ctx.json({ Product: { id: 1337, title: 'Shiba Snow Coat' } }))
  ),
];

export default handlers;
