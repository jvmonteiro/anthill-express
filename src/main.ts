import { server } from './server/server';

const app = server();

const port: Number = Number.parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
