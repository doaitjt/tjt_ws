const faqs = [
	{
		title: 'About TJ TECH',
		contents: [
			{
				title: 'Who are we and what type of products/services do we offer?',
				detail: `
          TJ Tech Group with its fully flexible high-end disruptive business model, is a Singaporean established and trusted Forex CRM provider, located at Capital Place in the heart of Hanoi’s financial quarter.
          <br><br>
          The team consists of 60 professionals that provide premium support to help our domestic and international clients maximise profit through Quality Cost Delivery techniques; they also act as a bridge for knowledge transfer.
          <br><br>
          We offer a professional gateway to financial markets, custom software development, cutting-edge products, multiple platforms, liquidity aggregation, and more.
        `,
			},
			{
				title: 'What are our plans and orientation for future growth?',
				detail: `We are planning to shift our targeted customers to different sectors where we can direct more resources into the B2C market and focus on improving individual experience.`,
			},
			{
				title: 'Where do we provide our services?',
				detail: `Currently, our clients are financial institutions which are mainly located in Japan where the financial markets have flourished for years. In the near future, Southeast Asia with its potential growth in terms of infrastructure and technology, will be our short-term prioritised market.`,
			},
			{
				title: 'What are the benefits customers can receive after purchasing our products/services?',
				detail: `After we deliver our products/services, the development team will commit to guarantee a free from error system with advanced technical support. Customer satisfaction will always be prioritised. `,
			},
			{
				title: 'How can TJ TECH after sale service assist customers?',
				detail: `Our professional team will do a regular check-up to make sure there is no issue to be resolved. Not only do we regularly collect feedback, we also conduct a survey to find out unchecked errors and achieve maximum customer happiness.`,
			},
		],
	},
	{
		title: 'TJ TECH Customer Resource Management Software',
		contents: [
			{
				title: 'What type of CRM software can we offer?',
				detail: `Our CRM software not only manages the customer information including Identity, individual details (name, DOB, address…) but also illustrates their Trading History, current Profit/Loss, Account Balance, Deposit History so they can manage their assets better.`,
			},
			{
				title: 'How can customers adjust the setting of their own CRM software?',
				detail: `Customers can justify predetermined settings utilising our admin interface (admin page). It depends on the nature of their business that some features of the setting might vary. For example,  our platform setting also allows our clients to justify the withdrawal amount of users (minimum and maximum) as well as the withdrawal fee rate or third party fees when it comes to payment portals`,
			},
		],
	},
	{
		title: 'TJ TECH Supportive add-ons and plug-ins',
		contents: [
			{
				title: 'What is the IB scheme?',
				detail: `One of the special functions that we developed in the software is IB (Introducing Broker), this is a kind of affiliate marketing where exchanges can take advantage of people with a good network or own well-known marketing channels to attract their followers to register accounts, deposit money, and execute transactions. Our system will also manage the IB network according to the IB level and percentage of profit they might get from peers.`,
			},
			{
				title: 'Who can be qualified for MAM and PAMM masters?',
				detail: `MAMs and PAMMs can be defined as account owners with excellent trading skills, tactics and good trading records. Users subscribing to MAM accounts have more trading options since they can partially invest money for their own decision while for PAMM account, all trading decisions originate from the PAMM account owner. Our software is responsible for the profit-sharing structure which defines how many percentages are allocated between people in the network (normally depending on the percentage/amount of input capital).`,
			},
			{
				title: 'What types of plug-ins can TJ Tech offer?',
				detail: `
          - No Quote No Trade <br>
          Trader can not place order on a symbol when price stops updating on that symbol for predefined time period
          <br><br>
          - Multiple Swap <br>
          Retain the swap rate overnight (or using a standard overnight swap rate)
          <br><br>
          - Credit Bonus <br>
          Reset the credit to 0 when their negative balance exceeds the order amount
          <br><br>
          - Scalping Guard <br>
          Notice exchange about accounts with abnormal trading history that might be related to scalping (users can use BOT to do minimum trading to gain profit overtime)
          <br><br>
          - Dynamic Margin <br>
          Set up a maximum leverage for each currency pair.
        `,
			},
			{
				title: 'What is Reverse AI?',
				detail: `One of our future functions is Reverse AI, a software that collects and analyses traders’ behaviours to support their decision-making process. It helps mitigate the risk of losing more due to emotional instability. Users can choose to switch it on or off before doing transactions.`,
			},
		],
	},
	{
		title: 'TJ TECH System Maintenance Service',
		contents: [
			{
				title: `What can TJ Tech offer for maintaining the client's system?`,
				detail: `In terms of operational function, our team can be responsible for a variety of task including monitoring the change in the spread and notice clients when it goes above allowed limit, reconcile the spread in case it fluctuates (especially at the beginning of the day), recording and monitor related ratios, price changes, abnormal delays, connection lost periods and update with our clients to help them find the cause and resolve the problems in a rapid manner. We also update the financial news (which can affect traders' decisions) on multimedia channels of our clients to ascertain the stability of the information flow. Mentioning the KYC process, our team can be utilised to approve and reject the registering profile of users to avoid scams or any money laundering schemes. Last but not least, our system can detect some unusual transactions and notice the Exchanges about the possible red flags. After a certain period, our Chief Operating Officer will report the situations to our clients to make sure they are able to acknowledge and react on time in case of any unusual events. `,
			},
			{
				title: 'On what server clients data is stored?',
				detail: `We also offer our clients with premium servers (AWS cloud servers) that they can run the software on and be responsible to make sure it is free from error, available for back-up and restore. In any case of server upgrades, software upgrades, plugins upgrade, we can support the clients with our resources to ascertain that the information flow can run smoothly across the system.`,
			},
		],
	},
	{
		title: 'TJ TECH Customer Support Service',
		contents: [
			{
				title: 'What is TJ TECH customer support outsourcing service?',
				detail: `According to the clients demand, we can outsource the Customer Support function which is responsible for handling queries from users through an email system. For example, if a customer makes a payment but the money got delayed to arrive in their Account balance, normally resulting in a complaint through email, our operational team will be responsible to overlook the transaction, justify the account balance and respond to the customer.`,
			},
			{
				title: 'How do TJ Tech operate the 24/5 customer service?',
				detail: `In order to be able to offer 24/5 service, we have employees working in different shifts to provide a seamless system for traders to place transactions with ease at any time of the day.`,
			},
		],
	},
	{
		title: 'Marketing and Promotions',
		contents: [
			{
				title: 'How can customers order a product/service from TJ TECH?',
				detail: `When customers have the intention to place an order, they can directly contact our Sales Team to organise a meeting in which necessary information will be delivered. From that point, a contractual agreement will be drafted to ensure the duties from both parties are fulfilled.`,
			},
			{
				title:
					'How can customers get promotions and how many discount percentages will they be entitled to when purchasing a bundle of products/services?',
				detail: `Promotion type and level will be decided upon agreement between parties before signing the contractual agreement. Those things are expected to be negotiated in accordance with terms and conditions of the contemporary contract.`,
			},
			{
				title: 'How can customers receive updates, promotions, news and important information?',
				detail: `Customers can choose to subscribe to our emails under the sign up section of the website or through a sign up form.`,
			},
			{
				title: 'Does TJ Tech offer an all in one CRM solution for financial exchanges?',
				detail: `Having experience in building the whole system from scratch, we are confident that our bundles can single handedly provide a complete package for clients to set up and run their financial businesses.`,
			},
			{
				title: 'Does TJ Tech offer one size fit all CRM solution for financial exchanges?',
				detail: `Acknowledging the fact that every firm has their own distinctive features, our plan is to design a one-of-a-kind system for each of our customers according to their unique needs.`,
			},
		],
	},
	{
		title: 'Terms and Policies',
		contents: [
			{
				title: 'What are TJ Tech’s Principles of Conduct?',
				detail: `
          The TJ TECH GROUP considers that the basic values shared by management and employees are: professional commitment, respect for others, integrity, loyalty, and teamwork. These principles must be followed by us all.
          <br>
          <b>Professional commitment</b> means using the full ability, knowledge and know-how of each person, together with training to keep up-to-date. It means there must be a personal commitment and strong desire to do the tasks assigned and to acquire knowledge necessary to do the job\
          <br>
          <b>Respect for others</b> is an absolute necessity for the professional and personal development of each person. It implies an acceptance of other cultures and people of all origins. It is expressed by showing the wish to listen to others, to inform, to explain, and to engage in communication.
          <br>
          <b>Integrity</b> requires a strict adherence to honesty in all professional activities. It means that no individual may compromise the interests of the Group entrusted to that individual in favour of his or her own private interests – whether in dealing within TJ Tech Group or in dealing on behalf of the Group with third parties, whatever local practices might be. 
          <br>
          <b>Loyalty</b> requires honesty and fairness in dealing with superiors, colleagues, subordinates and third parties dealing with the Group. In particular, the pursuit of self-interest which conflicts with the goals of the TJ Tech Group is not allowed. It means following the guidelines and internal rules of the Group.
          <br>
          <b>Teamwork</b> is based on a sense of individual responsibility at work, which is more important than self-centred thinking. It encourages teamwork and bringing out the best in each person, in order to achieve the innovative objectives of the Group. It means rejecting management or operational methods which are structured more to the self-satisfaction of individuals rather than the interests of the TJ Tech Group.
        `,
			},
			{
				title: 'What are TJ Tech’s Principles of Action?',
				detail: `
          The TJ Tech Group states the principles of action which must be followed by all management teams and employees in the exercise of their professional responsibiliƟes. These principles of action (1) will help us innovate and achieve financial freedom for individuals, in accordance with the Group’s long-term strategy.
          <br>
          <b>Respect for the law</b>. All laws and regulations of the countries where we do business, must be followed. All Individuals must reject any active (doing) or passive (not doing) corruption whether in local international transactions. (2) Furthermore, Individuals must not take advantage of loopholes or inadequacies in any such laws or regulations where this would mean non-compliance with the norms of TJ Tech Group in the areas described below.
          <br>
          <b>Caring for the environment</b>. Management and individuals are to actively promote the protection of the environment.
          <br>
          <b>Worker health and safety</b>. All measures needed to ensure the best possible protection against health and safety risks must be taken.
          <br>
          <b>Employee rights</b>. The Company must ensure that employees’ rights are respected and must respect the following rules even if there are no local laws. It must not get involved in any form of forced labour, compulsory labour, or child labour(3) – whether directly or indirectly and must refrain from any form of discrimination with respect to their employees, whether in the recruitment process, during employment, or at the end of the employment relationship.
        `,
			},
			{
				title: 'What are TJ Tech disclaimers?',
				detail: `Refer to TJ TECH disclaimers page      `,
			},
			{
				title: 'What is TJ Tech privacy policy?',
				detail: `Refer to TJ TECH privacy policy page`,
			},
		],
	},
	{
		title: 'Contact Information',
		contents: [
			{
				title: 'What are TJ Tech Social Media channels?',
				detail: `
          Details about our social media can be found using informative link below:
          <a class="faq-social-link" href="https://www.facebook.com/tjtechvn" target="_blank">Facebook</a>
          <a class="faq-social-link" href="https://www.instagram.com/tjtechcompany" target="_blank">Instagram</a>
          <a class="faq-social-link" href="https://www.youtube.com/@tjtechcompany" target="_blank">Youtube</a>
          <a class="faq-social-link" href="https://www.linkedin.com/company/tj-tech-company" target="_blank">Linkedin</a>
          <a class="faq-social-link" href="https://twitter.com/TJTechCoLtd" target="_blank">Twitter</a>
          <a class="faq-social-link" href="https://rb.gy/i3cw4z" target="_blank">Google Business Profile</a>
          <a class="faq-social-link" href="https://g.page/r/Cb9RPIPH1DaEEBM/review" target="_blank">Google Review</a>
        `,
			},
			{
				title: 'Who to contact when I want to purchase TJ Tech products/services?',
				detail: `You can directly contact our Sales team through the company official phone line: 0243 2668 834 or through an email admin@tjtech.tech`,
			},
			{
				title: 'Where is TJ Tech office located?',
				detail: `After a few relocations, TJ TECH Office is now sited at Level 11, Capital Place Building. Regarded as a Beacon For Modern HaNoi for its convenient location, modest and compact architecture, professional and dedicated service staff, we have comfortably chosen to settle our workplace in this one-of-a-kind building`,
			},
			{
				title: 'How can I send my queries to the support team?',
				detail: `You can send your queries to us using the contact form. The link to fill in the form is below:

        `,
			},
			{
				title: 'What is TJ Tech’s contact information?',
				detail: `
          You can contact us using the details below:
          <br>
          Address: Level 11, Capital Place Building
          <br>
          29 Lieu Giai, Ba Dinh, Ha Noi
          <br>
          Phone: 0243 2668 834
          <br>
          Email: admin@tjtech.tech
        `,
			},
		],
	},
];
localStorage.setItem('data', JSON.stringify(faqs));

Vue.createApp({
	data: () => ({
		faqs,
    faqsCache: faqs,
		search: '',
	}),
  setup() {},
  methods: {
    onSearch() {
      this.faqs = faqs.filter(e => e.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
      const v = faqs.filter(e => e.title.toLocaleLowerCase().includes(this.search.toLocaleLowerCase()));
    }
  },
  mounted() {
    
  }
}).mount('#faq');
