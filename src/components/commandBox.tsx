import React, {ClipboardEventHandler, PropsWithChildren, useState} from "react";
import {FormControl, InputAdornment, OutlinedInput, InputLabel} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from "@mui/material/IconButton";

type props = {
    label?: string
    copyable?: boolean
}
type state = 'default' | 'success' | 'error'
export const CommandBox = (props: PropsWithChildren<props>) => {
    const copyable = props.copyable ?? true
    const label = props.label
    const [state, setState] = useState<state>('default');
    const labelName =
        label ? label :
        !copyable ? 'コマンドのコピーはできません。自分で打って試してみましょう。' :
        state === 'success' ? "コピーしました！" :
        state === 'error' ?  "コピーに失敗しました" :
        "右のボタンをクリックするとコピーできます";
    const command = props.children?.toLocaleString() ?? "";
    const handleFocusOut = () =>{
        setState('default')
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(command)
            .then(() => setState("success"))
            .catch(() => setState("error"))
    }
    const onCopy: ClipboardEventHandler = (e)=>{
        if (copyable){
            return true;
        }
        setState("error")
        e.preventDefault()
        return false;
    }
    const endAdornment = copyable ? (
        <InputAdornment position="end">
            <IconButton
                onClick={handleCopy}
            >
                <ContentCopyIcon/>
            </IconButton>
        </InputAdornment>
    ) : (<></>);
    return (
        <FormControl
            onCopy={onCopy}
            fullWidth
            className={"commandBox"}
            margin="dense"
            variant="outlined"
            onBlur={handleFocusOut}
            color={state !== 'default' ? state : 'info'}
            focused={state === 'success' || state == 'error'}
        >
            <InputLabel>{labelName}</InputLabel>
            <OutlinedInput
                readOnly
                defaultValue={command}
                endAdornment={endAdornment}
                label={labelName}
            />
        </FormControl>
    )


};

export default CommandBox