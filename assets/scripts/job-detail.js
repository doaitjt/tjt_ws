
const jobs = [
  {
    id: '0',
    title: `Senior Business Analyst`,
    detail: `
      <div class="job-detail">Job Description</div>
      <ul class="job-descriptor">
        <li>Work closely with various stakeholders and business teams to capture and fully understand business needs.</li>
        <li>Support in the product development process, from idea planning and requirements definition to feature development.</li>
        <li>Create and manage document systems.</li>
      </ul>
      <div class="job-detail">Successful candidate</div>
      <ul class="job-descriptor">
        <li>Degree in Computer Science, Computer Science or Electrical Engineering, Information Technology or related fields.</li>
        <li>has 1-3 years experience in business analysis or related work.</li>
        <li>Good knowledge of English</li>
        <li>Good communication and interpersonal skills.</li>
        <li>Good problem solvers, strong sense of responsibility, and good ability to work in teams.</li>
      </ul>
    `
  },
  {
    id: '1',
    title: `Backend Java Engineer`,
    detail: `
      <div class="job-detail">As a Backend Java Engineer, your responsibilities include, but are not limited to</div>
      <ul class="job-descriptor">
        <li>Develop, build, and maintain efficient server-side components.</li>
        <li>Collaborate with product teams to create scalable software features.</li>
        <li>Analyze and implement fixes and unprotected code where necessary.</li>
      </ul>
      <div class="job-detail">Successful candidate</div>
      <div class="job-descriptor">As a potential backend engineer, you should have</div>
      <ul class="job-descriptor">
        <li>A strong foundation in computer science.</li>
        <li>Experience using Java/Java Spring Frameworks or Golang.</li>
        <li>Proven experience with SQL, NoSQL databases.</li>
        <li>Good understanding and hands-on experience building APIs, especially RESTful APIs for microservices.</li>
      </ul>
      <div class="job-descriptor">Familiarity with version control systems, especially his GitHub/Gitlab</div>

    `
  },
  {
    id: '2',
    title: `Front-end developer`,
    detail: `
      <div class="job-detail">As a front-end developer, your tasks include</div>
      <ul class="job-descriptor">
        <li>Develop, test, and maintain responsive web apps with an elegant UX that delights users and increases productivity.</li>
        <li>Write clean, modular code that you're proud of, with scalability and performance in mind.</li>
        <li>Work with a cross-functional team of Product Managers, UX Designers, and QA Engineers to deliver software on time and with high quality.</li>
      </ul>
      <div class="job-detail">Successful candidate</div>
      <ul class="job-descriptor">
        <li>3+ years web or mobile her application development experience. • Hands-on experience with markup languages ​​and JavaScript</li>
        <li>JavaScript framework</li>
        <li>UI frameworks (Angular Material Design, Bootstrap, etc.)</li>
        <li>PWA, SPA, Bundle, Redux, Webworker, ES6/7</li>
        <li>Test frameworks (JEST, Mocha, etc.)</li>
        <li>Familiarity with browser testing and debugging</li>
        <li>Deep understanding of the entire web development process (design, development, deployment)</li>
      </ul>
    `
  },
  {
    id: '3',
    title: `Senior Data Analyst`,
    detail: `
      <div class="job-detail">Job Description</div>
      <ul class="job-descriptor">
        <li>Use automated tools to extract data from various sources.</li>
        <li>Perform analysis to assess data quality and its importance.</li>
        <li>Reorganization, maintenance and development of databases and data systems.</li>
      </ul>
      <div class="job-detail">Successful candidate</div>
      <ul class="job-descriptor">
        <li>Excellent problem-solving skills.</li>
        <li>Extensive experience with data visualization software (Tableau, Power BI, Qlik, etc.)</li>
        <li>Knowledge of SQL and hands-on practice with relational databases and data warehouses.</li>
        <li>Works with Excel, SPSS, and SAS.</li>
        <li> Familiarity with ETL frameworks, data lakes, and data warehouses.</li>
      </ul>
    `
  },

];

const { createApp } = Vue

createApp({
  data() {
    return {
      currentPost: 0,
      currentIndex: 0,
      post: null,
    }
  },
  setup() {
    const setPost = (order) => {
      this.currentIndex = order;
      localStorage.setItem('jobDetail', JSON.stringify(jobs[order]))
    }
    return {
      setPost
    }
  },
  mounted() {
    const query = location.search;
    const urlParams = new URLSearchParams(query);
    this.currentPost = +urlParams.get('q');
    this.post = jobs[this.currentPost];
  }
}).mount('#job')
