import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Oska Ng</GradientText> 👋
        </>
      }
      description={
        <>
          A passionate <span className="text-cyan-400">Software Engineer</span>{' '}
          &{' '}
          <a
            target="_blank"
            href="https://www.linkedin.com/posts/oskang09_softwarearchitecture-architecture-activity-7077308815137779712-5bv0"
            className="text-cyan-400 hover:underline"
          >
            Software Architect
          </a>
          . With a deep understanding of modern languages, technology stacks,
          and frameworks, I am well-versed in Dart, C#, Kotlin/Java, JavaScript,
          and Go. My enthusiasm for technology extends to various domains,
          including web, mobile, desktop, backend, and DevOps.
          <br />
          <br />
          <p>
            (☞ ͡° ͜ʖ ͡°)☞ Interested in grabbing coffee? Connect with me through
            the following socials!
          </p>
          <hr className="my-3 h-1 rounded border-0 bg-gray-200 dark:bg-gray-700" />
          Embedded at{' '}
          <a
            target="_blank"
            className="text-cyan-400 hover:underline"
            href="https://github.com/Oskang09"
          >
            Engineer Lead ( Payment )
          </a>{' '}
          @{' '}
          <a
            target="_blank"
            className="text-cyan-400 hover:underline"
            href="https://feedme.ai/"
          >
            FeedMe
          </a>
        </>
      }
      avatar={
        <img
          className="mt-8 h-64 w-64 rounded-lg"
          src="https://directus.superapp.my/assets/d8a83969-b502-43b6-b14d-9cd0b57aaf2d.jpeg"
          alt="oska image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a target="_blank" href="https://www.linkedin.com/in/oskang09/">
            <HeroSocial src="/assets/images/logo-linkedin.png" alt="Linkedin" />
          </a>
          <a target="_blank" href="https://www.facebook.com/oskaszechen/">
            <HeroSocial src="/assets/images/logo-facebook.png" alt="Facebook" />
          </a>
          <a target="_blank" href="https://twitter.com/oska_ng">
            <HeroSocial src="/assets/images/logo-twitter.png" alt="Twitter" />
          </a>
          <a target="_blank" href="https://www.instagram.com/oska_0714/">
            <HeroSocial
              src="/assets/images/logo-instagram.png"
              alt="Instagram"
            />
          </a>
          <a target="_blank" href="https://steamcommunity.com/id/oskang09/">
            <HeroSocial src="/assets/images/logo-steam.png" alt="Steam" />
          </a>
          <a
            target="_blank"
            href="https://discordapp.com/users/140747193664536576"
          >
            <HeroSocial src="/assets/images/logo-discord.png" alt="Discord" />
          </a>
          <a href="mailto:inquiry@oskadev.com">
            <HeroSocial src="/assets/images/logo-email.png" alt="Email" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
