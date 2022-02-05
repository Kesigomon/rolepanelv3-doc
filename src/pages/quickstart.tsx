import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
const QuickStart = () =>{
    return(
        <div>
            <h1>役職パネルクイックスタート</h1>
            役職パネルBOTを初めて使う方向けのガイドです。
            <h2>スラッシュコマンドの使い方</h2>
            Discordのメッセージ欄に`/`と入力すると使用できるコマンドが出現します。<br/>
            役職パネルでは`/rp`から始まるコマンドを利用してパネルを作ったり、役職を追加したりします。<br/>
            <StaticImage src="../images/test.png" alt={""} height={500}/>
            <h2>createコマンド</h2>
            パネルを作る時は`create`コマンドを利用します。
            <h2>addコマンド</h2>
            パネルに役職を追加する時は`add`コマンドを利用します。
            <h2>選択コマンド</h2>
            追加先のパネルを選択するには、まずパネルを右クリックします。
            その後、`add`コマンドを使用すると、選択したパネルに役職を追加できます。
        </div>
    )
}

export default QuickStart