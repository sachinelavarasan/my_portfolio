import { Metadata } from "next";
import { ReactNode } from "react";

import {
  Callout,
  Divider,
  Main,
  Meta,
  PageTitle,
  Prose,
  Toc,
} from "../../../components/Notes/elements";

// title/description are read by `npm run notes:sync` for the notes list
export const metadata: Metadata = {
  title: "AWS Cloud Practitioner Study Guide",
  description: "Condensed CLF-C02 revision guide",
};

const SECTIONS = [
  { id: "cloud", label: "Cloud Computing Basics" },
  { id: "iam", label: "IAM — Identity & Access Management" },
  { id: "ec2", label: "Amazon EC2" },
  { id: "storage", label: "EC2 Instance Storage" },
  { id: "elb", label: "Load Balancing & Auto Scaling" },
  { id: "s3", label: "Amazon S3" },
  { id: "db", label: "Databases & Analytics" },
  { id: "compute", label: "Containers, Serverless & Other Compute" },
  { id: "deploy", label: "Deploying & Managing Infrastructure" },
  { id: "global", label: "Global Applications" },
  { id: "integration", label: "Cloud Integration (Decoupling)" },
  { id: "monitor", label: "Cloud Monitoring" },
  { id: "vpc", label: "VPC & Networking" },
  { id: "security", label: "Security & Compliance" },
  { id: "ml", label: "Machine Learning Services" },
  { id: "billing", label: "Account Management, Billing & Support" },
  { id: "identity", label: "Advanced Identity" },
  { id: "other", label: "Other AWS Services" },
  { id: "arch", label: "Architecting & Ecosystem" },
  { id: "match", label: "Which Service? Quick Match" },
  { id: "exam", label: "Exam Day Strategy" },
];

const Table = ({ head, rows }: { head: string[]; rows: ReactNode[][] }) => (
  <div className="table-wrap">
    <table className={head.length > 2 ? "wide" : undefined}>
      <thead>
        <tr>
          {head.map((h) => (
            <th key={h} scope="col">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// Exam trap / comparison box
const Tip = ({ label, children }: { label: string; children: ReactNode }) => (
  <Callout>
    <strong>{label}:</strong> {children}
  </Callout>
);

export default function AwsCcpNotes() {
  return (
    <Main $wide>
      <Divider aria-hidden="true" />
      <PageTitle>AWS Cloud Practitioner Study Guide</PageTitle>
      <Meta>CLF-C02 · 65 questions · 90 minutes · pass mark 700/1000 · $100 · retake after 14 days</Meta>

      <Callout>
        Personal revision notes. Exact prices and discount percentages change over time and are not
        needed for the exam. Check the{" "}
        <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noopener noreferrer">
          official CLF-C02 exam page
        </a>{" "}
        before booking.
      </Callout>

      <Toc aria-labelledby="toc-heading">
        <h2 id="toc-heading">Contents</h2>
        <ol>
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ol>
      </Toc>

      <Prose>
        <section id="cloud">
          <h2>Cloud Computing Basics</h2>
          <h3>Definitions</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Cloud computing</>, <>On-demand delivery of compute, storage, databases and other IT resources over the internet with pay-as-you-go pricing.</>],
              [<>Private cloud</>, <>Used by one organization only. Full control, good for sensitive apps.</>],
              [<>Public cloud</>, <>Owned and run by a third-party provider (AWS, Azure, GCP), delivered over the internet.</>],
              [<>Hybrid cloud</>, <>Some servers stay on-premises, some capabilities extend into the cloud.</>],
          ]}
          />
          <h3>5 characteristics of cloud</h3>
          <ul>
            <li>On-demand self service (no human needed from the provider)</li>
            <li>Broad network access (from any device over the network)</li>
            <li>Multi-tenancy and resource pooling (customers share hardware securely)</li>
            <li>Rapid elasticity and scalability</li>
            <li>Measured service (pay for what you use)</li>
          </ul>
          <h3>6 advantages of cloud</h3>
          <ul>
            <li>Trade CAPEX (buy hardware) for OPEX (pay as you go)</li>
            <li>Benefit from massive economies of scale</li>
            <li>Stop guessing capacity</li>
            <li>Increase speed and agility</li>
            <li>Stop spending money running data centers</li>
            <li>Go global in minutes</li>
          </ul>
          <h3>Service models</h3>
          <Table
            head={["Model", "You manage", "AWS example", "Others"]}
            rows={[
              [<>IaaS</>, <>OS, runtime, data, apps</>, <>EC2</>, <>DigitalOcean, Linode</>],
              [<>PaaS</>, <>Your app and data only</>, <>Elastic Beanstalk</>, <>Heroku, App Engine</>],
              [<>SaaS</>, <>Nothing, just use it</>, <>Rekognition</>, <>Gmail, Dropbox, Zoom</>],
          ]}
          />
          <h3>Pricing fundamentals</h3>
          <ul>
            <li>You pay for <strong>compute time</strong>, <strong>storage</strong>, and <strong>data transfer OUT</strong>. Data transfer IN is free.</li>
          </ul>
          <h3>Global infrastructure</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Region</>, <>Cluster of data centers (e.g. <code>us-east-1</code>). Most services are region-scoped.</>],
              [<>Availability Zone (AZ)</>, <>One or more discrete data centers with redundant power and networking. Usually 3 per region (min 3, max 6). Isolated from each other, linked by low-latency network.</>],
              [<>Edge location / PoP</>, <>400+ points of presence used by CloudFront etc. to deliver content with low latency.</>],
              [<>Global services</>, <>IAM, Route 53, CloudFront, WAF.</>],
          ]}
          />
          <Tip label="Choosing a region">Compliance (data never leaves a region unless you move it), proximity to customers (latency), service availability in that region, and pricing.</Tip>
          <Tip label="Shared Responsibility">AWS = security <strong>OF</strong> the cloud (hardware, facilities, global network). Customer = security <strong>IN</strong> the cloud (data, IAM, OS patches on EC2, security groups, encryption).</Tip>
        </section>

        <section id="iam">
          <h2>IAM — Identity &amp; Access Management</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>IAM</>, <>Global service. Controls who can do what in your account.</>],
              [<>Root account</>, <>Created with the account. Full access. Use it only for account setup; never share it.</>],
              [<>Users</>, <>One physical person = one IAM user. Has a password for the console.</>],
              [<>Groups</>, <>Contain users only (not other groups). A user can be in many groups or none.</>],
              [<>Policies</>, <>JSON documents that grant permissions. Parts: Version, Statement → Effect (Allow/Deny), Principal, Action, Resource, Condition.</>],
              [<>Roles</>, <>Permissions given to AWS services (EC2 instance role, Lambda role, CloudFormation role).</>],
              [<>MFA</>, <>Password + device you own. Virtual MFA (Google Authenticator, Authy), U2F key (YubiKey), hardware key fob.</>],
              [<>Password policy</>, <>Min length, required character types, expiration, prevent reuse.</>],
              [<>Access keys</>, <>For CLI and SDK. Access Key ID ≈ username, Secret Access Key ≈ password. Never share.</>],
              [<>AWS CLI</>, <>Command-line tool hitting AWS public APIs. Open source.</>],
              [<>AWS SDK</>, <>Language libraries (JS, Python, Java, Go…) to call AWS from code.</>],
              [<>Credentials Report</>, <><strong>Account-level</strong>: lists all users and the status of their credentials.</>],
              [<>Access Advisor</>, <><strong>User-level</strong>: shows service permissions granted and when they were last used.</>],
          ]}
          />
          <Tip label="Exam tip">Least-privilege principle: never give more permissions than needed. Assign permissions to groups, not individual users. Roles for services, access keys for programmatic access.</Tip>
        </section>

        <section id="ec2">
          <h2>Amazon EC2</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>EC2</>, <>Elastic Compute Cloud = IaaS. Rent virtual machines.</>],
              [<>Configuration</>, <>OS (AMI) + CPU + RAM + storage (EBS/EFS or Instance Store) + network + security group + User Data.</>],
              [<>User Data</>, <>Bootstrap script that runs <strong>once</strong> at first start, as root (install updates, software).</>],
              [<>Instance type name</>, <><code>m5.2xlarge</code> → m = class, 5 = generation, 2xlarge = size.</>],
              [<>General purpose</>, <>Balanced (web servers, code repos). e.g. t2.micro.</>],
              [<>Compute optimized</>, <>Batch processing, media transcoding, HPC, ML, gaming servers.</>],
              [<>Memory optimized</>, <>In-memory DBs, real-time big data processing, caches.</>],
              [<>Storage optimized</>, <>High sequential I/O on local storage: OLTP, data warehousing, distributed file systems.</>],
              [<>Security groups</>, <>Instance-level firewall. ALLOW rules only. Inbound blocked by default, outbound allowed by default. Can reference IPs or other SGs.</>],
              [<>EC2 Instance Connect</>, <>SSH from the browser with a temporary key (Amazon Linux 2, port 22 must be open).</>],
          ]}
          />
          <Tip label="Troubleshooting">Timeout → security group issue. &quot;Connection refused&quot; → application error or not running.</Tip>
          <h3>Ports to know</h3>
          <Table
            head={["Port", "Protocol", "Use"]}
            rows={[
              [<>22</>, <>SSH / SFTP</>, <>Log into Linux / secure file transfer</>],
              [<>21</>, <>FTP</>, <>File transfer</>],
              [<>80</>, <>HTTP</>, <>Unsecured websites</>],
              [<>443</>, <>HTTPS</>, <>Secured websites</>],
              [<>3389</>, <>RDP</>, <>Log into Windows</>],
          ]}
          />
          <h3>Purchasing options</h3>
          <Table
            head={["Option", "Discount", "Best for"]}
            rows={[
              [<>On-Demand</>, <>None (highest cost)</>, <>Short, unpredictable, uninterrupted workloads. Per-second billing (Linux/Windows) after first minute.</>],
              [<>Reserved Instances</>, <>Up to 72%</>, <>Steady usage (e.g. databases). 1 or 3 years; No / Partial / All upfront. Sell in RI Marketplace.</>],
              [<>Convertible RI</>, <>Up to 66%</>, <>Long workloads where you may change instance type/family/OS.</>],
              [<>Savings Plans</>, <>Up to 72%</>, <>Commit to $/hour for 1 or 3 years. Flexible on size, OS, tenancy.</>],
              [<>Spot Instances</>, <>Up to 90%</>, <>Cheapest. Can be interrupted. Batch jobs, data analysis, image processing. Not for critical jobs or DBs.</>],
              [<>Dedicated Host</>, <>Most expensive</>, <>Whole physical server. BYOL (per-socket/core licences), strict compliance.</>],
              [<>Dedicated Instance</>, <>—</>, <>Hardware dedicated to you, but no control over placement.</>],
              [<>Capacity Reservation</>, <>None</>, <>Reserve capacity in a specific AZ, any duration. You pay On-Demand rate even if unused.</>],
          ]}
          />
          <Tip label="Hotel analogy">On-Demand = walk in, full price. Reserved = book long stay, discount. Savings Plan = pay fixed $/hour, any room. Spot = bid for empty rooms, can be kicked out. Dedicated Host = book the whole building. Capacity Reservation = pay for a room even if you don&apos;t stay.</Tip>
          <Tip label="Shared responsibility for EC2">Customer: security group rules, OS patches, installed software, IAM roles, data on the instance. AWS: physical hosts, faulty hardware, global network.</Tip>
        </section>

        <section id="storage">
          <h2>EC2 Instance Storage</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>EBS volume</>, <>Network drive (&quot;network USB stick&quot;). One instance at a time, <strong>locked to one AZ</strong>. Billed for provisioned size. Data persists after termination.</>],
              [<>Delete on Termination</>, <>Root EBS volume deleted by default; extra volumes kept by default.</>],
              [<>EBS Snapshot</>, <>Point-in-time backup. Copy across AZs or regions (this is how you move a volume).</>],
              [<>Snapshot Archive</>, <>75% cheaper tier, 24–72 hours to restore.</>],
              [<>Recycle Bin</>, <>Recover accidentally deleted snapshots (retention 1 day – 1 year).</>],
              [<>AMI</>, <>Amazon Machine Image: pre-packaged OS + software. Region-specific (can copy). Public, your own, or Marketplace AMIs.</>],
              [<>EC2 Image Builder</>, <>Automates building, testing and distributing AMIs on a schedule. Free (pay for resources).</>],
              [<>EC2 Instance Store</>, <>Physical disk on the host. Very high I/O but <strong>ephemeral</strong>: lost when stopped. Use for cache/buffer/scratch.</>],
              [<>EFS</>, <>Managed NFS file system, Linux only, mounted on 100s of instances <strong>across multiple AZs</strong>. Pay per use, ~3× EBS gp2 price.</>],
              [<>EFS-IA</>, <>Infrequent Access class, up to 92% cheaper. Lifecycle policy moves unused files (e.g. 60 days).</>],
              [<>FSx for Windows</>, <>Managed Windows file share. SMB, NTFS, Active Directory.</>],
              [<>FSx for Lustre</>, <>High-performance Linux file system for HPC, ML, video processing. Integrates with S3.</>],
          ]}
          />
          <Tip label="EBS vs EFS vs Instance Store">EBS = one instance, one AZ. EFS = many instances, many AZs. Instance Store = fastest, but temporary.</Tip>
        </section>

        <section id="elb">
          <h2>Load Balancing &amp; Auto Scaling</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Vertical scaling</>, <>Bigger instance (scale up/down). Common for databases. Hardware limit.</>],
              [<>Horizontal scaling</>, <>More instances (scale out/in). Distributed apps.</>],
              [<>High availability</>, <>Run in at least 2 AZs to survive a data center loss.</>],
              [<>Elasticity</>, <>Auto-scaling based on load: pay per use, match demand.</>],
              [<>Agility</>, <>New resources in minutes, not weeks. (Not about scaling — a common distractor.)</>],
              [<>ELB</>, <>Managed load balancer: spreads traffic, single DNS endpoint, health checks, SSL termination, multi-AZ.</>],
              [<>ALB</>, <>Application LB, <strong>Layer 7</strong>: HTTP / HTTPS / gRPC, routing rules.</>],
              [<>NLB</>, <>Network LB, <strong>Layer 4</strong>: TCP/UDP, millions of requests/sec, static IP.</>],
              [<>GWLB</>, <>Gateway LB, <strong>Layer 3</strong>: GENEVE, routes traffic to 3rd-party firewalls / intrusion detection.</>],
              [<>Classic LB</>, <>Retired 2023.</>],
              [<>Auto Scaling Group</>, <>Adds/removes EC2 to match load, keeps min/max count, replaces unhealthy instances, registers to ELB.</>],
          ]}
          />
          <h3>ASG scaling strategies</h3>
          <ul>
            <li><strong>Manual</strong>: change size yourself</li>
            <li><strong>Simple / Step</strong>: CloudWatch alarm (CPU &gt; 70%) adds 2 units</li>
            <li><strong>Target tracking</strong>: keep average CPU around 40%</li>
            <li><strong>Scheduled</strong>: known patterns (min 10 at 5pm Friday)</li>
            <li><strong>Predictive</strong>: machine learning forecasts traffic and scales ahead</li>
          </ul>
        </section>

        <section id="s3">
          <h2>Amazon S3</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Buckets</>, <>Created in a region, globally unique name. No uppercase, no underscores, not an IP.</>],
              [<>Objects</>, <>Key = full path. Max 50 TB per object; use multi-part upload above 5 GB. No real folders.</>],
              [<>Security</>, <>IAM policies (user-based), bucket policies (resource-based, allow public or cross-account), ACLs, encryption. Access if IAM OR bucket policy allows, AND no explicit deny.</>],
              [<>Block Public Access</>, <>On by default to prevent data leaks. Can be set account-wide.</>],
              [<>Static website</>, <>Host static sites. 403 Forbidden → bucket policy doesn&apos;t allow public reads.</>],
              [<>Versioning</>, <>Bucket-level. Protects against deletes, easy rollback. Suspending keeps old versions.</>],
              [<>Replication</>, <>CRR (cross-region: compliance, latency) and SRR (same-region: log aggregation, prod→test). Versioning required on both. Asynchronous.</>],
              [<>Encryption</>, <>Server-side (default) or client-side (you encrypt before upload).</>],
              [<>IAM Access Analyzer for S3</>, <>Shows buckets that are public or shared with other accounts.</>],
              [<>S3 Express One Zone</>, <>Single-AZ &quot;directory bucket&quot;, single-digit ms latency, 10× faster than Standard. AI/ML, HPC.</>],
              [<>Storage Gateway</>, <>Hybrid bridge so on-premises systems can use S3 (File, Volume, Tape gateway — types not tested).</>],
          ]}
          />
          <Tip label="Durability vs availability">Durability is 11 nines (99.999999999%) for <strong>every</strong> storage class. Availability varies by class (Standard 99.99%).</Tip>
          <h3>Storage classes</h3>
          <Table
            head={["Class", "Availability", "Min duration", "Use for"]}
            rows={[
              [<>Standard</>, <>99.99%</>, <>—</>, <>Frequently accessed data</>],
              [<>Intelligent-Tiering</>, <>99.9%</>, <>—</>, <>Unknown patterns; auto-moves objects, small monitoring fee, no retrieval fee</>],
              [<>Standard-IA</>, <>99.9%</>, <>30 days</>, <>Less frequent but fast access: DR, backups</>],
              [<>One Zone-IA</>, <>99.5%</>, <>30 days</>, <>Secondary backups, data you can recreate (lost if AZ destroyed)</>],
              [<>Glacier Instant</>, <>99.9%</>, <>90 days</>, <>Archive accessed once a quarter, millisecond retrieval</>],
              [<>Glacier Flexible</>, <>99.99%</>, <>90 days</>, <>Expedited 1–5 min, Standard 3–5 h, Bulk 5–12 h (free)</>],
              [<>Glacier Deep Archive</>, <>99.99%</>, <>180 days</>, <>Cheapest. Standard 12 h, Bulk 48 h</>],
          ]}
          />
          <p>Move between classes manually or with S3 Lifecycle rules.</p>
          <h3>Storage types on AWS</h3>
          <ul>
            <li><strong>Block</strong>: EBS, EC2 Instance Store</li>
            <li><strong>File</strong>: EFS, FSx</li>
            <li><strong>Object</strong>: S3, Glacier</li>
          </ul>
        </section>

        <section id="db">
          <h2>Databases &amp; Analytics</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>RDS</>, <>Managed relational DB: Postgres, MySQL, MariaDB, Oracle, SQL Server, IBM Db2, Aurora. Auto backups, point-in-time restore, OS patching. You cannot SSH in.</>],
              [<>Aurora</>, <>AWS-built, MySQL/Postgres compatible. 5× MySQL, 3× Postgres performance. Storage grows to 256 TB. ~20% pricier than RDS.</>],
              [<>Aurora Serverless</>, <>Auto-scales with usage, pay per second. For intermittent/unpredictable workloads.</>],
              [<>Read Replicas</>, <>Scale <strong>reads</strong>, up to 15. Writes go only to main DB.</>],
              [<>Multi-AZ</>, <><strong>Failover</strong> for high availability. Standby is not readable.</>],
              [<>Multi-Region</>, <>Read replicas in other regions: DR + local reads. Replication cost.</>],
              [<>ElastiCache</>, <>Managed Redis / Memcached. In-memory cache, reduces DB load.</>],
              [<>DynamoDB</>, <>Serverless NoSQL <strong>key-value</strong> DB. Single-digit ms latency, millions of req/sec, 3 AZ replication. Standard &amp; IA table classes.</>],
              [<>DAX</>, <>In-memory cache only for DynamoDB (microseconds).</>],
              [<>DynamoDB Global Tables</>, <>Multi-region, active-active read/write.</>],
              [<>Redshift</>, <>Data warehouse, <strong>OLAP</strong>. Columnar storage, PB scale, SQL. Serverless option.</>],
              [<>EMR</>, <>Managed Hadoop/Spark big-data clusters on EC2.</>],
              [<>Athena</>, <>Serverless SQL queries directly on files in S3. $5/TB scanned.</>],
              [<>QuickSight</>, <>Serverless BI dashboards and visualizations.</>],
              [<>DocumentDB</>, <>&quot;Aurora for MongoDB&quot;: JSON / document NoSQL.</>],
              [<>Neptune</>, <>Graph database: social networks, fraud detection, knowledge graphs.</>],
              [<>Timestream</>, <>Serverless time-series database.</>],
              [<>Managed Blockchain</>, <>Join or create blockchain networks (Hyperledger Fabric, Ethereum).</>],
              [<>Glue</>, <>Serverless ETL (extract, transform, load) + Data Catalog used by Athena/Redshift/EMR.</>],
              [<>DMS</>, <>Database Migration Service. Source stays available during migration. Homogeneous (Oracle→Oracle) or heterogeneous (SQL Server→Aurora).</>],
          ]}
          />
          <Tip label="Pick the database">
            <ul>
              <li>Relational / OLTP → RDS or Aurora</li>
              <li>Analytics / OLAP / data warehouse → Redshift</li>
              <li>Key-value, serverless, massive scale → DynamoDB</li>
              <li>Cache → ElastiCache (any DB) or DAX (DynamoDB only)</li>
              <li>Query files in S3 with SQL → Athena</li>
              <li>MongoDB → DocumentDB · Graph → Neptune · Time-series → Timestream</li>
            </ul>
          </Tip>
          <Tip label="Read Replica vs Multi-AZ">Read Replicas = performance (scale reads). Multi-AZ = availability (failover).</Tip>
        </section>

        <section id="compute">
          <h2>Containers, Serverless &amp; Other Compute</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Docker</>, <>Packages apps in containers that run the same anywhere. Shares the host OS (lighter than VMs).</>],
              [<>ECS</>, <>Run Docker containers on EC2 instances <strong>you</strong> provision.</>],
              [<>Fargate</>, <>Run containers <strong>serverless</strong>: no EC2 to manage. Pay for vCPU/RAM.</>],
              [<>ECR</>, <>Private Docker image registry.</>],
              [<>EKS</>, <>Managed Kubernetes (cloud-agnostic). Nodes on EC2 or Fargate.</>],
              [<>Lambda</>, <>Function as a Service. Event-driven, auto-scales, max <strong>15 min</strong>, up to 10 GB RAM. Pay per request + duration. Free tier: 1M requests, 400k GB-s.</>],
              [<>API Gateway</>, <>Serverless managed REST / WebSocket APIs. Often API Gateway → Lambda → DynamoDB.</>],
              [<>AWS Batch</>, <>Managed batch jobs (start and end) as Docker images. No time limit, uses EC2/Spot.</>],
              [<>Lightsail</>, <>Simple virtual servers, DBs, networking with low predictable pricing. For beginners, WordPress, dev/test. No auto-scaling.</>],
          ]}
          />
          <Tip label="Lambda vs Batch">Lambda: time limit, limited runtimes, serverless. Batch: no time limit, any runtime in Docker, runs on EC2.</Tip>
          <Tip label="Serverless">Means you don&apos;t manage servers, not that none exist. Examples: Lambda, Fargate, DynamoDB, S3, Athena, Glue.</Tip>
        </section>

        <section id="deploy">
          <h2>Deploying &amp; Managing Infrastructure</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>CloudFormation</>, <>Infrastructure as Code (declarative templates). Repeat across regions/accounts. Can estimate cost, destroy and recreate stacks.</>],
              [<>Infrastructure Composer</>, <>Visual designer that shows/generates CloudFormation.</>],
              [<>CDK</>, <>Write infrastructure in JS/TS, Python, Java, .NET → compiled to CloudFormation.</>],
              [<>Elastic Beanstalk</>, <>PaaS: upload code, it handles EC2, ASG, ELB, RDS, health monitoring. Service is free; pay for resources.</>],
              [<>CodeCommit</>, <>Private Git repositories.</>],
              [<>CodeBuild</>, <>Compile and test code. Serverless, pay for build time.</>],
              [<>CodeDeploy</>, <>Deploy apps to EC2 <strong>and on-premises</strong> servers (hybrid). Needs CodeDeploy agent.</>],
              [<>CodePipeline</>, <>Orchestrates CI/CD: code → build → test → deploy.</>],
              [<>CodeArtifact</>, <>Stores software packages/dependencies (npm, pip, Maven…).</>],
              [<>Systems Manager (SSM)</>, <>Manage EC2 and on-premises fleets (hybrid): patching, run commands, config. Needs SSM agent.</>],
              [<>SSM Session Manager</>, <>Secure shell without SSH keys, bastion hosts, or port 22.</>],
              [<>SSM Parameter Store</>, <>Store configs and secrets, optional KMS encryption, versioning.</>],
          ]}
          />
          <Tip label="Hybrid services">CodeDeploy and Systems Manager work on-premises too. CloudFormation and Beanstalk are AWS-only.</Tip>
        </section>

        <section id="global">
          <h2>Global Applications</h2>
          <p>Why go global: lower latency, disaster recovery, harder to attack.</p>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Route 53</>, <>Managed DNS. Records: A (IPv4), AAAA (IPv6), CNAME (host→host), Alias (AWS resource).</>],
              [<>Routing policies</>, <>Simple (no health checks), Weighted (70/20/10 split), Latency (closest), Failover (DR with health check).</>],
              [<>CloudFront</>, <>CDN: caches content at edge locations. DDoS protection with Shield + WAF. Origins: S3 (with Origin Access Control), VPC origin, any HTTP backend.</>],
              [<>S3 Transfer Acceleration</>, <>Faster global uploads/downloads to S3 via edge locations.</>],
              [<>Global Accelerator</>, <>Uses AWS private network via edge, 2 Anycast static IPs. No caching. TCP/UDP, fast regional failover.</>],
              [<>Outposts</>, <>AWS server racks installed in <strong>your</strong> data center. You handle physical security.</>],
              [<>Wavelength</>, <>AWS services at the edge of <strong>5G</strong> networks. Ultra-low latency.</>],
              [<>Local Zones</>, <>Extension of a region closer to users in specific cities (e.g. Boston).</>],
          ]}
          />
          <Tip label="CloudFront vs Global Accelerator">CloudFront caches content (images, video). Global Accelerator doesn&apos;t cache; it speeds up TCP/UDP apps and gives static IPs.</Tip>
          <Tip label="CloudFront vs S3 CRR">CloudFront: global, cached for a TTL, static content. CRR: specific regions, near real-time, dynamic content.</Tip>
        </section>

        <section id="integration">
          <h2>Cloud Integration (Decoupling)</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>SQS</>, <><strong>Queue</strong>. Decouple apps. Messages kept 4 days default, max 14. Deleted after being read. Standard or FIFO (ordered).</>],
              [<>SNS</>, <><strong>Pub/sub</strong>. One message → all subscribers (email, SMS, Lambda, SQS, HTTP, mobile push). No retention.</>],
              [<>Kinesis</>, <><strong>Real-time big data streaming</strong>. Data Firehose loads streams into S3, Redshift, OpenSearch.</>],
              [<>Amazon MQ</>, <>Managed ActiveMQ / RabbitMQ for apps using open protocols (MQTT, AMQP, STOMP) when migrating. Doesn&apos;t scale like SQS/SNS.</>],
          ]}
          />
          <Tip label="Keyword match">Queue / decouple → SQS. Notify many / fan-out → SNS. Real-time streaming → Kinesis. Open protocols / migrate existing broker → Amazon MQ.</Tip>
        </section>

        <section id="monitor">
          <h2>Cloud Monitoring</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>CloudWatch Metrics</>, <>Metrics for every service. EC2 default every 5 min (detailed = 1 min, paid). EC2 RAM is <strong>not</strong> a default metric. Billing metric lives in us-east-1.</>],
              [<>CloudWatch Alarms</>, <>Trigger on metrics: Auto Scaling, EC2 actions (stop/reboot/recover), SNS notifications. States: OK, INSUFFICIENT_DATA, ALARM.</>],
              [<>CloudWatch Logs</>, <>Collect logs from Beanstalk, ECS, Lambda, Route 53, EC2/on-prem (needs CloudWatch agent).</>],
              [<>EventBridge</>, <>(formerly CloudWatch Events) Scheduled cron jobs or react to events (e.g. root user sign-in → SNS). Archive and replay events.</>],
              [<>CloudTrail</>, <>Audit history of <strong>API calls</strong> (console, CLI, SDK, services). Enabled by default. &quot;Who deleted this resource?&quot; → CloudTrail.</>],
              [<>CloudTrail Insights</>, <>Automated detection of unusual activity in events.</>],
              [<>X-Ray</>, <>Tracing for distributed apps/microservices: find bottlenecks and errors.</>],
              [<>Health Dashboard – Service History</>, <>Status of all AWS services in all regions, with history and RSS.</>],
              [<>Health Dashboard – Your Account</>, <>Personalized: AWS events that affect <strong>your</strong> resources, with remediation guidance.</>],
          ]}
          />
          <Tip label="CloudWatch vs CloudTrail vs Config">CloudWatch = performance metrics and logs. CloudTrail = who made which API call. Config = how resource configuration changed and whether it&apos;s compliant.</Tip>
        </section>

        <section id="vpc">
          <h2>VPC &amp; Networking</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>IP addresses</>, <>Public IPv4 changes on stop/start; private IPv4 stays. Elastic IP = fixed public IPv4. All public IPv4 cost $0.005/h. IPv6 is free and all public.</>],
              [<>VPC</>, <>Private network, <strong>regional</strong>.</>],
              [<>Subnet</>, <>Partition of a VPC, tied to an <strong>AZ</strong>. Public (internet access) or private.</>],
              [<>Internet Gateway</>, <>Gives the VPC internet access.</>],
              [<>NAT Gateway</>, <>Lets private subnets reach the internet while staying private (AWS-managed; NAT instance = self-managed).</>],
              [<>NACL</>, <>Subnet-level firewall, <strong>stateless</strong>, ALLOW and DENY rules, IPs only.</>],
              [<>Security Group</>, <>Instance/ENI-level firewall, <strong>stateful</strong>, ALLOW only, IPs or other SGs.</>],
              [<>VPC Flow Logs</>, <>Logs of IP traffic → S3, CloudWatch Logs, Firehose.</>],
              [<>VPC Peering</>, <>Connect two VPCs privately. No overlapping CIDR. <strong>Not transitive</strong>.</>],
              [<>VPC Endpoints</>, <>Reach AWS services privately. Gateway endpoint: S3 &amp; DynamoDB. Interface endpoint: most services.</>],
              [<>PrivateLink</>, <>Expose a service to 1000s of VPCs privately (needs NLB + ENI).</>],
              [<>Site-to-Site VPN</>, <>On-prem ↔ AWS, encrypted, over the public internet. Customer Gateway + Virtual Private Gateway.</>],
              [<>Direct Connect</>, <>Private physical line to AWS. Fast and secure. Takes at least a month to set up.</>],
              [<>Client VPN</>, <>Connect your computer (OpenVPN) into a VPC.</>],
              [<>Transit Gateway</>, <>Hub-and-spoke: connect thousands of VPCs and on-prem networks.</>],
          ]}
          />
          <Tip label="Exam tip">Only 1–2 VPC questions expected. Know NACL vs Security Group, VPN (public internet) vs Direct Connect (private line).</Tip>
        </section>

        <section id="security">
          <h2>Security &amp; Compliance</h2>
          <h3>Shared responsibility examples</h3>
          <Table
            head={["Service", "AWS", "Customer"]}
            rows={[
              [<>RDS</>, <>Underlying EC2, OS and DB patching, hardware</>, <>Security group rules, DB users, public access setting, SSL, encryption setting</>],
              [<>S3</>, <>Unlimited storage, encryption available, data separation, AWS staff can&apos;t see data</>, <>Bucket config and policy, IAM, enabling encryption</>],
          ]}
          />
          <p><strong>Shared:</strong> Patch management, configuration management, awareness &amp; training</p>
          <h3>Protection</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Shield Standard</>, <>Free DDoS protection for everyone (layer 3/4: SYN/UDP floods).</>],
              [<>Shield Advanced</>, <>$3,000/month per org. 24/7 DDoS Response Team, protection against cost spikes.</>],
              [<>WAF</>, <>Layer 7 web firewall on ALB, API Gateway, CloudFront. Blocks SQL injection, XSS, by IP/geo, rate limits.</>],
              [<>Network Firewall</>, <>Protects an entire VPC, layer 3 to 7, all directions.</>],
              [<>Firewall Manager</>, <>Manage security rules (SGs, WAF, Shield, Network Firewall) across all accounts in an Organization.</>],
          ]}
          />
          <h3>Encryption &amp; secrets</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>At rest / in transit</>, <>Stored data vs data moving over the network. Encrypt both.</>],
              [<>KMS</>, <>AWS manages encryption keys (software). &quot;Encryption&quot; on the exam → usually KMS. Opt-in for EBS, S3, RDS, Redshift, EFS; automatic for CloudTrail logs, Glacier, Storage Gateway.</>],
              [<>Key types</>, <>Customer managed (you control, rotation, BYOK), AWS managed (<code>aws/s3</code>), AWS owned (hidden), CloudHSM keys.</>],
              [<>CloudHSM</>, <>Dedicated encryption <strong>hardware</strong>; <strong>you</strong> manage the keys. FIPS 140-2 Level 3.</>],
              [<>Certificate Manager (ACM)</>, <>Free public SSL/TLS certificates with auto-renewal, for ELB, CloudFront, API Gateway.</>],
              [<>Secrets Manager</>, <>Stores secrets with forced automatic rotation (uses Lambda). Mostly for RDS passwords.</>],
          ]}
          />
          <h3>Detection &amp; compliance</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Artifact</>, <>Download compliance reports (ISO, PCI, SOC) and accept agreements (BAA/HIPAA).</>],
              [<>GuardDuty</>, <>ML threat detection from CloudTrail, VPC Flow Logs, DNS logs. Detects crypto-mining attacks.</>],
              [<>Inspector</>, <>Vulnerability scanning for EC2, ECR container images, and Lambda only.</>],
              [<>Config</>, <>Records resource configuration over time and checks compliance (&quot;Is SSH open to the world?&quot;).</>],
              [<>Macie</>, <>ML finds sensitive data (PII) in S3.</>],
              [<>Security Hub</>, <>Central dashboard aggregating findings across accounts (GuardDuty, Inspector, Macie, Config…). Needs Config enabled.</>],
              [<>Detective</>, <>Investigates the <strong>root cause</strong> of security findings using ML and graphs.</>],
              [<>IAM Access Analyzer</>, <>Finds resources shared outside your zone of trust (account or Organization).</>],
              [<>AWS Abuse</>, <>Report AWS resources used for spam, port scanning, DDoS, malware, illegal content.</>],
          ]}
          />
          <Tip label="Penetration testing">Allowed without approval on EC2, RDS, Aurora, CloudFront, API Gateway, Lambda, Lightsail, Beanstalk. Prohibited: DoS/DDoS, flooding, DNS zone walking.</Tip>
          <Tip label="Root-only actions">Change account settings, close the account, change/cancel Support plan, register as RI Marketplace seller, restore IAM permissions, enable MFA Delete on S3, view some tax invoices, sign up for GovCloud.</Tip>
        </section>

        <section id="ml">
          <h2>Machine Learning Services</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Rekognition</>, <>Images/video: objects, faces, celebrities, content moderation.</>],
              [<>Transcribe</>, <>Speech → text (subtitles, call transcripts). Can redact PII.</>],
              [<>Polly</>, <>Text → speech.</>],
              [<>Translate</>, <>Language translation.</>],
              [<>Lex</>, <>Chatbots (same tech as Alexa).</>],
              [<>Connect</>, <>Cloud contact center.</>],
              [<>Comprehend</>, <>NLP: sentiment, key phrases, topics in text.</>],
              [<>SageMaker AI</>, <>Build, train and deploy your own ML models.</>],
              [<>Kendra</>, <>ML-powered document search.</>],
              [<>Personalize</>, <>Real-time recommendations (Amazon.com tech).</>],
              [<>Textract</>, <>Extract text, handwriting, forms and tables from scanned documents.</>],
          ]}
          />
          <Tip label="Don't mix up">Transcribe = audio→text. Polly = text→audio. Textract = documents→text. Comprehend = understand text.</Tip>
        </section>

        <section id="billing">
          <h2>Account Management, Billing &amp; Support</h2>
          <h3>Accounts</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Organizations</>, <>Manage many accounts. Consolidated billing (one bill, volume discounts, shared RIs/Savings Plans). Organizational Units (OUs).</>],
              [<>SCP</>, <>Service Control Policies restrict what accounts/OUs can do. Apply to all users including root, but not the management account.</>],
              [<>Control Tower</>, <>Set up a secure multi-account environment with best-practice guardrails. Runs on top of Organizations.</>],
              [<>Resource Access Manager</>, <>Share resources (subnets, Transit Gateway, Aurora…) with other accounts.</>],
              [<>Service Catalog</>, <>Self-service portal of admin-approved products (CloudFormation templates).</>],
          ]}
          />
          <h3>Pricing models</h3>
          <ul>
            <li>Pay as you go</li>
            <li>Save when you reserve (EC2, DynamoDB, ElastiCache, RDS, Redshift)</li>
            <li>Pay less by using more (volume discounts)</li>
            <li>Pay less as AWS grows</li>
            <li>New accounts: up to $200 credits; Free Plan expires after 6 months. Always Free: e.g. Lambda 1M requests/month, DynamoDB 25 GB.</li>
            <li>Networking: traffic in same AZ via private IP is free; cross-AZ costs; inter-region costs more. Use private IPs.</li>
          </ul>
          <h3>Cost tools</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Pricing Calculator</>, <><strong>Estimate</strong> cost before building.</>],
              [<>Billing Dashboard</>, <>High-level overview of spend.</>],
              [<>Cost Allocation Tags</>, <>Track costs by tag (<code>aws:</code> generated, <code>user:</code> defined).</>],
              [<>Resource Groups / Tag Editor</>, <>Group resources by tags.</>],
              [<>Cost &amp; Usage Report</>, <>Most <strong>detailed</strong> billing dataset. Analyze with Athena, Redshift, QuickSight.</>],
              [<>Cost Explorer</>, <>Visualize costs, choose Savings Plans, <strong>forecast</strong> up to 12 months.</>],
              [<>Billing Alarms</>, <>CloudWatch alarm on actual cost (us-east-1). Simple.</>],
              [<>Budgets</>, <>Alerts on cost, usage, reservation, Savings Plans. Up to 5 SNS notifications.</>],
              [<>Cost Anomaly Detection</>, <>ML finds unusual spend, no thresholds needed.</>],
              [<>Savings Plans</>, <>EC2 Savings Plan (up to 72%, fixed family+region) or Compute Savings Plan (up to 66%, any family/region, EC2 + Fargate + Lambda).</>],
              [<>Compute Optimizer</>, <>ML right-sizing recommendations for EC2, ASG, EBS, Lambda.</>],
              [<>Service Quotas</>, <>Alert when near a limit; request increases.</>],
              [<>Trusted Advisor</>, <>Account checks in 6 categories: cost, performance, security, fault tolerance, service limits, operational excellence. Full checks need Business+ or Enterprise.</>],
          ]}
          />
          <h3>Support plans</h3>
          <Table
            head={["Plan", "Key features"]}
            rows={[
              [<>Basic (free)</>, <>24×7 customer service, docs, forums, core Trusted Advisor checks, Health Dashboard</>],
              [<>Business Support+</>, <>Production workloads. Full Trusted Advisor + API, 24×7 phone/chat with engineers, ≤30 min for critical system down, 3rd-party software support</>],
              [<>Enterprise</>, <>Business-critical. Designated <strong>TAM</strong>, &lt;15 min for production-critical, Security Incident Response, business reviews</>],
              [<>Unified Operations</>, <>Mission-critical. Architecture guidance, a team of designated specialists (TAM, billing, incident engineers)</>],
          ]}
          />
          <Tip label="Older plan names">Some practice questions still use Developer (business-hours email, &lt;12 h impaired), Business (&lt;1 h production down) and Enterprise (TAM, Concierge billing team, &lt;15 min). TAM always means Enterprise or above.</Tip>
        </section>

        <section id="identity">
          <h2>Advanced Identity</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>STS</>, <>Temporary, limited credentials (assume role, federation, cross-account).</>],
              [<>Cognito</>, <>User sign-in for your <strong>web and mobile app</strong> users (millions), incl. Google/Facebook login.</>],
              [<>Directory Service</>, <>Microsoft Active Directory in AWS: Managed Microsoft AD, AD Connector (proxy to on-prem), Simple AD.</>],
              [<>IAM Identity Center</>, <>Single sign-on to all accounts in an Organization and business apps (Salesforce, Microsoft 365).</>],
          ]}
          />
          <Tip label="Which identity?">Employees in one account → IAM. App customers → Cognito. One login for many accounts → IAM Identity Center. Temporary credentials → STS.</Tip>
        </section>

        <section id="other">
          <h2>Other AWS Services</h2>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>WorkSpaces</>, <>Desktop as a Service (virtual Windows/Linux desktops, VDI).</>],
              [<>AppStream 2.0</>, <>Stream a single desktop application to a web browser.</>],
              [<>IoT Core</>, <>Connect IoT devices to AWS.</>],
              [<>AppSync</>, <>Real-time GraphQL data sync for mobile/web apps.</>],
              [<>Amplify</>, <>Tools to build and deploy full-stack web and mobile apps.</>],
              [<>Device Farm</>, <>Test apps on real phones, tablets and browsers.</>],
              [<>AWS Backup</>, <>Central, policy-based backups across services, cross-region and cross-account.</>],
              [<>Elastic Disaster Recovery</>, <>Continuous block-level replication of servers into AWS for recovery.</>],
              [<>Application Discovery Service</>, <>Gather on-prem server data to plan migration (agentless or agent-based).</>],
              [<>Application Migration Service (MGN)</>, <>Lift-and-shift (rehost) servers into AWS.</>],
              [<>Migration Evaluator</>, <>Builds a data-driven business case for migration.</>],
              [<>Migration Hub</>, <>Central place to track migrations.</>],
              [<>Fault Injection Simulator</>, <>Chaos engineering experiments.</>],
              [<>Step Functions</>, <>Serverless visual workflows orchestrating Lambda and more.</>],
              [<>Ground Station</>, <>Satellite communications as a service.</>],
              [<>Pinpoint</>, <>Marketing campaigns via email, SMS, push, voice.</>],
          ]}
          />
          <h3>Disaster recovery strategies (cheapest → fastest)</h3>
          <ul>
            <li><strong>Backup &amp; Restore</strong>: cheapest, slowest recovery</li>
            <li><strong>Pilot Light</strong>: core functions running at minimum</li>
            <li><strong>Warm Standby</strong>: full app at minimum size</li>
            <li><strong>Multi-Site / Hot Site</strong>: full app at full size, most expensive</li>
          </ul>
          <h3>The 7 Rs of migration</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Retire</>, <>Turn off what you don&apos;t need.</>],
              [<>Retain</>, <>Do nothing for now.</>],
              [<>Relocate</>, <>Move to cloud version (e.g. VMware Cloud on AWS).</>],
              [<>Rehost</>, <>&quot;Lift and shift&quot; as-is (Application Migration Service).</>],
              [<>Replatform</>, <>&quot;Lift and reshape&quot; (DB → RDS, app → Beanstalk).</>],
              [<>Repurchase</>, <>&quot;Drop and shop&quot;: move to SaaS (CRM → Salesforce).</>],
              [<>Refactor</>, <>Re-architect cloud-native (monolith → microservices / serverless).</>],
          ]}
          />
        </section>

        <section id="arch">
          <h2>Architecting &amp; Ecosystem</h2>
          <h3>Design principles</h3>
          <ul>
            <li>Scalability, disposable resources, automation, loose coupling, services not servers</li>
            <li>Stop guessing capacity, test at production scale, automate, evolutionary architectures, drive with data, game days</li>
          </ul>
          <h3>Well-Architected Framework — 6 pillars</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Operational Excellence</>, <>Operations as code, small reversible changes, learn from failures. (CloudFormation, Config, CloudTrail, CloudWatch)</>],
              [<>Security</>, <>Strong identity, traceability, security at all layers, encrypt in transit and at rest, keep people away from data.</>],
              [<>Reliability</>, <>Auto-recover, test recovery, scale horizontally, stop guessing capacity. (Auto Scaling, Backups, Route 53)</>],
              [<>Performance Efficiency</>, <>Go global in minutes, use serverless, experiment often, &quot;mechanical sympathy&quot;.</>],
              [<>Cost Optimization</>, <>Pay for what you use, measure efficiency, use tags, managed services. (Budgets, Cost Explorer, Spot, RIs)</>],
              [<>Sustainability</>, <>Minimize environmental impact: maximize utilization, managed services, efficient hardware (Graviton).</>],
              [<>Well-Architected Tool</>, <>Free tool that reviews your workload against the 6 pillars.</>],
              [<>Carbon Footprint Tool</>, <>Track carbon emissions from your AWS usage.</>],
          ]}
          />
          <h3>Cloud Adoption Framework (CAF)</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Business perspectives</>, <>Business, People, Governance.</>],
              [<>Technical perspectives</>, <>Platform, Security, Operations.</>],
              [<>Transformation domains</>, <>Technology, Process, Organization, Product.</>],
              [<>Phases</>, <>Envision → Align → Launch → Scale.</>],
          ]}
          />
          <h3>Ecosystem</h3>
          <Table
            head={["Service / term", "What to remember"]}
            rows={[
              [<>Right sizing</>, <>Start small, match instance to need, review before and after migration.</>],
              [<>Marketplace</>, <>3rd-party software (AMIs, SaaS, containers), billed on your AWS bill.</>],
              [<>AWS Partner Network (APN)</>, <>Technology, Consulting and Training partners. Competency Program recognizes expertise.</>],
              [<>Professional Services</>, <>AWS experts working with your team.</>],
              [<>AWS Managed Services (AMS)</>, <>AWS team operates your infrastructure (patching, monitoring, backup) 24/365.</>],
              [<>re:Post</>, <>Community Q&amp;A (replaced Forums) + Knowledge Center. Not for time-sensitive or private questions.</>],
              [<>Solutions Library</>, <>Vetted reference solutions (formerly Quick Starts).</>],
              [<>Whitepapers, Blogs, Training</>, <>Free learning resources; AWS Academy for universities.</>],
          ]}
          />
        </section>

        <section id="match">
          <h2>Which Service? Quick Match</h2>
          <p>Most questions are &quot;pick the service&quot;. Read the keyword, pick the answer.</p>
          <Table
            head={["If the question mentions…", "Think"]}
            rows={[
              [<>Who deleted my resource / audit API calls</>, <>CloudTrail</>],
              [<>Monitor CPU, set an alarm</>, <>CloudWatch</>],
              [<>Config changes over time / compliance rules</>, <>Config</>],
              [<>Compliance reports (PCI, ISO, SOC)</>, <>Artifact</>],
              [<>Threat detection from logs</>, <>GuardDuty</>],
              [<>Software vulnerabilities on EC2 / ECR / Lambda</>, <>Inspector</>],
              [<>Find PII in S3</>, <>Macie</>],
              [<>Root cause of a security finding</>, <>Detective</>],
              [<>All security findings in one place</>, <>Security Hub</>],
              [<>Block SQL injection / XSS</>, <>WAF</>],
              [<>DDoS protection</>, <>Shield</>],
              [<>Manage encryption keys</>, <>KMS</>],
              [<>Hardware keys you control</>, <>CloudHSM</>],
              [<>Rotate DB passwords automatically</>, <>Secrets Manager</>],
              [<>SSL/TLS certificates</>, <>ACM</>],
              [<>Infrastructure as Code</>, <>CloudFormation</>],
              [<>Just upload code, PaaS</>, <>Elastic Beanstalk</>],
              [<>Patch / run commands on servers fleet</>, <>Systems Manager</>],
              [<>Run code without servers</>, <>Lambda</>],
              [<>Containers without managing servers</>, <>Fargate</>],
              [<>Kubernetes</>, <>EKS</>],
              [<>Simple cheap server for beginners</>, <>Lightsail</>],
              [<>Decouple apps with a queue</>, <>SQS</>],
              [<>Send to many subscribers</>, <>SNS</>],
              [<>Real-time streaming data</>, <>Kinesis</>],
              [<>SQL on files in S3</>, <>Athena</>],
              [<>Data warehouse / OLAP</>, <>Redshift</>],
              [<>Dashboards / BI</>, <>QuickSight</>],
              [<>ETL</>, <>Glue</>],
              [<>Migrate a database</>, <>DMS</>],
              [<>Lift-and-shift servers</>, <>Application Migration Service</>],
              [<>Cache content globally</>, <>CloudFront</>],
              [<>Static IP, global TCP/UDP performance</>, <>Global Accelerator</>],
              [<>DNS / routing users</>, <>Route 53</>],
              [<>Private dedicated line to AWS</>, <>Direct Connect</>],
              [<>Encrypted tunnel over internet</>, <>Site-to-Site VPN</>],
              [<>Connect many VPCs</>, <>Transit Gateway</>],
              [<>AWS in your own data center</>, <>Outposts</>],
              [<>5G ultra-low latency</>, <>Wavelength</>],
              [<>Login for app users</>, <>Cognito</>],
              [<>Single sign-on across accounts</>, <>IAM Identity Center</>],
              [<>Restrict accounts in an org</>, <>SCP (Organizations)</>],
              [<>Estimate cost before building</>, <>Pricing Calculator</>],
              [<>Forecast spend</>, <>Cost Explorer</>],
              [<>Alert when over budget</>, <>Budgets</>],
              [<>Best-practice checks on account</>, <>Trusted Advisor</>],
              [<>Right-size instances</>, <>Compute Optimizer</>],
              [<>Designated Technical Account Manager</>, <>Enterprise Support</>],
              [<>Hybrid storage to S3</>, <>Storage Gateway</>],
              [<>Shared file system for Linux EC2</>, <>EFS</>],
              [<>Cheapest long-term archive</>, <>Glacier Deep Archive</>],
              [<>Images / faces in photos</>, <>Rekognition</>],
              [<>Chatbot</>, <>Lex</>],
              [<>Build custom ML models</>, <>SageMaker AI</>],
              [<>Virtual desktops</>, <>WorkSpaces</>],
          ]}
          />
        </section>

        <section id="exam">
          <h2>Exam Day Strategy</h2>
          <ul>
            <li><strong>Multiple choice</strong>: 1 correct of 4. <strong>Multiple response</strong>: 2+ correct of 5+ (the question says how many — the software won&apos;t warn you).</li>
            <li>No penalty for wrong answers. Never leave a question blank; guess.</li>
            <li>Flag hard questions and come back at the end.</li>
            <li>Eliminate answers you know are wrong, then pick the one that makes the most sense.</li>
            <li>Few trick questions. Don&apos;t over-think. A feasible but very complicated solution is probably wrong.</li>
            <li>Unfamiliar service names are often distractors.</li>
            <li>You see pass/fail right away; the score comes by email a few days later.</li>
          </ul>
        </section>
      </Prose>
    </Main>
  );
}
