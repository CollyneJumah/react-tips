import styles from '../myStyle.module.css'

export const InlineStyling = () =>{
    const heading = {
        fontSize: '42px',
        color: '#999'
    }
    return (
        <>
            <h1 style={heading}>AWS X-Ray</h1>
            <h5 className={styles.error}>This is a success message</h5>
        </>
    )

}