import { GradientText, Section } from 'astro-boilerplate-components';

import technologies from './technology';

type ITechnologiesProps = {
  technologies: Map<string, number>;
};

const Technologies = (props: ITechnologiesProps) => {
  const cards: JSX.Element[] = [];
  if (props.technologies.size === 0) {
    return null;
  }

  props.technologies.forEach((value, key) => {
    const techInfo = technologies.get(key);
    if (!techInfo) {
      return;
    }

    cards.push(
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      <TechnologyCard
        data={key}
        count={value}
        title={techInfo.display}
        image={techInfo.image}
      />
    );
  });

  return (
    <Section
      title={
        <div className="flex items-baseline justify-between">
          <div>
            Experienced <GradientText>Technologies</GradientText>
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cards}
      </div>
    </Section>
  );
};

const AppliedTechnologies = (props: ITechnologiesProps) => {
  const cards: JSX.Element[] = [];
  if (props.technologies.size === 0) {
    return null;
  }

  props.technologies.forEach((value, key) => {
    const techInfo = technologies.get(key);
    if (!techInfo) {
      return;
    }

    cards.push(
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      <TechnologyCard
        data={key}
        count={value}
        title={techInfo.display}
        image={techInfo.image}
      />
    );
  });

  return (
    <div className="mb-10">
      <div>
        <h2>
          <GradientText>Technologies</GradientText>
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4">{cards}</div>
    </div>
  );
};

type ITechnologyCardProps = {
  data: string;
  title: string;
  image: string;
  count: number;
};

const TechnologyCard = (props: ITechnologyCardProps) => {
  return (
    <div className="w-full" key={props.data}>
      <a
        href={`/projects/${props.data}`}
        style={{ textDecoration: 'none !important' }}
        className="group flex items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500"
      >
        <img className="my-0 h-10" src={`${props.image}`} />
        <span className="ms-3 flex-1 whitespace-nowrap no-underline">
          {props.title}
        </span>
        {props.count > 0 && (
          <span className="ms-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            {props.count}
          </span>
        )}
      </a>
    </div>
  );
};

export { AppliedTechnologies, Technologies };
