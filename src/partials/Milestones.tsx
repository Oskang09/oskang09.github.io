import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  GradientText,
  Section,
} from 'astro-boilerplate-components';

type IMilestonesProps = {
  milestones: MarkdownInstance<IFrontmatter>[];
};

const Milestones = (props: IMilestonesProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Milestones</GradientText>
        </div>

        <div className="text-sm">
          <a href="/projects/">View all Milestones →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.milestones} />
  </Section>
);

export { Milestones };
