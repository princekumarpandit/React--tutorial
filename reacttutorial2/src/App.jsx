import React from 'react'
import Card from './components/card'
import User from './components/User'

const jobOpenings= [
  {
    "company": "Meta",
    "logo_url": "https://logo.clearbit.com/meta.com",
    "name": "Meta - Senior AI/ML Engineer",
    "date_posted": "5 days ago",
    "post": "aiml.webdev",
    "tag1": "fulltime",
    "tag2": "senior",
    "pay_usd_per_hour": 95,
    "location": "Mumbai, India"
  },
  {
    "company": "Nvidia",
    "logo_url": "https://logo.clearbit.com/nvidia.com",
    "name": "Nvidia - Junior Frontend Developer",
    "date_posted": "2 days ago",
    "post": "webdev.frontend",
    "tag1": "part time",
    "tag2": "junior",
    "pay_usd_per_hour": 30,
    "location": "Delhi, India"
  },
  {
    "company": "Google",
    "logo_url": "https://logo.clearbit.com/google.com",
    "name": "Google - Senior Site Reliability Engineer",
    "date_posted": "7 days ago",
    "post": "sre.devops",
    "tag1": "fulltime",
    "tag2": "senior",
    "pay_usd_per_hour": 105,
    "location": "Bengaluru, India"
  },
  {
    "company": "Oracle",
    "logo_url": "https://logo.clearbit.com/oracle.com",
    "name": "Oracle - Junior Web Developer",
    "date_posted": "3 days ago",
    "post": "webdev",
    "tag1": "part time",
    "tag2": "junior",
    "pay_usd_per_hour": 28,
    "location": "Delhi, India"
  },
  {
    "company": "Amazon",
    "logo_url": "https://logo.clearbit.com/amazon.com",
    "name": "Amazon - Senior Backend Engineer",
    "date_posted": "4 days ago",
    "post": "backend.api",
    "tag1": "fulltime",
    "tag2": "senior",
    "pay_usd_per_hour": 90,
    "location": "Mumbai, India"
  },
  {
    "company": "Jio",
    "logo_url": "https://logo.clearbit.com/jio.com",
    "name": "Jio - Junior QA Engineer",
    "date_posted": "1 day ago",
    "post": "qa.testautomation",
    "tag1": "part time",
    "tag2": "junior",
    "pay_usd_per_hour": 22,
    "location": "Hyderabad, India"
  },
  {
    "company": "Apple",
    "logo_url": "https://logo.clearbit.com/apple.com",
    "name": "Apple - Senior iOS Engineer",
    "date_posted": "6 days ago",
    "post": "mobile.ios",
    "tag1": "fulltime",
    "tag2": "senior",
    "pay_usd_per_hour": 110,
    "location": "Bengaluru, India"
  },
  {
    "company": "OpenAI",
    "logo_url": "https://logo.clearbit.com/openai.com",
    "name": "OpenAI - Junior Web Designer",
    "date_posted": "2 days ago",
    "post": "web.design",
    "tag1": "part time",
    "tag2": "junior",
    "pay_usd_per_hour": 26,
    "location": "Mumbai, India"
  },
  {
    "company": "Netflix",
    "logo_url": "https://logo.clearbit.com/netflix.com",
    "name": "Netflix - Senior Data Engineer",
    "date_posted": "8 days ago",
    "post": "data.pipeline",
    "tag1": "fulltime",
    "tag2": "senior",
    "pay_usd_per_hour": 100,
    "location": "Mumbai, India"
  },
  {
    "company": "Netflix",
    "logo_url": "https://logo.clearbit.com/netflix.com",
    "name": "Netflix - Junior Frontend Developer",
    "date_posted": "4 days ago",
    "post": "webdev.frontend",
    "tag1": "part time",
    "tag2": "junior",
    "pay_usd_per_hour": 29,
    "location": "Delhi, India"
  }
]


const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map((obj) => {
        return <Card company={obj.company} logo_url={obj.logo_url} name={obj.name} date_posted={obj.date_posted} post={obj.post} tag1={obj.tag1} tag2={obj.tag2} pay_usd_per_hour={obj.pay_usd_per_hour} location={obj.location} />
      })}
    </div>
  )
}

export default App
