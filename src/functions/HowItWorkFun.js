const HowItWorkFun = () => {
  const items = {
    Marketplace: [
      {
        title: "NFT? ERC-721 tokens?",
        text:
          "NFT stands for non-fungible tokens like ERC-721 (a smart contract standard) tokens which are hosted on Ethereum’s own blockchain. NFTs are unique digital items such as collectibles or artworks or game items. As an artist, by tokenizing your work you both ensure that it is unique and brand it as your work. The actual ownership is blockchain-managed. If you want to go in-depth into NFTs, I suggest this read: [https://opensea.io/blog/guides/non-fungible-tokens/](https://opensea.io/blog/guides/non-fungible-tokens/)",
      },
      {
        title: "What does “minting” mean?",
        text:
          "The process of tokenizing your work and creating an NFT (see above).",
      },
      {
        title: "Can I create an NFT on rarible.com without putting it on sale?",
        text:
          "Yes, you can and it is up to you if you decide to sell it later or not.",
      },
      {
        title: "Can I change the price of an already created collectible?",
        text:
          "Absolutely, you can lower the price free of transaction costs at any time. You just need to sign the signature request via your wallet.",
      },
      {
        title: "Can I gift or send a collectible to someone?",
        text:
          "Yes, just go on the detail page of a collectible you own, open the “...” menu and select “transfer token”",
      },
      {
        title: "What does “burn a token” mean?",
        text:
          "The ERC-721 standard does not only allow the creation of NFTs, but also includes a possibility to destroy them - i.e. burning the token.",
      },
    ],
    Governance: [
      {
        title: "What is Rarible governance system? How does it work?",
        text: "The ultimate goal of Rarible is to evolve into a fully Decentralized Autonomous Organization (DAO), where all governance and decision rights belong to the platform users. By providing creators and collectors with the opportunity to propose and vote on platform upgrades, we make sure that the platform becomes a public good, responsive directly to its community members. On Rarible, you have a voice, and your voice is heard."
      },
      {
        title: "I’m a Rarible user. Can I share my idea/proposal?",
        text: "We encourage self expression on any matter: whether you have an idea or a concern, if you want to support a project or disagree with others — share, express, and push it. Every opinion is counted, heard and valued. You can learn more about your rights here."
      },
      {
        title: "I have an idea. Where should I start?",
        text: "Got an idea? Awesome –– now, go advocate! Initiate a discussion in [Rarible Discord](https://discord.com/invite/JYSup3g), in [Rarible Telegram](https://t.me/rarible) and [Twitter](https://twitter.com/rariblecom). Convince other participants to support you, get them to express their voice & upvote. Hear feedback. Make sure that your proposal will make the platform better for everyone."
      },
      {
        title: "How to submit my proposal?",
        text: "Got an idea? Awesome –– now, go advocate! Initiate a discussion in Rarible Discord, in Telegram and Twitter. Convince other participants to support you, get them to express their voice & upvote. Hear feedback. Make sure that your proposal will make the platform better for everyone."
      }
    ]
  };

  return { items };
};

export default HowItWorkFun;
