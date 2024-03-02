import type {
  IFrontmatter,
  MarkdownInstance,
} from 'astro-boilerplate-components';
import type { IProjectFrontMatter } from 'src/types/IProjectFrontMatter';

import type { IMilestoneFrontMatter } from '@/types/IMilestoneFrontMatter';

export const groupTechnologies = (
  mds: MarkdownInstance<IProjectFrontMatter>[]
) => {
  const technologies: Map<string, number> = new Map();
  mds.forEach((md) => {
    if (md.frontmatter.technologies.length === 0) {
      return;
    }

    md.frontmatter.technologies.forEach((technology) => {
      let value = 0;
      if (technologies.has(technology)) {
        value = technologies.get(technology)!;
      }
      technologies.set(technology, value + 1);
    });
  });
  return technologies;
};

export const featuredMarkdown = (
  mds: MarkdownInstance<IProjectFrontMatter | IMilestoneFrontMatter>[]
) => {
  return mds.filter((md) => md.frontmatter.featured);
};

export const sortByDate = (mds: MarkdownInstance<IFrontmatter>[]) => {
  return mds.sort(
    (a, b) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  );
};
