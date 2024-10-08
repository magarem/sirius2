


import {lstatSync} from 'node:fs';

export default defineEventHandler( (event) => {
    const query = getQuery(event)
    console.log(111, query);
    const filename = query.filename
    /**
     * @param {string} path - The path.
     * @returns {boolean} Whether path is a directory, otherwise always false.
     */
    function isDir(path) {
        try {
        const stat = lstatSync(path);
        return stat.isDirectory();
        } catch (e) {
        // lstatSync throws an error if path doesn't exist
        return false;
        }
    }
    console.log('isDir:', isDir(filename));
    
    return isDir(filename);
})
