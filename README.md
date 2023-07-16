@media (max-width: 768px) 

You're importing a component that needs useState. It only works in a Client Component, but none of its parents are marked with "use client", so they're Server Components by default.


by default, Next.js uses Server Components, where the JSX gets compiled to "pure HTML" and sent to the browser.

And a Server Component shouldn't contain client-specific code, for example, hooks such as useState. If you need that, you should add "use client" at the top, to make it a Client Component, which, obviously, shouldn't contain server-side stuff like metadata:


using state and props to manage component behavior, conditional rendering to show or hide content, and handling click events to trigger actions.


<//conditional rendering inspiration>
https://codesandbox.io/s/expand-animation-tailwind-wgcvb?file=/src/App.js:83-132