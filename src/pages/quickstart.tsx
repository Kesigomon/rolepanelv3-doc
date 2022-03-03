import React from 'react';
import {StaticImage} from 'gatsby-plugin-image';
import CommandBox from "../components/commandBox";
const QuickStart = () =>{
    return(
        <div>
            <h1>役職パネルクイックスタート</h1>
            役職パネルBOTを初めて使うサーバー管理者向けのガイドです。<br/>
            最低限の使い方のみを書いてあるので、詳しい解説はコマンドリファレンスなどをご覧ください。<br/>
            <h2>まず初めに</h2>
            Discordアプリのアップデートを行ってください。すでに最新である場合は問題ありません。<br/>
            特にスマホをお使いの方はアップデートをしないとこのBOTを利用できない可能性が高まります。ご注意ください。
            <h2>スラッシュコマンドの使い方</h2>
            Discordのメッセージ欄に`/`と入力すると使用できるコマンドが出現します。<br/>
            役職パネルでは`/rp`から始まるコマンドを利用してパネルを作ったり、役職を追加したりします。<br/>
            <StaticImage src="../images/test.png" alt={""} height={500}/>
            <h2>createコマンド</h2>
            パネルを作る時は`create`コマンドを利用します。例えば、以下のようになります。<br/>
            パネルを作るときは、「@りんご」のところをパネルに追加したい役職に置き換えてください。<br/>
            <CommandBox copyable={false}>
                /rp create role:@りんご
            </CommandBox>
            このコマンドを実行すると以下のようになります
            <StaticImage src="../images/quickstart-2.png" alt={""} height={500}/>
            <h2>addコマンド</h2>
            パネルに役職を追加する時は`add`コマンドを利用します。<br/>
            こちらのコマンドは一番最後に作ったパネル or 後に紹介する選択コマンドで選んだパネル　に対して新たに役職を追加することができます。
            コマンド例は以下の通りです。
            <CommandBox copyable={false}>
                /rp add role1:@バナナ role2:@メロン
            </CommandBox>
            このコマンドを実行すると以下のようになります
            <StaticImage src="../images/quickstart-3.png" alt={""} height={500}/>
            <h2>選択コマンド</h2>
            追加先のパネルを選択するには、まずパネルを右クリックします。<br/>
            右クリックした先から「アプリ」&gt;「パネル選択」と選ぶとパネルの選択ができるようになります。<br/>
            その後、`add`コマンドを使用すると、選択したパネルに役職を追加できます。
        </div>
    )
}

export default QuickStart