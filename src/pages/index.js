import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="DataRookies Learning Portal Docusaurus Site">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <p><img src="/DataRookiesLearningPortal/img/cover.png" alt="image" /></p>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/overview')}>
              Start Learning!
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
        }}>
          <div>
            <h1 id="overview">Welcome!</h1>
            <p>
              Welcome to the Learning Portal provided by the DataRookies community!
              This is one of 3 hubs where you can interact with the community:
            </p>
            <ol>
              <li><p>
                <strong>The Learning Portal (YOU ARE HERE!):</strong> You can 
                find links to tutorials and classes to help build your data skills.
              </p></li>
              <li><p><a href="https://fb.me/datarookies">
                <strong>The Facebook Page:</strong></a> You can get information
                 on events - such as meetups - and community announcements 
                 (This is open to everyone!)
              </p></li>
              <li><p><a href="https://join.slack.com/t/datarookies/shared_invite/enQtNTE0NzE5NjY0Mjc0LWMwMTA4ODAxMjU2ZmI0NjdjNmExYTdjZGJlMTQ2NDcxZDhjNzk0MThjNDUzY2VhODk3MmM4NTIyMmRmOGYwZjI">
                <strong>The Slack Community:</strong></a> You can interact with
                 the community, talk about anything under the Data sun, and get
                  the latest updates.
              </p></li>
            </ol>
            <p>
              You don't really need to visit or join everything, feel free to 
              just join which works for you.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
