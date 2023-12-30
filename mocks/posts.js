export const posts = [
    {
      id: '0',
      userId: '0',
      type: 'photo',
      title: 'The Doppelganger',
      slug: 'the-doppelganger',
      description: '',
      content: '',
      quoteAuthor: '',
      image: '/img/doppelganger.webp',
      likes: 2,
      likedByUser: false,
      tags: ['doppelganger', 'TwinPeaks'],
      comments: [
        {
          id: 0,
          text: 'Посетила Байкал в прошлом году. Это действительно место, где природа открывает свои тайны. Необыкновенная чистота воды и красота окружающего пейзажа просто завораживают!',
          userName: 'Laura Palmer',
          avatar: '/img/userpic-larisa.jpg',
          date: '2023-04-12T17:42:00Z',
        },
        {
          id: 1,
          text: 'Озеро Байкал — это настоящий клад для экологии. Надеюсь, что усилия по его сохранению и охране будут только усиливаться. Это место, которое нужно сохранить для будущих поколений.',
          userName: 'Александр',
          avatar: '/img/userpic-mark.jpg',
          date: '2023-11-02T12:44:00Z',
        },
      ],
      repostsCount: 3,
      viewCount: 10,
    },
    {
      id: '1',
      userId: '1',
      type: 'text',
      title: 'Жизнь ударников',
      slug: 'zhizn-udarnikov',
      description: '',
      content: `<p>Как живут ударники?<br>
        Ударники живут хорошо.</p>
        <p>Где они работают?<br>
        Они работают на заводах.</p>
        <p>Как они работают?<br>
        Они работают с энтузиазмом.</p>
        <p>Что они делают в парках?<br>
        В парках они думают о жизни.</p>
        <p>О какой жизни?<br>
        О жизни на заводах.<br>
        Вот как живут ударники!</p>
        <p>А как живут бездельники?</p>
        `,
      quoteAuthor: '',
      image: '/img/rock-default.jpg',
      likes: 1,
      likedByUser: true,
      tags: ['бизнес', 'трудоустройство', 'отдых'],
      comments: [
        {
          id: 2,
          text: 'Бездельники на работе крадут карандаши.',
          userName: 'Евгений',
          avatar: '/img/userpic-petro.jpg',
          date: '2023-06-12T17:42:00Z',
        },
        {
          id: 3,
          text: 'Бездельники в парках ведут себя плохо!',
          userName: 'Helen',
          avatar: '/img/userpic-tanya.jpg',
          date: '2023-09-01T12:44:00Z',
        },
      ],
      repostsCount: 0,
      viewCount: 100,
    },
    {
      id: '2',
      userId: '1',
      type: 'video',
      title: 'Gotta Light?',
      slug: 'gotta-light',
      description: '',
      content: '<iframe width="680" height="382" src="https://www.youtube.com/embed/rTCefc-uuEw?si=kKJA9va0WbWteKDl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
      quoteAuthor: '',
      image: '/img/gotta-light.png',
      likes: 1,
      likedByUser: true,
      tags: ['TwinPeaks', 'ТвинПикс', 'ДэвидЛинч'],
      comments: [
      ],
      repostsCount: 0,
      viewCount: 100,
    },
    {
      id: '3',
      userId: '2',
      type: 'link',
      title: 'Мечтаете писать на Bash?',
      slug: 'mechtaete-pisat-na-bash',
      description: 'Учебник Bash тут',
      content: 'https://www.opennet.ru/docs/RUS/bash_scripting_guide/c178.html',
      quoteAuthor: '',
      image: '',
      likes: 1,
      likedByUser: true,
      tags: ['bash', 'linux', 'code'],
      comments: [
        {
          id: 2,
          text: 'Ура, бэш!',
          userName: 'Евгений',
          avatar: '/img/userpic-petro.jpg',
          date: '2023-11-12T17:42:00Z',
        },
      ],
      repostsCount: 0,
      viewCount: 100,
    },
    {
      id: '4',
      userId: '3',
      type: 'quote',
      title: 'Цитата дня',
      slug: 'sometimes-my-arms-bend-back',
      description: '',
      content: 'Sometimes, my arms bend back',
      quoteAuthor: 'Laura Palmer',
      image: '',
      likes: 1,
      likedByUser: true,
      tags: ['LauraPalmer', 'TwinPeaks', 'ТвинПикс'],
      comments: [
      ],
      repostsCount: 1,
      viewCount: 100,
    },
    {
      id: '5',
      userId: '3',
      type: 'quote',
      title: 'Цитата дня',
      slug: 'my-ne-bydem-govorit-o-dzhudi',
      description: '',
      content: 'Мы не будем говорить о Джуди',
      quoteAuthor: 'Гордон Коул',
      image: '',
      likes: 1,
      likedByUser: false,
      tags: ['TwinPeaks', 'ТвинПикс', 'DavidLynch'],
      comments: [
        {
          id: 2,
          text: 'Кто такая Джуди?',
          userName: 'Евгений',
          avatar: '/img/userpic-petro.jpg',
          date: '2023-06-26T17:42:00Z',
        },
      ],
      repostsCount: 1,
      viewCount: 100,
    },
    {
      id: '6',
      userId: '4',
      type: 'quote',
      title: 'Цитата дня',
      slug: 'we-are-like-the-dreamer',
      description: '',
      content: 'We are like the dreamer who dreams and then lives inside the dream',
      quoteAuthor: 'Monica Bellucci',
      image: '',
      likes: 1000,
      likedByUser: false,
      tags: ['TwinPeaks', 'MonicaBelucci', 'Baikal'],
      comments: [
      ],
      repostsCount: 18,
      viewCount: 100,
    },
    {
      id: '6',
      userId: '4',
      type: 'quote',
      title: 'Декадентство',
      slug: 'decadance',
      description: '',
      content: 'Что такое декадентство? Декадентство - это лежать на пляже у Великого Блинского Болота и смотреть телевизор. В смокингах.',
      quoteAuthor: 'Профессор Шульц',
      image: '',
      likes: 1000,
      likedByUser: false,
      tags: ['TwinPeaks', 'MonicaBelucci', 'Baikal'],
      comments: [
      ],
      repostsCount: 18,
      viewCount: 100,
    },
  ];
