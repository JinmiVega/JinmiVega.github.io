import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Microsoluciones',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Soluciones rápidas y efectivas para problemas específicos. Automatiza tareas repetitivas y optimiza procesos con macros y herramientas a medida. ¡Descubre cómo pequeños cambios pueden hacer una gran diferencia!
      </>
    ),
  },
  {
    title: 'Desarrollos personalizados',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Creamos software a la medida de las necesidades de tu negocio. Desde aplicaciones simples hasta sistemas más complejos, diseñamos soluciones tecnológicas que impulsan tu crecimiento y eficiencia.
        
       
      </>
    ),
  },
  {
    title: 'Aprende Conmigo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Explora tutoriales y guías paso a paso para aprender a dominar herramientas tecnológicas, automatizaciones y desarrollo de software. Acompáñame en este viaje de aprendizaje continuo.
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
      <div className="text--center padding-horiz--md">
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
