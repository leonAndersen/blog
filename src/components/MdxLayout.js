import SubscribeFormOnPage from "./SubscribeFormOnPage";

export default function MdxLayout({ children }) {
  return (
    <main
      className="max-w-2xl pt-20 grow w-full mx-auto px-4 prose 
      prose-neutral prose-invert prose-pre:bg-neutral- prose-pre:-mb-4 prose-pre:-ml-4 c1:prose-pre:ml-4 prose-a:no-underline 
      hover:prose-a:underline prose-h4:font-bold prose-blockquote:bg-neutral-500"
      role="region"
      aria-label="MDX Article Layout"
    >
      {children}
      <section className="not-prose" aria-label="Subscribe Form Section">
        <SubscribeFormOnPage />
      </section>
    </main>
  );
}
