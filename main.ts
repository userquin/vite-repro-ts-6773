const foo = () => import('./foo');
const bar = () => import('./bar');
const c = () => import('./c');

(async function () {
    await foo();
    await bar();
    await c();
})();
