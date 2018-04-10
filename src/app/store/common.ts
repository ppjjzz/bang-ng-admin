/* 公共字典数据 */

/* 平台列表 */
export const PLATFORM_LIST = [
    {
        label: 'Banggood',
        value: 1
    },
    {
        label: 'Yoins',
        value: 2
    },
    {
        label: 'Newchic',
        value: 3
    }
];

/* 平台ID对应的配置信息 */
export interface PLATFORM {
    name: string;
    id: number;
    host: string;
}
export const PLATFORM_INFO = {
    1: {
        name: 'Banggood',
        id: 1,
        host: '/bg'
    },
    2: {
        name: 'Yoins',
        id: 2,
        host: '/ys'
    },
    3: {
        name: 'Newchic',
        id: 4,
        host: '/nc'
    }
};

/* 库存状态 */
export const STOCK_STATUS = [
    {
        label: '有货',
        value: 1
    },
    {
        label: '无货',
        value: 2
    },
    {
        label: '预订',
        value: 3
    }
];

/* 销售状态 */
export const SALE_STATUS = [
    {
        label: '停产',
        value: 1
    },
    {
        label: '在售',
        value: 2
    },
    {
        label: '清货',
        value: 3
    },
    {
        label: '停用',
        value: 4
    },
    {
        label: '停售',
        value: 5
    },
    {
        label: '完全清货',
        value: 6
    },
    {
        label: '部分清货',
        value: 7
    }
];


// export const CUSTOM_TAG = [
//     {
//         type: '自定义标签0',
//         children: ['top50', 'up50']
//     },
//     {
//         type: '自定义标签1',
//         children: ['0-10%', '10%-20%', '20%-30%', '30%-n%', 'n/a']
//     },
//     {
//         type: '自定义标签2',
//         children: ['0-20', '50-100', '100+']
//     },
//     {
//         type: '自定义标签3',
//         children: ['0', '1']
//     },
//     {
//         type: '自定义标签3',
//         children: ['0-10%', '10%-20%', '20%-30%', '30%以上']
//     },
// ];

export const CUSTOM_TAG = [
    {
        label: '自定义标签0',
        children: [
            {
                group: '自定义标签0',
                label: 'top50',
                id: 1
            },
            {
                group: '自定义标签0',
                label: 'up50',
                id: 2
            }
        ]
    },
    {
        label: '自定义标签1',
        children: [
            {
                group: '自定义标签1',
                label: '0-10%',
                id: 3
            },
            {
                group: '自定义标签1',
                label: '10%-20%',
                id: 4
            },
            {
                group: '自定义标签1',
                label: '20%-30%',
                id: 5
            },
            {
                group: '自定义标签1',
                label: '30%-n%',
                id: 6
            },
            {
                group: '自定义标签1',
                label: 'n/a',
                id: 7
            }
        ]
    },
    {
        label: '自定义标签2',
        children: [
            {
                group: '自定义标签2',
                label: '0-20',
                id: 8
            },
            {
                group: '自定义标签2',
                label: '50-100',
                id: 9
            },
            {
                group: '自定义标签2',
                label: '100+',
                id: 10
            }
        ]
    },
    {
        label: '自定义标签3',
        children: [
            {
                group: '自定义标签3',
                label: '预订产品',
                id: 11
            },
            {
                group: '自定义标签3',
                label: '非预定产品',
                id: 12
            },
        ]
    },
    {
        label: '自定义标签4',
        children: [
            {
                group: '自定义标签4',
                label: '0-10%',
                id: 13
            },
            {
                group: '自定义标签4',
                label: '10%-20%',
                id: 14
            },
            {
                group: '自定义标签4',
                label: '20%-30%',
                id: 15
            },
            {
                group: '自定义标签4',
                label: '30%以上',
                id: 16
            }
        ]
    }
];

export const GENDER_LIST = [
    {
        label: '男',
        id: 1
    },
    {
        label: '女',
        id: 2
    }
];

export const ROLE_LIST = {
    1: 'T1',
    2: 'T2',
    3: 'T3'
};