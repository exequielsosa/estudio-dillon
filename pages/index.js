import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Estudio Contable Dillon - Home</title>
        <meta name="description" content="La mejor atención y asesoramiento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>Este es mi hogar</p>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
