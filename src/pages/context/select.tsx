import React from "react";
import ContextPageWarn from "../../components/contextPageWarn";
import {StaticImage} from "gatsby-plugin-image";

const SelectPage = () => {
    return(
        <div>
            <ContextPageWarn/>
            <h1>
                パネル選択
            </h1>
            コマンドの対象とするパネルを選択します
            <h2>
                選択のやり方
            </h2>
            <ol>
                <li>メッセージにカーソルを合わせて右クリックします</li>
                <StaticImage src="../../images/select1.png" alt={""} height={400}/>
                <li>「アプリ」→「パネル選択」とクリックします</li>
                <StaticImage src="../../images/select2.png" alt={""} height={400}/>
                <li>選択したパネルのリンクが返されれば選択完了になります。</li>
                <StaticImage src="../../images/select3.png" alt={""} height={400}/>
            </ol>
        </div>
    )
}

export default SelectPage;