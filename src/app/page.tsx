import { getPosts } from '@/_actions/postAction';

export default async function Home() {
  // debugger;
  const res = await getPosts();
  console.log('result: ', res);
  return (
    <main>
      <h1>Hola!</h1>
    </main>
  );
}
