import * as React from "react";
import Post from "./Post/Post";

import './Gellery.css'


class Gallery extends React.Component {
    state = {
        posts: [
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/e2dd1d89fad60cbc7f60ddb23ff2d4ca135b58ae2844a3b2f84ce3197ec95455/5eab3ab7/YAVdVFo-fWB3Md2vM-7iZHVCdbFXTIGHE5oh3opK5lne8M3kAAzKxN3LwyatddHXXE5cdt3Irc2PXxt1GOTjLQ==?uid=0&filename=AL2A7228.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048', width: '40%'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/1a5eff520ce17e884a5efa759cd5432b9849b50145c243cf2231e944869433cf/5eab54fa/34JFjJa4slI29jAscHS0SnmcKr_49KcvhV3lU8jeNQ3J1fGUp3_D9nVEAeTygXT86Hv8JMEmX92fIhE0DIsTTQ==?uid=0&filename=AL2A0810.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048', width: '40%'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/084486fba34db6e4049b1eba157b8e5ae5ec0362746114da7754c19d710dcf90/5eab5516/dUfTcnzpFYNbDLixjeg7-kKfzUUFGeoRljRsM2EnE8auBJke4mABmUfl510SplSoCxsyjwY5GL4tIBoR_VKKqw==?uid=0&filename=AL2A1788.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048', width: '40%'},

            {imgUrl: 'https://downloader.disk.yandex.ru/preview/e2dd1d89fad60cbc7f60ddb23ff2d4ca135b58ae2844a3b2f84ce3197ec95455/5eab3ab7/YAVdVFo-fWB3Md2vM-7iZHVCdbFXTIGHE5oh3opK5lne8M3kAAzKxN3LwyatddHXXE5cdt3Irc2PXxt1GOTjLQ==?uid=0&filename=AL2A7228.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048', width: '40%'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/ecb1b8b0a193e3cadaa6729b555394f19b15706ad6327524da8955a5db19498c/5eab5607/9BayCvcGoP1qfnWQAVVhwcBLG_dLTn3Y1EM9Ws9g8keX7J-6_P6vgZdKBucXnn9iCjWh4MTTxj4iQuvdMGuYWw==?uid=0&filename=AL2A0160.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048', width: '40%'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/e2dd1d89fad60cbc7f60ddb23ff2d4ca135b58ae2844a3b2f84ce3197ec95455/5eab3ab7/YAVdVFo-fWB3Md2vM-7iZHVCdbFXTIGHE5oh3opK5lne8M3kAAzKxN3LwyatddHXXE5cdt3Irc2PXxt1GOTjLQ==?uid=0&filename=AL2A7228.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048', width: '40%'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/014e34308c88876d028fde42b97bc1de1792c56a9ca5165314f81b1a48c8fccc/5eab5544/QHi711G4r4DgyCbCyiwdOtBcuPLJJ-6il-qSnnJAk630u3_QVoR2-2ZapuEMu8BcG9jCgCh586IrFpQiIAl9KA==?uid=0&filename=AL2A0593.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=321458157&size=2048x2048', width: '60%'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/014e34308c88876d028fde42b97bc1de1792c56a9ca5165314f81b1a48c8fccc/5eab5544/QHi711G4r4DgyCbCyiwdOtBcuPLJJ-6il-qSnnJAk630u3_QVoR2-2ZapuEMu8BcG9jCgCh586IrFpQiIAl9KA==?uid=0&filename=AL2A0593.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=321458157&size=2048x2048', width: '60%'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/014e34308c88876d028fde42b97bc1de1792c56a9ca5165314f81b1a48c8fccc/5eab5544/QHi711G4r4DgyCbCyiwdOtBcuPLJJ-6il-qSnnJAk630u3_QVoR2-2ZapuEMu8BcG9jCgCh586IrFpQiIAl9KA==?uid=0&filename=AL2A0593.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=321458157&size=2048x2048', width: '60%'},
            {imgUrl: 'https://downloader.disk.yandex.ru/preview/e2dd1d89fad60cbc7f60ddb23ff2d4ca135b58ae2844a3b2f84ce3197ec95455/5eab3ab7/YAVdVFo-fWB3Md2vM-7iZHVCdbFXTIGHE5oh3opK5lne8M3kAAzKxN3LwyatddHXXE5cdt3Irc2PXxt1GOTjLQ==?uid=0&filename=AL2A7228.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&tknv=v2&owner_uid=554151815&size=2048x2048', width: '40%'},
        ]
    }

    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>

                <div >
                    {
                        this.state.posts.map((post) =>

                            <span className="post">
                                <Post
                                    imgUrl={post.imgUrl}
                                    width={post.width}
                                ></Post>
                            </span>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;
