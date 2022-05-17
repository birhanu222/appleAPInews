import React, { useEffect, useState } from 'react'
import  "./News.css"

function AppleNews() {
    const [AppleNews, AddAppleNews] = useState([]);

    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=apple&from=2021-07-11&to=2021-07-11&pageSize=6&sortBy=popularity&apiKey=*")
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data)
            const x = data.articles;
            AddAppleNews(x)
        })


        
        
    }, []);
    console.log(AppleNews)

    
    return (
        <div className="allNewsWrapper">
            <div className="container">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-12">
                        <div className="title-wrapper bold news-title-wrapper">
                            Latest News
                        </div>
                    </div>
                    {AppleNews.map((singleNews )=>{
                    let newsAuthor = singleNews.author;    
                    // let newsTitle = singleNews.title;
                    let newsLink =  singleNews.url;
                    let newsImage =  singleNews.urlToImage;

                    let newsWrapper = (
                        <div key= {newsAuthor}className="col-sm-12 col-md-4">
                            <div className="singleNewsWrapper">

                                <div className="newsThumbnail">
                                    <a href= {newsLink} target="_blank">
                                        <img src={newsImage}/>
                                    </a>
                                </div>

                                <div className="NewsInfoWrapper">
                                    <div className="title">
                                        <a href= {newsLink} target="_blank">
                                        {singleNews.title}
                                        </a>
                                    </div>

                                    <div className="newsDescription">
                                        {singleNews.description}
                                    </div>
                                </div>

                                {/* <div className="newsLink">
                                    <a href={newsLink} target="_blank"></a>
                                </div> */}

                            </div>
                        </div>

                    );
                    return newsWrapper;

                    }    
                    )}

                </div>

            </div>
            
        </div>
    )
}

export default AppleNews
