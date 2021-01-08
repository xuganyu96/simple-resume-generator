resume =    {
    "resume-width": "50rem",
    "resume-header": {
        "full-name": "Ganyu (Bruce) Xu",
        "title": "Data Engineer",
        "contact-info": {
            "phone": "+1-626-327-8890",
            "email": "xuganyu96@gmail.com",
            "linkedin": "/in/ganyu-bruce-xu-aa4b97112",
            "github": "xuganyu96"
        }
    },
    "resume-body": {
        "skills": [
            {
                "skill-type": "Languages",
                "skill-items": [
                    "Python", "SQL", "JavaScript", "Shell script",
                    "HTML/CSS", "Go"
                ]
            },
            {
                "skill-type": "Data",
                "skill-items": [
                    "MySQL, PostgreSQL", "Pandas", "Presto"
                ]
            },
            {
                "skill-type": "Framework & Service",
                "skill-items": [
                    "Apache Airflow", "Docker", "Flask", "Django", 
                    "RabbitMQ"
                ]
            },
            {
                "skill-type": "AWS Services",
                "skill-items": [
                    "EC2", "ECS", "Athena", "SQS", "S3", "Route 53"
                ]
            }
        ],
        "education": [
            {
                "school-name": "U of California, Berkeley",
                "timeline": "Aug, 2015 - May, 2019",
                "highlights": [
                    "B.A. Mathematics", "B.A. Statistics", "GPA 3.464"
                ]
            }
        ],
        "employments": [
            {
                "title": "Data Engineer",
                "timeline": "July, 2019 - Present",
                "employer": "LeanTaaS Inc.",
                "location": "Santa Clara, CA",
                "highlights": [
                    "<b>Onboarded new customer</b> by coordinating with client IT staff to set up automated raw data extraction and scripting ETL pipeline in Airflow DAG",
                    "<b>Shortened customer onboarding timeline from 12 to 4 weeks</b> by designing, implementing, and maintaining web app module that allowed client IT staff to independently verify raw data schema and data extraction script and reduced manual email exchanges between client IT and product managers",
                    "<b>Reduced data error incidents and increased deployment confidence</b> by provisioning sandboxed environment that mirrored production infrastructure and configuration and enabled developers to perform end-to-end testing on ETL logic for individual git branches.",
                    "<b>Increased production Airflow availability and reliability</b> by introducing DataDog for monitoring outage, notifying on-call engineers, and idenifying abnormal performance slowdown.",
                    "<b>Experimented with fault-injection testing on production Airflow</b> and trained teammates on responding to production outage through simulated Airflow failures"
                ]
            }
        ],
        "projects": [
            {
                "title": "Chives exchange",
                "links": {
                    "github": "https://github.com/xuganyu96/chives-exchange",
                    "aws": "http://chives-exchange.brucexu.live/auth/login",
                    "pypi": "https://pypi.org/project/chives-exchange/"
                },
                "tech-stack": ["Flask", "RabbitMQ", "MySQL", "Docker", "NginX"],
                "highlights": [
                    "Electronic stock exchange with horizontally scalable order matching engines and Flask-powered web UI"
                ]
            },
            {
                "title": "PyArchive",
                "links": {
                    "github": "https://github.com/xuganyu96/PyArchive-legacy"
                },
                "tech-stack": ["Django", "WebSocket"],
                "highlights": [
                    "Hybrid file backup solution resilient against network failure"
                ]
            },
            {
                "title": "InquireUSCIS",
                "links": {
                    "github": "https://github.com/xuganyu96/InquireUSCIS"
                },
                "tech-stack": ["Selenium"],
                "highlights": [
                    "Query large number of USCIS application statuses using multi-threaded workers each driving a headless Chrome session"
                ]
            },
            {
                "title": "Simple resume generator",
                "links": {
                    "github": "https://github.com/xuganyu96/simple-resume-generator",
                    "pdf": "https://xuganyu96.github.io/resume.pdf"
                },
                "tech-stack": ["JavaScript", "HTML/CSS"],
                "highlights": [
                    "Laid out with HTML Flexbox and stylized using Materialize CSS",
                    "Generated from JSON using vanilla JavaScript"
                ]
            }
        ]
    }
}