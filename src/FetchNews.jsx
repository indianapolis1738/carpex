import axios from "axios"
import { useState, useEffect } from "react"
import './fetchnews.css'

const FetchNews = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        axios
            .get('https://crypto-news-api.b4a.app/news/cointelegraph')
        
            .then((res) => {
                console.log(res.data)
                setNews(res.data)
                    .catch((err) => {
                        console.log(err)
                    })
            })
    }, []);

    return (
        <section className="section-news">
            <h2 className="title-main">Blog & Publications</h2>
            <p className="small-title">
                Get the latest news and publications from our blog
            </p>
            {
                news.map((report) => {
                    return (
                        <div key={report.title} className="news-div">
                            <div>
                                <div className="link-time">
                                    <p>{report.author}</p>
                                    <p>{report.date}</p>
                                </div>
                            <h4 className="title">{report.title}</h4>
                                <p className="news-content">{report.desc}</p>
                                
                            <a href={report.url}>Read full news</a>

                            </div>
                        </div>
                    )
                })
            }
      </section>
  )
}

export default FetchNews