export default
    {
        id: '1',
        user: {
            id: '1',
            username: 'mguvens',
            imageUri: 'https://www.merlininkazani.com/images/games/12350/108680_640.jpg',
            balance: 100,
        },
        transactions: [{
            id: 1,
            description: 'Okul Masrafı',
            type: 'expense',
            createdAt: '21/10/2021',
            amount: 200,
        }, {
            id: 2,
            description: 'Bilgisayar Masrafı',
            type: 'expense',
            createdAt: '21/10/2021',
            amount: 500,

        }, {
            id: 3,
            description: 'Aylık Maaş',
            type: 'income',
            createdAt: '21/10/2021',
            amount: 6000,

        }, {
            id: 4,
            description: 'Freelance',
            type: 'income',
            createdAt: '21/10/2021',
            amount: 400,
        }, {
            id: 5,
            description: 'Telefon Faturası',
            type: 'expense',
            createdAt: '21/10/2021',
            amount: 60,
        }
        ],
    }


