const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MoviesServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', () => {
    const route = proxyquire('../routes/movies', {
        '../services/movies': MoviesServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', () => {
        it('should response with status 200', done => {
            request.get('/api/movies').expect(200, done);
        });

        it('should response with the list of movies', done => {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed'
                });

                done();
            });
        });
    });

    // describe('POST /movies', () => {
    //     it('should response with status 201', done => {
    //         request.post('/api/movies').expect(201, done);
    //     })

    //     it('should response with the movie id', done => {
    //         request.post('/api/movies').end((err, res) => {
    //             assert.deepEqual(res.body, {
    //                 data: moviesMock[0].id,
    //                 message: 'movie created'
    //             });

    //             done();
    //         })
    //     })
    // })
});
