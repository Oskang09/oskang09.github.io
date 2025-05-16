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
          </a>{' '}
          with expertise in modern languages, technology stacks, and frameworks
          across web, mobile, desktop, backend, and DevOps. I have extensive
          experience in the payment industry, integrating over 15 payment
          methods and architecting secure, scalable solutions. I also have
          experience with PCI DSS, ensuring compliance with security standards.
          I focus on improving developer productivity by designing efficient
          toolchains and systems, delivering optimized and scalable solutions.
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
          src="https://cdn.oskadev.com/assets/images/me.jpeg"
          alt="oska image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a target="_blank" href="https://www.linkedin.com/in/oskang09/">
            <HeroSocial
              src="https://cdn.oskadev.com/assets/images/logo-linkedin.png"
              alt="Linkedin"
            />
          </a>
          <a target="_blank" href="https://www.facebook.com/oskaszechen/">
            <HeroSocial
              src="https://cdn.oskadev.com/assets/images/logo-facebook.png"
              alt="Facebook"
            />
          </a>
          <a target="_blank" href="https://twitter.com/oska_ng">
            <HeroSocial
              src="https://cdn.oskadev.com/assets/images/logo-twitter.png"
              alt="Twitter"
            />
          </a>
          <a target="_blank" href="https://www.instagram.com/oska_0714/">
            <HeroSocial
              src="https://cdn.oskadev.com/assets/images/logo-instagram.png"
              alt="Instagram"
            />
          </a>
          <a target="_blank" href="https://steamcommunity.com/id/oskang09/">
            <HeroSocial
              src="https://cdn.oskadev.com/assets/images/logo-steam.png"
              alt="Steam"
            />
          </a>
          <a
            target="_blank"
            href="https://discordapp.com/users/140747193664536576"
          >
            <HeroSocial
              src="https://cdn.oskadev.com/assets/images/logo-discord.png"
              alt="Discord"
            />
          </a>
          <a href="mailto:inquiry@oskadev.com">
            <HeroSocial
              src="https://cdn.oskadev.com/assets/images/logo-email.png"
              alt="Email"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
