# Music Vine: Upbeat Search

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Technology used

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [React Use](https://github.com/streamich/react-use)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)

I buy heavily into the Next + Typescript + Tailwind ecosystem. All the packages I've used work incredibly well with eachother. Headless UI and Heroicons, for example, are maintained by the Tailwind team.

### Why?

#### Next.js

Next.js has for many years been my go-to for React applications, due to its versatility and simple developer experience. Wether I'm statically generating a brochure site, or running complex applications with server components, Next.js allows me to quickly do both in a way that scales nicely.

#### Tailwind CSS

I've been a fan of Tailwind since it was in beta. Though jarring to look at initially it has been by far the easiest and most maintainable CSS I've ever had. The ability to easily swap out utility classes in my markup as well as have a single source of truth for my design system means even ambitious rebrand efforts are largely trivialised.

#### React Query

React Query takes all the headaches out of caching and updating data. It's largely unponionated approach to handling server state is invaluable, and handles so much out of the box that makes your app feel that much more performant and "snappy".

#### React Use

React Use a simple hooks library that contains dozens of every day hooks, I've used it in particular on this app to handle setting localStorage in a way that is almost identical to a useState hook, meaning I can treat the setting and getting of the value as normal, whilst the localStorage value is updated in the background.

#### Headless UI

Headless UI is what I would describe as an accessibility library build by the Tailwind team. It doesn't contain any styles and is completely unopinionated, but does handle the complex aria labels and other accessibility features which so many developers either forget about or get wrong. Using Headless UI ensures I'm using tried and tested accessibility best practices when building UI elements.

#### Heroicons

Heroicons is also made by the Tailwind team, and provides over 200 icons to be used for free.

## Features

- Search for tracks or SFX, using the instant-search.
- Save your favourites for later, uses localStorage so is preserved between sessions and requires no API calls.
- Accessible descriptors are sprinkled amongst the app to help visually-impaired users navigate the app.

## Improvements

- Connect a backend with TRPC and Prisma, so that users can log in and save their favourites against their account.
- Check for stale data in favourites, as currently you would need to remove it and then re-add in order to get the latest data.
- Add a preview so you can hear a short sample upon hovering.

# Node Version

Built using Node 20 - run `nvm use` to automatically switch ([Learn more](https://github.com/nvm-sh/nvm))

## Deployment

The site is deployed via Vercel.
