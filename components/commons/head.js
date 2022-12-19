import Head from 'next/head';

const HEAD = ({ title, descriptionContent, keywordsContent }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={descriptionContent} />
        <meta name='keywords' content={keywordsContent} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  );
};

HEAD.defaultProps = {
  title: 'Jofwit Solution',
  descriptionContent: 'Official Website of Jofwit Solution',
  keywordsContent: 'Jofwit Solution',
};

export default HEAD;
