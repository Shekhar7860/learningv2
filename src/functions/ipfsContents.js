import ipfs from "./Ipfs";
export const contents = async (product) => {
  const source = ipfs.cat(product);
  let contents = "";
  const decoder = new TextDecoder("utf-8");
  for await (const chunk of source) {
    contents += decoder.decode(chunk, {
      stream: true,
    });
  }
  contents += decoder.decode();
  return contents;
};
