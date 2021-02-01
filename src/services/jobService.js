
const Job = require('../models/jobs');

const search = async (queryString) => {
    
    let queryArray = [];
    
    const search = queryString.search.split(',')
    queryArray.push({'job_title':{$in:search}})
    if (queryString.location) {
        queryArray.push({'location':queryString.location})
    }
    
    if (queryString.company) {
        queryArray.push({'location':queryString.comapny})
    }
    if(queryString.sort){
        const sort = queryString.sort;
        if(queryString.offset){
            let searchedfiltered = await Job.find({$and:queryArray},{ skip: Number(queryString.offset), limit: Number(queryString.limit) })
            let searchedsortedfiltered = await Job.find({$and:searchedfiltered}).sort({sort:1})
            
            return searchedsortedfiltered;
        }
        return await Job.find({$and:queryArray}).sort({sort:1})
    }
    if(queryString.offset){
        let searchedfiltered = await Job.find({$and:queryArray},{ skip: Number(queryString.offset), limit: Number(queryString.limit) })
        sortedfiltered = await Job.find({$and:searchedfiltered}).sort({sort:1})
        return sortedfiltered
    }
    let searchedfiltered = await Job.find({$and:queryArray})
    return searchedfiltered;
}

module.exports = {
    search
}