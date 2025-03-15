

const Services =()=>{
    const data=
        [{title: "Notes", description: "Get Rgpv Btech Toper's Notes",icon: "https://topperworld.in/media/elementor/thumbs/Topperworld-notes-qjm1nqvfjjnan9o9wrly83e1sn8ogmaj2sdn49jf44.png"},
        {title: "PYQs", description: "Get Chapter Wise Previous Year Question", icon: "https://topperworld.in/media/elementor/thumbs/paper-qjm1nwigojv0kxg2zu1pn1ytcygvqswx3kajzxb22s.png" },
        {title: "Book Exchanger", description: "Get books from the best authors", icon: "https://topperworld.in/media/elementor/thumbs/Topperworld-ebooks-qjm1o17nmq1g6z998e2uhis4bvtptafks7jzeb437o.png"},
        {title: "Syllabus", description: "Get Rgpv syllabus", icon: "https://topperworld.in/media/elementor/thumbs/checklist-1-qjm1nye527xl85dcouuys1hqjq7m674drtliyh89qc.png"}]

        const premiumData=
        [{title: "Quiz", description: "Get Rgpv Btech Chapter Wise Quiz",icon: "../src/assets/images/Quiz.png"},
        {title: "Pyq-Answer", description: "Get Chapter Wise Previous Year Questions Answer", icon: "../src/assets/images/pyq.png" },
        ]
    
    return(<>
        <h1 className="g-text text-center">Our Services</h1>
    <div className=" rounded-2xl m-10  grid sm:grid-cols-2 md:grid-cols-4  gap-4 p-4 ">{
    data.map((item,index)=>(
        
            <div key={index} className="bg-[rgb(20,21,21)] rounded-2xl lg :h-55 w-55 ml-3 shadow-sm hover:shadow-blue-600">
                <div className="flex flex-col items-center text-center space-y-4 p-4">
                    <img  className="h-20 w-20 hover:-translate-y-2 mt-1.5" src={item.icon} alt={item.title}/>
                    <h1 className="text-blue-600 text-2xl font-bold mt-0.5">{item.title}</h1>
                    <p className=" ">{item.description}</p>
                </div>

            </div>))}
            </div>
            <h1 className="g-text text-center">Premium Feature</h1>
            <div className=" rounded-2xl m-10  grid sm:grid-cols-2 md:grid-cols-4  gap-4 p-4 ">{
   premiumData.map((item,index)=>(
            <div key={index} className="bg-[rgb(20,21,21)] rounded-2xl lg :h-55 w-55 ml-3 shadow-sm hover:shadow-blue-600">
                <div className="flex flex-col items-center text-center space-y-4 p-4">
                    <img  className="h-20 w-20 hover:-translate-y-2 mt-1.5 " src={item.icon} alt={item.title}/>
                    <h1 className="text-blue-600 text-2xl font-bold mt-0.5 ">{item.title}</h1>
                    <p className=" ">{item.description}</p>
                </div>

            </div>))}
            </div>

    </>
    )
}

export default Services;