export const NameList = ()=>{
    const names = [
        'Bruce','Collins','Emmanuel','Fridah','Nahashon'
    ]

    return <div>
        {
            names.map( (name) =>{
                return <p key={name}>{ name }</p>
            } )
        }
    </div>
}