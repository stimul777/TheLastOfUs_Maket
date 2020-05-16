
// Подключение стилей
import './styles.css'



// import xml from "путь до xml"
import Post from './Post'
const post = new Post ('Webpack Post Title');
console.log('Post to String:', post.toString())

async function start () {
    return await Promise.resolve('ЕБОШИТЬ!!!!')
}

start().then(console.log);