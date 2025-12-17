const express = require("express");
const app = express();
const PORT = 4000;
const cors=require("cors");
app.use(cors());

const projects = [
  {
    title: "AWS S3 Static Site Deployment",
    description:
      "Deployed a static website using AWS S3, achieving 99% availability and eliminating server maintenance.",
    tools: ["AWS", "S3", "IAM", "Git", "GitHub", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "Serverless Image Optimizer",
    description:
      "Built an image optimization system using AWS Lambda, Sharp and CloudFront. Improved load time by 70%.",
    tools: ["AWS Lambda", "S3", "CloudFront", "Node.js", "Sharp"]
  },
  {
    title: "Serverless Microservices with AWS",
    description:
      "Designed microservices using Lambda, SQS, DynamoDB, and API Gateway. Improved throughput by 60%.",
    tools: ["Lambda", "SQS", "DynamoDB", "API Gateway", "CDK", "Node.js"]
  }
];

app.get("/projects", (req, res) => {
  res.json(projects);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend running on 0.0.0.0:${PORT}`);
});
