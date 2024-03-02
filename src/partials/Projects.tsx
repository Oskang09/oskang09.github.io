import type { MarkdownInstance } from 'astro';
import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';
import type { IProjectFrontMatter } from 'src/types/IProjectFrontMatter';

type IProjectsProps = {
  projects: MarkdownInstance<IProjectFrontMatter>[];
};

const Projects = (props: IProjectsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Featured <GradientText>Projects</GradientText>
        </div>
        <div className="text-sm">
          <a href="/projects/">View all Projects →</a>
        </div>
      </div>
    }
  >
    <div className="flex flex-col gap-6">
      {props.projects.map((project) => {
        const fm = project.frontmatter;
        return (
          <Project
            name={fm.title}
            description={fm.description}
            link={project.url!}
            img={{ src: fm.imgSrc, alt: fm.imgAlt }}
            category={
              <>
                <Tags color={ColorTags.SLATE}>{fm.pubDate.slice(0, 7)}</Tags>
              </>
            }
          />
        );
      })}
    </div>
  </Section>
);

export { Projects };
