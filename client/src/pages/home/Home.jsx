import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import axios from "axios"

export default function Home () {
  const [posts, setPosts] = useState([])
  const {search} = useLocation()
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/api/posts" + search)
      setPosts(res.data)
    }

    fetchPosts()
  }, [])

  return (
    < >
        <Header />
        <div className="home">
        <Posts posts={posts} />
        <Sidebar />
        </div>
    </>
  )
}
