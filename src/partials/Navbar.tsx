import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

type INavbarProps = {
  url: URL;
};

const Navbar = (props: INavbarProps) => {
  return (
    <Section>
      <NavbarTwoColumns>
        {props.url.pathname !== '/' ? (
          <a href="/">
            <Logo
              name="Oska Ng"
              icon={
                <img
                  className="mr-2 h-8 w-8"
                  src="/assets/images/avatar.svg"
                  alt="avatar image"
                  loading="lazy"
                />
              }
            />
          </a>
        ) : (
          <div></div>
        )}
        <NavMenu>
          <NavMenuItem href="/games/">Games</NavMenuItem>
          <NavMenuItem href="/events/">Events</NavMenuItem>
          <NavMenuItem href="/projects/">Projects</NavMenuItem>
          <NavMenuItem target="_blank" href="/assets/pdf/resume.pdf">
            Resume
          </NavMenuItem>
        </NavMenu>
      </NavbarTwoColumns>
    </Section>
  );
};

export { Navbar };
