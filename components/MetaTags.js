import Head from "next/head";

const MetaTags = () => {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <title>
        SwaraLyze: Find sentiments, tags, entities, actions like a DJ 💿📍
      </title>
      <meta
        name="description"
        content="SwaraLyze lets you find sentiments, tags, entities, and actions in your voice recordings instantly."
      />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://SwaraLyze.vercel.app/" />
      <meta
        property="og:title"
        content="SwaraLyze: Find sentiments, tags, entities, actions like a DJ 💿📍"
      />
      <meta
        property="og:description"
        content="SwaraLyze lets you find sentiments, tags, entities, and actions in your voice recordings instantly."
      />
      <meta property="og:image" content="/media-card.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://SwaraLyze.vercel.app/" />
      <meta
        property="twitter:title"
        content="SwaraLyze: Find sentiments, tags, entities, actions like a DJ 💿📍"
      />
      <meta
        property="twitter:description"
        content="SwaraLyze lets you find sentiments, tags, entities, and actions in your voice recordings instantly."
      />
      <meta property="twitter:image" content="/media-card.png"></meta>
    </Head>
  );
};

export default MetaTags;
