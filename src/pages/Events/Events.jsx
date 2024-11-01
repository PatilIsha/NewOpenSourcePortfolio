import React from 'react';
import { Helmet } from 'react-helmet';

const Events = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Yashodip Beldar - Events</title>
        <meta name="description" content="Events I've conducted." />
        <meta property="og:title" content="Yashodip Beldar" />
        <meta property="og:description" content="Events I've conducted." />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dc6lcsahh/image/upload/v1729319938/event_hyua5o.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675524574559"
        />
        <meta property="twitter:title" content="Rakesh Potnuru" />
        <meta property="twitter:description" content="Events I've conducted." />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/dc6lcsahh/image/upload/v1729319938/event_hyua5o.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1675524574559"
        />
      </Helmet>
      <div>
        <iframe
          title="Event subscription form"
          width="100%"
          src="https://5520117e.sibforms.com/serve/MUIEADNOgxnmpDMFyDAaqbMOoIsOYWug_jgL1BPdYMnvf5SHNPMqmvFbHqLJ1_a0AM-RTTyo76bKoKCDFNEtToYQyV5jGhhaZvmR3T4XMb-zb9JzUtNBP3RH6cOYfHgGvhv26Q-HObPkl9TWuXVUrY7P2hWo9_wFibWtq0kLWzBE5o9baDIqGoarMNZALrJ4tvwfnkvk-JCjhTYB"
          frameBorder="0"
          scrolling="auto"
          allowFullScreen
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%',
            height: '100vh'
          }}
        ></iframe>
      </div>
    </React.Fragment>
  );
};

export default Events;
