export async function menu(session, { baseUrl }) {
  return await session
    .request(new URL("/menuList.js", baseUrl))
    .then((res) => res.text())
    .then((text) => {
      const chunkEvery = (n, xs, y = []) =>
        xs.length === 0
          ? y
          : chunkEvery(n, xs.slice(n), y.concat([xs.slice(0, n)]));

      return chunkEvery(6, text.slice(23, -2).split(","))
        .filter((c) => c[5] === "0")
        .map(([id]) => id.slice(1, -1));
    });
}
