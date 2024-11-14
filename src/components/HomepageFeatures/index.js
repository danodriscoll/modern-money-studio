import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Government Money Models',
    Svg: require('@site/static/img/model_icon.svg').default,
    description: (
      <>
        The <Link to="category/early-models">early models</Link>, plus an introduction to the latest model, <Link to="/category/abmlp-x">ABMLP-X</Link>.
      </>
    ),
  },
  {
    title: 'UK-GB Perspective',
    Svg: require('@site/static/img/uk_report_icon.svg').default,
    description: (
      <>
        The model consumes UK economic time-series. View a static <Link to="/uk-gb-perspective/modern-turn">UK-GB perspective</Link>.
      </>
    ),
  },
  {
    title: 'Gilt Edged Mini',
    Svg: require('@site/static/img/gilt_edged_mini_icon.svg').default,
    description: (
      <>
        A bounded exploration of a Gilt edged domain. View a <Link to="/gilt-edged-mini">mini</Link> model development.
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
