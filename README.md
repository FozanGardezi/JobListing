# JobListing

## Setup Project

Clone the Respository

In the project directory in cli run npm install.
Install mongodb 

## How to use Apis

### Search Api

For search api the url is 127.0.0.1:8081/jobs/search?search=commaseperatedstring
If the search parameter is not given then it through's error. So search parameter should given.

Filters can be applied on location and company name. It can be applied to either of them or both.
To apply filter the url will be 127.0.0.1:8081/jobs/search?search=comma seperated string&location=place&company=company name

Sorting is applied to job_title.
The url for sorting is 127.0.0.1:8081/jobs/search?search=Software Engineer,mechanism&sort=job_title

To get chunks of jobs from mockaroo and database we specify the offset and limit
The url for pagination is 127.0.0.1:8081/jobs/search?search=Software Engineer,mechanism&offset=3&limit=2

Filtering, Sorting and get chunks of data, can be applied all together
The structre of url will be 127.0.0.1:8081/jobs/search?search=comma seperated string,mechanism&sort=job_title&location=place&offset=3&limit=2

### Create Api 

A job is created and is added in the mongodb database.

Create a JSON data like this(all fields are required):

```
{
        "job_title": "Software Engineer",
        "company": "xyz",
        "location": "lahore",
        "post_date": "2021-02-01",
        "apply_email": "career@xyz.com",
}
```

### Delete Api 

Delete an entry in database just by passing the id.
The url for delete is like this: 127.0.0.1:8000/jobs/delete/idstring

Since mongodb is being used, the id of the document is a string not an integer and to view the id use a GUI tool like mongodb compass.
