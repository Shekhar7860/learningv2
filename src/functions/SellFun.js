const SellFun = () => {
  const infoList = [
    {
      profile:"https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmTBjFWXtcwHVbCzHciTkXgDyqjNnCvepDaZHcN3fFA23M&w=100",
      tag: "Owner",
      sub: "BakaArts",
    },
    {
      profile:
        "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmTBjFWXtcwHVbCzHciTkXgDyqjNnCvepDaZHcN3fFA23M&w=100",
      tag: "Creator",
      sub: "BakaArts",
    },
    {
      profile:
        "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmTgFdAQrfDgKpo9558jg2H8pb1Dq5UFDsYs8pxjErnphE&w=100",
      tag: "Collection(ERC721)",
      sub: "Surrogates",
    },
  ];

  const ownerList = [
    {
      profile:
        "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmTBjFWXtcwHVbCzHciTkXgDyqjNnCvepDaZHcN3fFA23M&w=100",
      tag: "1 edition available for offers",
      sub: "BakaArts",
    },
  ];

  const historyList = [
      {
          profile: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlLXdpZHRoOjAuMjsnPjxyZWN0ICB4PScxOCcgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTgnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE4JyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxNScgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjEnIHk9JzEyJyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE1JyB5PScxOCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScyMScgeT0nMTgnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTUnIHk9JzI0JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzIxJyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxMicgeT0nMTUnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjQnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PC9nPjwvc3ZnPg==",
          tag: "Offered 1 WETH for 1 edition 4 hours ago",
          sub: "by 0x1160387a3...f8e5"
      },
      {
          profile: "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmTBjFWXtcwHVbCzHciTkXgDyqjNnCvepDaZHcN3fFA23M&w=100",
          tag: "Minted 22 hours ago",
          sub: "by BakaArts"
      },
  ]

  const bidsList = [
      {
        profile: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlLXdpZHRoOjAuMjsnPjxyZWN0ICB4PScxOCcgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTgnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE4JyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxNScgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjEnIHk9JzEyJyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE1JyB5PScxOCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScyMScgeT0nMTgnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTUnIHk9JzI0JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzIxJyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxMicgeT0nMTUnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjQnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PC9nPjwvc3ZnPg==",
        tag: "1 WETH",
        sub: "by 0x1160387a3...f8e5"
      }
  ]

  return { infoList, ownerList, historyList, bidsList };
};

export default SellFun;
