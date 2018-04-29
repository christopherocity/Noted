const Storage = require('@google-cloud/storage');
const _ = require("lodash");
const logger = require('./logger');


const Store = {};

const options = {};

options.projectId = process.env.PROJECT_ID || 'noted-samples';

if (process.env.KEY_FILE_NAME) {
    options.keyFilename = process.env.KEY_FILE_NAME;
}

logger.info("@google-cloud-storage=", options);

const storage = new Storage(options);


Store.getFiles = async () => {
    const buckets = await storage
        .getBuckets();

    let files = [];
    let bucketList = _.flattenDeep(buckets);

    for(let i = 0; i < bucketList.length; i++) {
        const bucketName = bucketList[i].id;

        const bucket = await storage.bucket(bucketName);
        const bucketFiles = await bucket.getFiles();

        files.push(..._.flattenDeep(bucketFiles));
    }

    return files.map(file => {
        return file.metadata;
    });
};


module.exports = Store;