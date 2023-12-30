export const users = [
    {
      id: '0',
      userName: 'Дейл Купер',
      email: 'dale@playground24.site',
      avatar: '/img/userpic-medium.jpg',
      userRole: 'writer',
      subscriptions: [],
      isAuth: false,
    },
    {
      id: '1',
      userName: 'Лора Палмер',
      email: 'laura@playground24.site',
      avatar: '/img/userpic-elvira.jpg',
      userRole: 'writer',
      subscriptions: [],
      isAuth: false,
    },
    {
      id: '2',
      userName: 'Шелли Джонсон',
      email: 'shelly@playground24.site',
      avatar: '/img/userpic-tanya.jpg',
      userRole: 'writer',
      subscriptions: [],
      isAuth: false,
    },
    {
      id: '3',
      userName: 'Бобби Бриггс',
      email: 'bobby@playground24.site',
      avatar: '/img/userpic-mark.jpg',
      userRole: 'writer',
      subscriptions: [],
      isAuth: false,
    },
    {
      id: '4',
      userName: 'Моника Беллуччи',
      email: 'monica@playground24.site',
      avatar: '/img/userpic-larisa.jpg',
      userRole: 'writer',
      subscriptions: [],
      isAuth: false,
    }
  ];

  export const currentUser = { ...users[0], isAuth: false};
