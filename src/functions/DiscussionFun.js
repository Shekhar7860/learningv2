import { useState } from "react"
import NewBadge from '../assets/svg/new.svg'
import PromotBadge from '../assets/svg/megaphone.svg'
import EnthuBadge from '../assets/svg/transparency.svg';
import AppreBadge from '../assets/svg/like.svg';
import { Tag, Space, Avatar } from 'antd';

const DiscussionFun = () => {

    const items = [
        {
            title: 'All Categories',
            para: "General community discussion topics and posts",
            sub: "93 / week"
        },
        {
            title: 'General Community',
            para: "General community discussion topics and posts",
            sub: "93 / week"
        },
        {
            title: "DAO Governance",
            para: "Discussion around DAO Governance, token incentives, proposal ideas, governance process, DAO focus areas and growth strategies, how to participate in the DAO, etc.",
            sub: "7 / week"
        },
        {
            title: "Site Feedback",
            para: "Discussion around DAO Governance, token incentives, proposal ideas, governance process, DAO focus areas and growth strategies, how to participate in the DAO, etc.",
            sub: "7 / week"
        },
        {
            title: "Technical upgrades",
            para: "Discussion around DAO Governance, token incentives, proposal ideas, governance process, DAO focus areas and growth strategies, how to participate in the DAO, etc.",
            sub: "7 / week"
        },
        {
            title: "Platform development / new features",
            para: "Discussion around DAO Governance, token incentives, proposal ideas, governance process, DAO focus areas and growth strategies, how to participate in the DAO, etc.",
            sub: "7 / week"
        },
        {
            title: "Moderation",
            para: "Discussion around DAO Governance, token incentives, proposal ideas, governance process, DAO focus areas and growth strategies, how to participate in the DAO, etc.",
            sub: "7 / week"
        },
        {
            title: "Uncategorized",
            para: "Discussion around DAO Governance, token incentives, proposal ideas, governance process, DAO focus areas and growth strategies, how to participate in the DAO, etc.",
            sub: "7 / week"
        },
    ]


    const latestItems = [
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
        {
            topic: "Rarible Verification Request",
            community: "Technical upgrades",
            count: [
                { img: 'https://gov.rarible.com/letter_avatar_proxy/v4/letter/r/ee7513/25.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/dany/25/4340_2.png'},
                { img: 'https://gov.rarible.com/user_avatar/gov.rarible.com/coconutespresso/25/2407_2.png'},
            ],
            replies: "12",
            views: "23",
            activity: "12m"
        },
    ]

    const searchItems = [
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone, funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone, image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone, funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone,  funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone, funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone, funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone,funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone, funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone, funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
        {
            title: "Hello. New here",
            profile: "https://gov.rarible.com/user_avatar/gov.rarible.com/mistermisfortune/45/4282_2.png",
            para: "7d - Hello Everyone, funds to be able to become a full time artist and list all of my 3D models. Hello world, my name is makemorelove and I'm partnered twitch streamer image My name is Mister Misfortune. I am leader of the band “Hero and the Terror” (our album streams on all digital platforms) and I am also",
            comm: "General Community"
        },
    ]

    const badgeItems = {
        "Getting Started": [
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
            {
                title: "Autobiographer",
                badge: NewBadge,
                para: "Filled out profile information",
                count: "466"
            },
        ],
        "Community": [
            {
                title: "Appreciated",
                para: "Received 1 like on 20 posts",
                count: '51',
                badge: AppreBadge
            },
            {
                title: "Enthusiast",
                para: "Visited 10 consecutive days",
                count: '92',
                badge: EnthuBadge
            },
            {
                title: "Nice Share",
                para: "Received 1 like on 20 posts",
                count: '51',
                badge: AppreBadge
            },
            {
                title: "Promoter",
                para: "Invited a user",
                count: '2',
                badge: PromotBadge
            },
            {
                title: "Appreciated",
                para: "Received 1 like on 20 posts",
                count: '51',
                badge: AppreBadge
            },
            {
                title: "Enthusiast",
                para: "Visited 10 consecutive days",
                count: '92',
                badge: EnthuBadge
            },
            {
                title: "Nice Share",
                para: "Received 1 like on 20 posts",
                count: '51',
                badge: AppreBadge
            },
            {
                title: "Promoter",
                para: "Invited a user",
                count: '2',
                badge: PromotBadge
            },
            {
                title: "Appreciated",
                para: "Received 1 like on 20 posts",
                count: '51',
                badge: AppreBadge
            },
            {
                title: "Enthusiast",
                para: "Visited 10 consecutive days",
                count: '92',
                badge: EnthuBadge
            },
            {
                title: "Nice Share",
                para: "Received 1 like on 20 posts",
                count: '51',
                badge: AppreBadge
            },
            {
                title: "Promoter",
                para: "Invited a user",
                count: '2',
                badge: PromotBadge
            },
        ]
    }

    const data = [
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 534,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 656,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 34,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 867,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 34,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 542,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 65,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 16,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 745,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
        {
          key: '1',
          name: 'John Brown',
          received: 308,
          given: 255,
          topics: 0,
          replies: 654,
          viewed: 156,
          read: '1.9K',
          visits: 53
        },
      ];

      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => (
              <div className="u-item-user">
                <Avatar src="https://gov.rarible.com/user_avatar/gov.rarible.com/sheratan/45/1991_2.png" />
                <p>{text}</p>
              </div>
          ),
        },
        {
          title: 'Received',
          dataIndex: 'received',
          key: 'received',
          sorter: {
            compare: (a, b) => a.received - b.received,
            multiple: 3,
          },
        },
        {
          title: 'Given',
          dataIndex: 'given',
          key: 'given',
        },
        {
          title: 'Topics',
          key: 'topics',
          dataIndex: 'topics',
        },
        {
          title: 'Replies',
          key: 'replies',
          dataIndex: 'replies',
        },
        {
          title: 'Viewed',
          key: 'viewed',
          dataIndex: 'viewed',
        },
        {
          title: 'Read',
          key: 'read',
          dataIndex: 'read',
        },
        {
          title: 'Visits',
          key: 'visits',
          dataIndex: 'visits',
        },
      ];

    const [modalVisible, setModalVisible] = useState(false);
    const [modalName, steModalName] = useState("")

    const toggleModal = (modal) => {
        setModalVisible(!modalVisible)
        steModalName(modal)
    }
    const setModal = (name) => {
        steModalName(name)
    }

    return {items, data, columns, badgeItems, setModal, latestItems, searchItems, modalName, toggleModal, modalVisible}
}

export default DiscussionFun
