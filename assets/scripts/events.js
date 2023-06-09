const events = [
  {
    title: `TJ TECH achieved success with their new Customer support team.`,
    detail: `
    TJ Tech, a leading CRM provider for financial exchange, has recently announced the launch of their 24/5 support team, which is set to provide unparalleled customer service to their clients. This new support team will be available round the clock, five days a week, to assist their clients with any queries or concerns they may have.
    <br><br>
    The decision to launch this new support team comes after a thorough analysis of the needs and requirements of their clients. With the financial markets operating 24 hours a day, TJ Tech understands the importance of being available to their clients at all times. This new initiative is a testament to their commitment to providing the best possible customer service to their clients.
    <br>br>
    In addition to the launch of their 24/5 support team, TJ Tech is also proud to announce that their accuracy rate has increased from 60% to 90% in just one year of operation. This remarkable improvement is a result of their continuous efforts to enhance their systems and processes, and their commitment to providing their clients with the most accurate and reliable data.
    <br>br>
    The increase in accuracy rate is a significant achievement for TJ Tech, and it reflects their dedication to excellence in all aspects of their operations. With the launch of their new 24/5 support team, TJ Tech is poised to continue providing exceptional service to their clients and maintaining their position as a leading CRM provider in the financial exchange industry.
    `
  },
  {
    title: `TJ TECH completed the digital transformation and cloud data migration process`,
    detail: `
    TJ Tech, a leading CRM software provider for financial exchange, has announced the successful completion of its digital transformation and cloud data migration process. The company has migrated its entire CRM system to the cloud, allowing it to provide faster and more secure access to its customers' data.
    <br>
    <br>
    The migration process involved the adoption of the latest cloud technologies and the re-engineering of TJ Tech's existing software architecture. This has resulted in a more agile and scalable CRM platform, enabling TJ Tech to deliver innovative solutions that better serve the needs of its customers.
    <br>
    <br>
    Commenting on the completion of the project, TJ Tech's CEO said, "We are thrilled to have completed our digital transformation and cloud migration process. This is a significant milestone for TJ Tech, and it will allow us to better serve our customers by providing them with faster and more secure access to their data."
    <br>
    <br>
    The company's customers can now enjoy improved performance and scalability, with the cloud-based system providing greater flexibility and reliability. In addition, the migration process has resulted in significant cost savings for TJ Tech, enabling it to invest in the development of new products and features for its CRM software.
    <br>
    <br>
    TJ Tech's commitment to digital transformation and innovation has positioned it as a leader in the CRM software industry, and its latest achievement is a testament to its ongoing efforts to provide its customers with the best possible service.    
    `
  },
  {
    title: `TJ TECH opened their second office in Vietnam following the expansion plan.`,
    detail: `
    TJ Tech, a leading CRM software provider for financial exchange, has announced the opening of its second office as part of its expansion plans. The new office is located in a prime commercial area in the heart of the city and is equipped with state-of-the-art facilities to support the company's growing team.
    <br>
    <br>
    The decision to open a second office comes as a result of TJ Tech's increasing success in the financial exchange market and the growing demand for its innovative CRM software solutions. The company's software solutions have been widely adopted by financial exchange institutions around the world, and its customer base continues to grow at a rapid pace.
    <br>
    <br>
    With the new office, TJ Tech aims to strengthen its presence in the market and expand its operations to better serve its customers. The company believes that the second office will enable it to provide even better customer support and faster response times to its growing customer base.
    <br>
    <br>
    Speaking about the expansion, TJ Tech's CEO said, "We are excited to announce the opening of our second office as part of our ongoing expansion plans. This new office will enable us to provide even better support to our customers and further cement our position as a leading provider of CRM software solutions for financial exchange institutions."
    <br>
    <br>
    The new office is now open and fully operational, and the company's team is looking forward to welcoming visitors and clients to the new location. With its commitment to innovation and customer satisfaction, TJ Tech is well positioned for continued growth and success in the financial exchange market.    
    `
  },
  {
    title: `TJ TECH’s announcement on the launch of new server`,
    detail: `
    TJ Tech, a leading CRM software provider for financial exchange, has announced the launch of its new server as part of its expansion plans. The new server is aimed at improving the company's capacity to handle increasing demand from its growing customer base.
    <br>
    <br>
    With the new server, TJ Tech is set to enhance the speed, reliability, and security of its CRM software. The company has been working diligently to ensure that the server is equipped with the latest technology and features to deliver an unparalleled customer experience.
    <br>
    <br>
    According to the CEO of TJ Tech, the expansion is a result of the company's dedication to providing top-notch customer service and its commitment to staying ahead of the competition. He added that the new server will allow the company to handle the increasing demand from its customers while maintaining the highest standards of performance and reliability.
    <br>
    <br>
    The new server is part of a larger expansion plan that includes hiring more staff and increasing investment in research and development. The move is aimed at ensuring that TJ Tech remains at the forefront of the CRM software industry and continues to provide its customers with the best possible service.
    <br>
    <br>
    TJ Tech's CRM software is used by a wide range of financial institutions, including banks, trading firms, and investment companies. The software provides a comprehensive suite of features that enables these organizations to manage their customer relationships more effectively and efficiently.
    <br>
    <br>
    The launch of the new server is expected to be a game-changer for TJ Tech, enabling the company to provide its customers with an even better service and helping it to cement its position as a leading CRM software provider for financial exchange.
    
    `
  },
];


const r = document.querySelectorAll('.nav-detail');
r?.forEach((e, i) => {
  e.addEventListener('click', () => {
    localStorage.setItem('eventDetail', JSON.stringify(events[i]));
  });
});