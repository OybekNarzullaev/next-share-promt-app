## Data fetching

1. Server Side Rendering (SSR)
2. Static Site Generation (SSG)
3. Incremental Static Generation (ISG)

## API Routes

1. Do not use page.ts and route.ts in same folder

## SEO

1. Static Metadata

```js
export const metadata = {
  title: "home",
};
```

2. Dynamic metadata

```js
export async function generateMetaData({ params, searchParams }) {
  const product = await getProducts(params.id);
  return { title: product.name };
}
```
