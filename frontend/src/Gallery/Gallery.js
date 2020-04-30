import * as React from "react";
import Post from "./Post/Post";

import './Gellery.css'


class Gallery extends React.Component {
    state = {
        posts: [
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/e2dd1d89fad60cbc7f60ddb23ff2d4ca135b58ae2844a3b2f84ce3197ec95455/5eab3ab7/YAVdVFo-fWB3Md2vM-7iZHVCdbFXTIGHE5oh3opK5lne8M3kAAzKxN3LwyatddHXXE5cdt3Irc2PXxt1GOTjLQ==?uid=0&filename=AL2A7228.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/e2dd1d89fad60cbc7f60ddb23ff2d4ca135b58ae2844a3b2f84ce3197ec95455/5eab3ab7/YAVdVFo-fWB3Md2vM-7iZHVCdbFXTIGHE5oh3opK5lne8M3kAAzKxN3LwyatddHXXE5cdt3Irc2PXxt1GOTjLQ==?uid=0&filename=AL2A7228.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048'},
        ]
    }

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>

                <div>
                    {
                        this.state.posts.map((post) =>
                            <div className="postBlock">
                                <Post
                                    imgUrl={post.imgUrl}
                                ></Post>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;
