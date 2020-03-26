const moviesMock = [
    {
        id: '5da78e47-064b-477f-b5b5-f0506ea60e5b',
        title: '102 Minutes That Changed America',
        year: 1996,
        cover: 'http://dummyimage.com/103x113.png/ff4444/ffffff',
        description:
            'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
        duration: 1956,
        contentRating: 'R',
        source: 'http://amazon.co.jp/ultrices/mattis/odio.aspx',
        tags: ['Drama', 'Drama|Mystery', 'Comedy']
    },
    {
        id: '83877951-4eb4-44a0-9349-650f9224fb32',
        title: 'Simon Says',
        year: 2009,
        cover: 'http://dummyimage.com/201x189.bmp/dddddd/000000',
        description:
            'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
        duration: 1984,
        contentRating: 'G',
        source: 'http://github.io/consequat/nulla/nisl/nunc/nisl/duis.xml',
        tags: [
            'Action|Crime|Thriller',
            'Drama',
            'Drama',
            'Drama',
            'Action|Drama'
        ]
    },
    {
        id: '15b872af-56f9-4a98-8bc5-5e7a9799acf2',
        title: 'Scott Walker: 30 Century Man',
        year: 1996,
        cover: 'http://dummyimage.com/170x114.jpg/ff4444/ffffff',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        duration: 1923,
        contentRating: 'PG',
        source: 'http://businessweek.com/justo/in/hac.js',
        tags: [
            'Drama|Thriller',
            'Drama|Mystery|Thriller',
            'Documentary',
            'Adventure|Children|Drama'
        ]
    },
    {
        id: '0815a6c9-c268-41c9-8d7f-347fca84105b',
        title: 'Eyes of Tammy Faye, The',
        year: 2005,
        cover: 'http://dummyimage.com/166x237.bmp/dddddd/000000',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        duration: 2039,
        contentRating: 'PG-13',
        source: 'https://tmall.com/nisl/duis/ac/nibh.js',
        tags: [
            'Action|Adventure|War',
            'Adventure|Comedy|Fantasy',
            'Horror|Thriller',
            'Documentary'
        ]
    },
    {
        id: 'b59c6da3-0dd1-4668-b91f-6f87fdd90280',
        title: 'RocketMan (a.k.a. Rocket Man)',
        year: 1986,
        cover: 'http://dummyimage.com/123x156.bmp/5fa2dd/ffffff',
        description:
            'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
        duration: 2069,
        contentRating: 'G',
        source: 'http://hatena.ne.jp/maecenas.html',
        tags: [
            'Adventure|Romance',
            'Comedy|Drama',
            'Horror|Thriller',
            'Comedy',
            'Sci-Fi'
        ]
    },
    {
        id: '9e5e636c-1796-40c8-8b39-aa8f800cd43d',
        title: 'Littlerock',
        year: 2004,
        cover: 'http://dummyimage.com/139x164.png/ff4444/ffffff',
        description:
            'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
        duration: 2009,
        contentRating: 'G',
        source: 'https://opera.com/molestie.js',
        tags: [
            'Adventure|Animation|Horror|Sci-Fi|Thriller',
            'Action|War',
            'Drama',
            'Documentary',
            '(no genres listed)'
        ]
    },
    {
        id: 'c73c1f4b-d003-443a-9a23-2912a3d5b575',
        title: '5 Against the House',
        year: 2000,
        cover: 'http://dummyimage.com/183x223.png/ff4444/ffffff',
        description:
            'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
        duration: 1895,
        contentRating: 'PG',
        source:
            'http://japanpost.jp/quam/suspendisse/potenti/nullam/porttitor/lacus/at.xml',
        tags: ['Drama|Romance']
    },
    {
        id: '6d6b7561-56c0-40a4-a718-a8606284becc',
        title: 'Blind Mountain (Mang shan)',
        year: 1986,
        cover: 'http://dummyimage.com/113x158.jpg/cc0000/ffffff',
        description:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        duration: 1901,
        contentRating: 'NC-17',
        source: 'http://yolasite.com/mauris.jsp',
        tags: [
            'Crime|Drama|Thriller',
            'Action|Horror',
            'Horror|Mystery',
            'Comedy|Drama|Mystery',
            'Action|Drama|Thriller'
        ]
    },
    {
        id: 'e46cc4b3-b03c-4896-8e16-6ff2949b3942',
        title: 'Big Knife, The',
        year: 1989,
        cover: 'http://dummyimage.com/215x173.png/5fa2dd/ffffff',
        description:
            'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
        duration: 1979,
        contentRating: 'NC-17',
        source:
            'https://aol.com/nulla/pede/ullamcorper/augue/a/suscipit/nulla.js',
        tags: ['Adventure|Comedy|Romance', 'Comedy|Romance', 'Comedy']
    },
    {
        id: '8bd2cd5f-bc7d-4a35-bcc3-9698d6dbcc47',
        title: 'Come September',
        year: 2011,
        cover: 'http://dummyimage.com/146x235.bmp/ff4444/ffffff',
        description:
            'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
        duration: 1907,
        contentRating: 'PG',
        source: 'http://amazon.co.jp/consequat/metus/sapien/ut/nunc.jpg',
        tags: ['Action|Adventure|Sci-Fi', 'Drama']
    }
];

function filteredMoviesMock(tag) {
    return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
    async getMovies() {
        return Promise.resolve(moviesMock);
    }

    async getMovie() {
        return Promise.resolve(moviesMock[0]);
    }

    async createMovie() {
        return Promise.resolve(moviesMock[0].id);
    }
}

module.exports = {
    moviesMock,
    filteredMoviesMock,
    MoviesServiceMock
};
