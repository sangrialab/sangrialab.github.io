import React from 'react';
import Layout from '@theme/Layout';


function About() {


  return (
    <Layout title="About">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: '20px',
          padding: '30px 10% 0 10%'
        }}>
        <img src='../../static/img/logo.svg' />
        <img src='../../static/img/creative.svg' style={{ width: 200 }} />
        <p style={{ position: 'relative', marginTop: 20, fontSize: 30 }}>
          Sangria's Lab
          <i style={{ position: 'absolute', right: -50, top: 0, fontSize: 12 }}>2020. 09</i>
        </p>
        <section className='features_src-pages-'>
          <div className="container">
            <div className='row'>
              <div className='col col--4'>
                <img src='../../static/img/concat.jpg'/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default About;