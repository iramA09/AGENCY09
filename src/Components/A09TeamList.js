import React from 'react'

const A09TeamList = () => {
    const A09TeamListData = [

        {
            names: [
                "Tushar Pradeep Khakhar	 - 	Director",
                "Gautam Anand	 - 	Co Founder and Head of Content",
                "Bipeen Shantinath Nadgauda	 - 	Co Founder & Head of Tech",
                "Krunal Kishor Bhavsar	 - 	Finance Manager",
                "Rakesh Nandkishor Gawas	 - 	Group Art Director",
                "Chaitali Nikhil Rajadhyaksha	 - 	Sr. Art Director",
                "Aditya Arun Jadhav	 - 	Sr. Art Director",
                "Akshay Sudhir Jadhav	 - 	Project Leader",
                "Archita Kaustubh Arekar	 - 	Head - Culture",
                "Yogendra Vishwakarma	 - 	Sr. Account Supervisor",
                "Adesh Govind Bandekar	 - 	UI UX Designer",
                "Ratna Vinay Tejvir	 - 	Senior Accounts Manager ",
                "Faiz Farooqui	 - 	Jr Copy Writer",
                "Prashant P Paria	 - 	Sr.Client Servicing Executive",
                
            ],
        },
        {
            names: [
                "Farhan Shaikh	 - 	Merchandiser",
                "Uma Bipin Chavan	 - 	Sr. Keyword Manager",
                "Pratik M Narayankar	 - 	Sr Performance Media Executive",
                "Anisha N Borhade	 - 	Sr. SEO Executive",
                "Omar Shethwala	 - 	Performance Media Executive",
                "Raj Richard D'Souza	 - 	Social Media Intern",
                "Harsh Mehta	 - 	Project Intern",
                "Pavankumar Vitthal Sarde	 - 	Graphic Designer",
                "Srushti Mangesh Pawar	 - 	Copywriter",
                "Abhishek Doshi	 - 	Account Director",
                "Saheb Singh Sahni	 - 	Director - Strategy",
                "Sonia Rawat	 - 	Copywriter",
                "Ankit Ramesh Madracha	 - 	Sr.Client Servicing Executive",
                "Shefali Rishiraj	 - 	Copy Supervisor",
                "Srimoyee Bhattacharya	 - 	Sr Content Creator",
                "Gargi Mhatre	 - 	Sr. Graphic Designer",         
            ],
        },
        {
            names: [
                "Chaitya Fofaria	 - 	Client Servicing Executive",
                "Chetan Mudliyar	 - 	Social Media Executive",
                "Rohan Masam	 - 	Sr.Client Servicing Executive",
                "Gaurav Eknath Kande	 - 	Production Supervisor",
                "Aniket Sakpal	 - 	Sr. Brand Strategy & A09 Store",
                "Siddesh More	 - 	Art Director - Studio",
                "Rajesh Patalia	 - 	Co Founder - ACADEMY 09",
                "Shadab Anwar Shaikh	 - 	Ass. Manager - Editing",
                "Mayank Desai	 - 	Business Manager - Growth",
                "Shivangi Ramesh Kothari	 - 	Sr. Manager - Growth",
                "Priya Vasat	 - 	Sr. Content Supervisor",
                "Laxmi Raut	 - 	Manager - Accounts / Finance",
                "Imran Shaikh	 - 	Sr Content Creator",
                "Shivani Khandelwal	 - 	Group Project Manager",
                "Chandra Harish Suthar	 - 	Executive - Project Management",
                "Rasika Nipane	 - 	Sr. Executive - Project Management",
            ]
        },       
         {
            names: [
                "Rupen Mehta	 - 	Ass. Lead Video Editor",
                "Sanket Ankushrao	 - 	Sr. Keyword Executive",
                "Mansi Chaudhari	 - 	Jr. Visualizer",
                "Dhanashree Palande	 - 	Sr. Visualizer",
                "Shahera Qureshi	 - 	Content Creator",
                "Ketan Anil Shivadekar	 - 	Creative Director - Art",
                "Pradnya Satle	 - 	Jr. Visualizer",
                "Rohit Shamkant More	 - 	HTML Developer",
                "Trinete Rodrigues	 - 	Sr.Copywriter",
                "Mamtesh Balkrushna Kadu	 - 	Motion Graphic Artist",
                "Iram Qureshi	 - 	HTML Developer",
                "Swapnil Mahadeo Sawantt	 - 	Account Manager - Client Servicing",
                "Vedant Sandeep Sawant	 - 	Sr. Visualizer",
                "Lesha Divesh Gandhi	 - 	HTML Developer",
            ]
        },
        {
            names: [
                "Ritesh Ramji Shidruk	 - 	Sr. Visualizer",
                "Mahesh Mohite	 - 	Keyword Executive",
                "Anushka Sanjay Horambe	 - 	Social Media Executive",
                "Utkarsh Shashikant Acharekar	 - 	Lead - PHP Developer",
                "Faaiza S Khan	 - 	Brand Advisor",
                "Dhwani Rajen Gandhi	 - 	Associate Art Director",
                "Aditya Rajendra Sawant	 - 	Sr Content Creator",
                "Shubham Sanjay Ghanekar	 - 	Keyword Executive",
                "Chaitanya Rajendra Ghadi	 - 	Motion Graphic Artist",
                "Gaurav Rajendra Patil	 - 	PHP Developer",
                "Omprakash Dilip Rajak	 - 	Sr.PHP Developer",
                "Sayali sandesh Jadhav	 - 	Accountant",
                "Dhairya Rajesh Patalia	 - 	Digital Marketing Associate",
                "Aaisha Jawed Baga	 - 	HR Associate",
                "Kevin Prakash Raval	 - 	Jr. Video Editor",
                "Siddhesh vishnu Kadam	 - 	Property Consultant",
                "Sunit Bhavin Vadhia	 - 	Sr.HTML Developer",
                "Tanvi Shekhar Oroskar	 - 	Jr. Graphic Designer",
                "Sushant Dilip Divekar	 - 	Project Manager",
            ]
        }

    ]

  return (
    <>
    <section className='aboutMarquee'>


       
    
        {A09TeamListData.map((A09TeamList, index) => (
            <div className="marqueeTeam"><div className="track">
            <div className="content" key={index} >
                {A09TeamList.names.map((name, nameIndex) => (
                    <span key={nameIndex}>
                     {name}
                    </span>
                ))}
            </div>
            </div></div>
         ))}





    </section>
    </>
  )
}

export default A09TeamList
