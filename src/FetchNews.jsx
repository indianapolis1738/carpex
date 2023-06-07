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
        <section>
            <h2 className="title-main">News</h2>
            {
                news.map((report) => {
                    return (
                        <div key={report.title} className="news-div">
                            <div>
                            <h4 className="title">{report.title}</h4>
                                <p className="news-content">{report.desc}</p>
                                <div className="link-time">
                                    <a href={report.url}>Read full news</a>
                                    <p>{report.date}</p>
                                </div>
                            

                            </div>
                        </div>
                    )
                })
            }
      </section>
  )
}

export default FetchNews