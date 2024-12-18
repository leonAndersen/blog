import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    const posts = document.querySelectorAll('li');
    const handleHover = () => setNumber(Math.floor(Math.random() * 4) + 1);
    posts.forEach(post => {
      post.addEventListener('mouseleave', handleHover);
    });

    return () => {
      posts.forEach(post => {
        post.addEventListener('mouseleave', handleHover);
      });
    };
  }, []);

  return (
    <main className="mx-auto mt-0.5 max-w-2xl grow px-4 pb-12 pt-32">
      <Head>
        <title>About LeonWarscheck</title>
      </Head>

      <section>
        <p className="text- lg mb- text- balance c1:textjustify pb-">
          <span className="font- semibold">Leon Warscheck</span> is a Fullstack
          JavaScript Developer at ReactSquad. <br />
          <br />
          After studying audio engineering he discovered his passion for
          programming and became a webdeveloper. <br />
          <br />
          He is specialized in React and Node and is currently exploring Remix.
          <br />
          <br />
        </p>
        <ul
          className={`mx-auto mb-16 flex gap-4 text-neutral-200 underline-offset-2`}
          aria-label="Contact Links"
        >
          <li className="ml- auto">
            <h2
              className={`custom-border h-[22.5px] ${
                number === 1
                  ? 'hover:border-red-500 hover:text-red-500'
                  : number === 2
                    ? 'hover:border-violet-500 hover:text-violet-500'
                    : number === 3
                      ? 'hover:border-yellow-la hover:text-yellow-la'
                      : 'hover:border-emerald-la hover:text-emerald-la'
              }`}
            >
              <a href="https://github.com/leonWarscheck" className="">
                Github
              </a>
            </h2>
          </li>
          <li>
            <h2
              className={`custom-border h-[22.5px] ${
                number === 1
                  ? 'hover:border-red-500 hover:text-red-500'
                  : number === 2
                    ? 'hover:border-violet-500 hover:text-violet-500'
                    : number === 3
                      ? 'hover:border-yellow-la hover:text-yellow-la'
                      : 'hover:border-emerald-la hover:text-emerald-la'
              }`}
            >
              <a href="mailto:leon.warscheck@outlook.com" className="">
                Email
              </a>
            </h2>
          </li>
        </ul>
        <h2 className="pb-2 font-bold">Other Interests/ Skills:</h2>
        <ul className="list-disc pl-5">
          <li>Music Production,</li>
          <li>Psychology,</li>
          <li>and Media Design.</li>
        </ul>
        <hr className="mt-6" />
        <h3 className="mt-2 font-light italic">
          "True creative power is head and heart working together."
        </h3>
      </section>
    </main>
  );
}
