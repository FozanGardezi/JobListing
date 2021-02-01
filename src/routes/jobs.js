const express = require('express');
const Job = require('../models/jobs');
const mockaroo = require('../services/mockarooService')
const job = require('../services/jobService')
const { check, body, validationResult } = require('express-validator');
const router = express.Router();



router.get('/search', async function(req, res){
  //generate array of records for job-listing schema
  try {

      const makaroData = await mockaroo.getData()
      var query = req.query.search
      let filteredJobs = mockaroo.filterResult(query, makaroData);
      filteredJobs = mockaroo.filter(req.query,filteredJobs);
      filteredJobs = mockaroo.chunks(req.query,filteredJobs)
      const jobs = await job.search(req.query);
      let result = filteredJobs.concat(jobs);
      
      return res.status(200).json({ success: true, job: result });
  } catch(error) {
      console.log(error)
  }
});

router.post('/create',[body('job_title').isString(),
              body('company').isString(),
              body('location').isString(),
              body('post_date').isDate(),
              body('apply_email').isEmail()], 
              (req,res) => {
                  const job = new Job(req.body)
                  const errors = validationResult(req);
                  if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                  }
                  job.save()
                  .then((job)=> {
                    return res.status(200).json({success:true, job: job})
                  })
                  .catch((error) => {
                    return res.status(400).json({success:false, error: error})
                  })
})

router.delete('/delete/:id', (req,res) => {
  
  Job.deleteOne({_id:req.params.id})
  .then((job)=> {
    return res.status(200).json({success:true, messages: "Job has been deleted"})
  })
  .catch((error) => {
    return res.status(400).json({success:false, error: error})
  })
})




module.exports = router