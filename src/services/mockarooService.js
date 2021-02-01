const Mockaroo = require('mockaroo');

const client = new Mockaroo.Client({
    apiKey: 'b9476310' 
})

console.log("Intializing Mockaroo")

const getData = async ( ) => {
    mockaroData = await client.generate({
        count: 100,
        schema: 'Job-listing'
    })
    return mockaroData;
}

const filterResult = (queryString, mockaroData) => {

    let filteredResult = []
    let filter = queryString.split(',')
    for(let i = 0; i < mockaroData.length; i++){  
        if(filter.includes(mockaroData[i].job_title)){
            filteretdResult.push(mockaroData[i])
        }
    }
    return filteredResult;
}

const sort = (data, sortKey) => {
    data.sort(function(a, b) {
        return a[sortKey].localeCompare(b[sortKey])
    });
    return data;
}

const filter = (queryString, mockaroData) => {
    queryArray=[]
    if (queryString.location) {
        for(let i = 0; i < mockaroData.length; i++){  
            if(queryString.location.includes(mockaroData[i].job_title)){
                queryArray.push(mockaroData[i])
            }
        }
        //queryArray.push({'location':queryString.location})
    }
    // if (queryString.post_date) {
    //     queryArray.push({'location':queryString.post_date})
    // }
    queryArrayLoca = []
    if (queryString.company) {
        for(let i = 0; i < queryArray.length; i++){  
            if(queryArray.company.includes(queryArray[i].job_title)){
                queryArrayLoca.push(queryArray[i])
            }
        }
        return queryArrayLoca
        //queryArray.push({'location':queryString.comapny})
    }
    return queryArray
}

const chunks = (queryString, filteredJobs) => {
    return filteredJobs.slice(queryString.offset,queryString.limit)
}

module.exports = {
    getData,
    filterResult,
    sort,
    filter,
    chunks 
}