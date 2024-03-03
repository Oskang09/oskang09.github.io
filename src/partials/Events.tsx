import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  GradientText,
  Section,
} from 'astro-boilerplate-components';

type IEventsProps = {
  events: MarkdownInstance<IFrontmatter>[];
};

const Events = (props: IEventsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Events</GradientText>
        </div>

        <div className="text-sm">
          <a href="/events/">View all Events →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.events} />
  </Section>
);

export { Events };
