// var addDateCreated = function (hook) {
//   hook.data.createdAt = new Date();
// };

const addDateCreated = hook => {
  hook.data.createdAt = new Date();
  return Promise.resolve(hook); // A good convention is to always return a promise.
};


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [addDateCreated],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
