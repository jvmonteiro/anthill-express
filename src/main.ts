import { server } from './server/server';

const app = server();
app.listen(3000, () => {
  console.log('App listening');
});
