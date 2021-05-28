import { createElement, useEffect, useState } from "react";

export function EnumMap(props) {
    const [enuMap, setEnuMap] = useState([])

    useEffect(() => {
        if (props.data.status === 'available') {
            let id = props.data.items[0].id
            mx.data.get({
                guid: id,
                callback: obj => {
                    setEnuMap(obj.getEnumMap('EnumValue'))
                },
                error: err => {
                    alert(err)
                }
            })
        }
        return () => {
            // cleanup
        }
    }, [props.data])

    return (
        <div>Enum Map:{enuMap.map(enu => {return <li>{enu.key}: {enu.caption}</li>})}</div>
    );
}
