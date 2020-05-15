import Post from './Post'
import './style.less'
// import './css/styles.css'
// import xml from "путь до xml"

const post = new Post ('Webpack Post Title');
console.log('Post to String:', post.toString())

async function start () {
    return await Promise.resolve('ЕБОШИТЬ!!!!')
}

start().then(console.log);