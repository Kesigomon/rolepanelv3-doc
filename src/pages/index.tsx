import * as React from "react"
import {Link} from 'gatsby';

// markup
const IndexPage = () => {
    return (
        <div>
            <p>役職パネルのドキュメントです</p>
            <h1>役職パネルとは？</h1>
            <p>サーバーメンバーが自由につけられる役職の付与・解除を自動化するBOTです。</p>
            <p>サーバーの管理者がこのBOTを利用して「役職パネル」を作成し、メンバーはそのパネルを確認してリアクションを行います。</p>
            <p>すると、そのリアクションに対応した役職をBOTが自動で付与してくれます。</p>
            <h1>招待リンク</h1>
            <p>このBOTの導入には、利用規約への同意が必要になります。<Link to={"/tos"}>こちら</Link>からご確認をお願いします。</p>
            <p>botの導入をもって、利用規約へ同意したとみなします。</p>
            <a href={"https://discord.com/api/oauth2/authorize?client_id=971523089550671953&permissions=268790848&scope=bot%20applications.commands"}>
                Add to Your Server
            </a>
            <h1>サポートサーバー</h1>
            <a href={"https://discord.gg/CjgwJGC3uv"}>
                https://discord.gg/CjgwJGC3uv
            </a>
        </div>
    )
}

export default IndexPage
