const assert = require('assert');
const proxyquire = require('proxyquire');

const { getAllStub, MongoLibMock } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', () => {
    const MoviesServices = proxyquire('../services/movies', {
        '../libs/mongo': MongoLibMock
    });

    const moviesService = new MoviesServices();

    describe('when getMovies method is called', async () => {
        it('should call getAll MongoLib method', async () => {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        })

        it('should return an array of movies', async () => {
            const result = await moviesService.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        })
    })
})