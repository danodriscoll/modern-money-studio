import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Government Money Model',
    Svg: require('@site/static/img/prompt_icon.svg').default,
    description: (
      <>
        View the <Link to="/docs/category/early-models">early models</Link> or head to the latest model, <Link to="/docs/category/abmlp-x">ABMLP-X</Link>. Peruse evolving <Link to="/blog/tags/agent-logic">agent logic</Link>.
      </>
    ),
  },
  {
    title: 'Data Analysis Tools',
    Svg: require('@site/static/img/ai_icon.svg').default,
    description: (
      <>
        An overview of the <Link to="/docs/category/tools">tools</Link> used to analyse both model and real-world economic time-series data.
      </>
    ),
  },
  {
    title: 'Domain Analysis Output',
    Svg: require('@site/static/img/sterling_currency_icon.svg').default,
    description: (
      <>
        A simple assortment of data <Link to="/blog/tags/analysis">analysis output</Link>.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
