# next-css-modules-order

This is an additional repro project for https://github.com/vercel/next.js/issues/64921

## When using `next dev`, CSS Module takes precedence

```
npm install
npm run dev
```

Go to http://localhost:3000 and see the button is **blue**

## When using `next build` and `next start`, global CSS takes precedence

```
npm install
npm run build
npm run start
```

Go to http://localhost:3000 and see the button is **gray**
