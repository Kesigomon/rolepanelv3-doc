import * as React from "react"

// markup
const TosPage = () => {
    return (
        <div>
            <h1>役職パネル利用規約</h1>
            <h2>この利用規約について</h2>
            <p>この利用規約は開発者ケシゴモン(以下開発者といいます)
            が提供するdiscord bot役職パネルv3(以下botと言います)の利用に関する条件を、
            このbotを利用する利用者と開発者の間で定めるものです。</p>
            <p>この利用規約は通知なく変更される場合があります。</p>
            <p>botの導入をもって、この利用規約また禁止事項を理解し、同意したものとします。</p>
            <h2>禁止事項</h2>
            このbotを利用するにあたり、以下の事項を禁止します。<br/>
            <ul>
                <li>botを商法に転用すること</li>
                <li>botに負荷をかける行為</li>
                <li>botのバグを悪用する行為</li>
                <li>開発者または関係者、第三者になりすます、意図的に虚偽の情報を流布させる行為</li>
                <li>その他開発者が不適切だと判断したこと</li>
            </ul>
            <h2>責任</h2>
            このbotを利用するにあたり、開発者は発生した損害の一切の責任を負いません。
            <h2>利用権限</h2>
            開発者は、このbotを導入されているサーバーから退出させるなどして、いつでも利用者から利用権限を剥奪できるものとします。
            また、これらの措置を講じた理由を開示する義務を負いません。
            <h2>サービスの変更・終了</h2>
            このbotの仕様、デザインなどの事項については開発者が任意に設定・構築・変更などできるものとします。
            またこのbotは予告なく終了または停止する場合があります。
            これらの変更・終了に関して、開発者は一切の責任を負いません。
            <h1>プライバシーポリシー</h1>
            <h2>利用目的</h2>
            <ul>
                <li>サービス提供のため </li>
                <li>サービスの利用状況の監視のため（ロギング・不正利用の監視）  </li>
                <li>サービスの改善のため（主にデバッグ用） </li>
            </ul>
            <h2>収集する情報</h2>
            利用者がこのbotを利用する際、開発者は以下の情報をbotを通して自動的に収集します。
            <ul>
                <li>リアクション情報</li>
                <li>アプリコマンド（スラッシュコマンド・コンテキストコマンド・メニューコンポーネント etc...）によって入力された情報 </li>
                <li>メンバーの役職情報</li>
                <li>ギルド及びチャンネルの諸情報（ギルドの名前、役職情報など）</li>
                <li>個人のアカウントのID及び名前</li>
            </ul>
            <h2>情報の削除について</h2>
            <p>情報の削除を要求される場合は、ただちにこのbotをサーバーからキック等して、サーバーに導入されていない状態にしてください。</p>
            <p>その場合でも、サービスの利用状況の監視のための情報は削除されませんので予めご了承ください。</p>
        </div>
    )
}

export default TosPage