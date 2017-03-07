import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import stylesheet from '../css/style.scss';


export default class MyDocument extends Document {
  static getInitialProps ({renderPage}) {
    const {html, head} = renderPage();
    const styles = flush();
    return {html, head, styles};
  }

  render () {
    return (
     <html>
      <Head>
        <link href='static/img/favicon-96x96.png' rel='icon' sizes='96x96' type='image/png' />

        <link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ' crossOrigin='anonymous' />
        <script src='https://code.jquery.com/jquery-3.1.1.slim.min.js' integrity='sha256-/SIrNqv8h6QGKDuNoLGA4iret+kyesCkHGzVUUV0shc=' crossOrigin='anonymous'></script>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
      </Head>
      <body>
        <Navigation />
          <div className='wrapper'>
            {this.props.customValue}
            <Main />
            <NextScript />
          </div>
        <Footer />
        <script src='https://use.fontawesome.com/51e4c67288.js' type='text/javascript' />
        <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js' integrity='sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn' crossOrigin='anonymous'></script>
      </body>
    </html>
    );
  }
}
