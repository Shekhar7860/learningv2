
const ActivityListFun = () => {
    
    const list = [
        {
            preview: 'https://lh3.googleusercontent.com/huckKGNXG7us6XuES0grg7L6Yy3v02d5KmRBzWRjejde1TPmhRYyoFwcEpO4bhW9bZj_6DbC1SgLLczA8t3UShmn-unwbo8cEV0P=s250',
            title: 'Lusky Start Wars card back animation',
            category: 'LISTING',
            userThumb: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100',
            userId: 'pigAndNick AKA MI',
            eth: 0.5,
            time: 2
        },
        {
            preview: 'https://lh3.googleusercontent.com/d7JyJhj1RSdUd--A9AqrBEIOYHO8sr6C-K9PRcHSbhRnYgxaGGo1qsyUxuQKVaiZx6q8f17fAWBkswbAJdggsJ79VTiIMeh8L5h1hQ=s250',
            title: 'Genesis (Rari Collection)',
            category: 'PURCHASE',
            userThumb: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100',
            userId: 'pigAndNick AKA MI',
            from : 'Bandy Warhol',
            fromThum: "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmVLTm58sVx8Nn6fbHeLKDMgC5Eg9EkH6uQZcYT7Caz1BD&w=100",
            eth: 0.005,
            time: 1
        },
        {
            preview: 'https://lh3.googleusercontent.com/dmO_RPpAXzTsGRpl26V9rg-jRNVO_P3dBTdQLT_M8mlTFcGUquJSjObMGp0RExuH71Z6ecVUs1xZya72I4Cr6AAK=s250',
            title: 'Synthetic whiskey',
            category: 'SALE',
            userThumb: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmaHvviVsAFgZybGefy3pBQWWmJaivSUHVWcQ2FoVYuqxX&w=100',
            userId: 'SupuJazzu',
            eth: 0.9,
            from : 'Bandy Warhol',
            fromThum: "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmVLTm58sVx8Nn6fbHeLKDMgC5Eg9EkH6uQZcYT7Caz1BD&w=100",
            time: 2
        },
        {
            preview: 'https://lh3.googleusercontent.com/EKC5quK7j7ZbKnh9UPY1v_uxDR-QqoFUANpETiWySizRpMOUTeidcvB50dN6Otv3RsTJTgxR6ChXkylXRNPpTvM=s250',
            title: 'Reb bull',
            category: 'TRANSFER',
            userThumb: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100',
            userId: 'pigAndNick AKA MI',
            to: "Fiends World",
            toThumb: "https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmXz5iR8JtRks4hjZSBbvNM1dc1zdPk2v14FpkMY277Tn3&w=100",
            eth: null,
            time: 6
        },
        {
            preview: 'https://lh3.googleusercontent.com/NDg--e77DV72IwYdPhz1knjNmmY_cpsJhVgHEf0BH1UdoxadxjLOTfKKpTZlWsMhBUPHhMiADpJ-wce4Zsk6so1OL_LGBu6w6N1v=s250',
            title: "Symbios 'DOG'",
            category: 'BURN',
            userThumb: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100',
            userId: 'pigAndNick AKA MI',
            eth: null,
            time: 9
        },
        {
            preview: 'https://lh3.googleusercontent.com/JMbnvdpAXi9RRpZFKvtwWb3VmWdSaHaDgRV2lMomlx8uGsOxx1ziJYPhDVA_DA2rvWS7u0cRsGn01UjR9aeqUEW7Yg=s250',
            title: 'Litecoin - Chanel Ledger X',
            category: 'BID',
            userThumb: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100',
            userId: 'pigAndNick AKA MI',
            eth: 0.001,
            time: 19
        },
        {
            preview: 'https://lh3.googleusercontent.com/u8mdlvKtU2LcirdcmCRq8qWkiLskNH2eK7aLaPuEx8OmH_3D8Tq5cY07ZgRKfWGzH_DmEqn-MqZq3vRKkFBDoneTMRwa58N0-eQE5w8=s250',
            title: 'Feed Me, I want to eth',
            category: 'LIKE',
            userThumb: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=100',
            userId: 'pigAndNick AKA MI',
            eth: null,
            time: 4
        },
        {
            preview: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmV4Z22SMcfg1qHvuBMyAG3qwrxyCLRwiqQsdXBConUQeW&w=240',
            title: 'pigAndNick AKA MI',
            category: 'FOLLOWING',
            userThumb: 'https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmX8UWY1ax6veW3yjqCuZMLNootGYwng45KYwRusdzqWZX&w=100',
            userId: 'Juliac',
            eth: null,
            time: 8
        },
    ]

    return {list}
}

export default ActivityListFun
